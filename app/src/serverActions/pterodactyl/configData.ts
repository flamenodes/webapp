import z from 'zod'
import { ptero } from './client'
import { getAllPetroNode } from './nodes'
import { findPetroAvailableAllocation } from './allocations'
import { convertPetroEggVariablesToEnvironment } from './nests-egg'
import { prisma } from '#/db'

export const pteroServerSchema = z.object({
  name: z.string(),
  user: z.number(),
  egg: z.number(),
  nest: z.number(),
  specs: z.object({
    cpu: z.number(),
    memory: z.number(),
    swap: z.number(),
    disk: z.number(),
    database: z.number(),
    allocation: z.number(),
    backups: z.number(),
  }),
})

export const petroEggSchema = z.object({
  docker_image: z.string(),
  startup: z.string(),
  environment: z.any(),
})

export type PteroEgg = z.infer<typeof petroEggSchema>

export const getPetroEggData = async ({
  nestId,
  eggId,
}: {
  nestId: number
  eggId: number
}) => {
  const res = await ptero.get(`/application/nests/${nestId}/eggs/${eggId}`, {
    params: {
      include: 'variables',
    },
  })
  console.log(res.data.attributes)
  return res.data.attributes
}

export const pteroServerData = async (
  data: z.infer<typeof pteroServerSchema>,
  excludeAllocations?: number[],
) => {
  const eggData: PteroEgg = await getPetroEggData({
    nestId: data.nest,
    eggId: data.egg,
  })

  // Read node deployment settings from DB
  const settings = await prisma.razorpayConfig.findFirst({
    select: { pteroNodeMode: true, pteroNodeId: true },
  })
  const nodeMode = (settings?.pteroNodeMode ?? 'balance') as 'balance' | 'specific'
  const nodeId = settings?.pteroNodeId ?? undefined

  const allocation = await findPetroAvailableAllocation({
    mode: nodeMode,
    ...(nodeMode === 'specific' && nodeId ? { nodeId } : {}),
    ...(excludeAllocations ? { excludeAllocations } : {}),
  })

  // Missing values are a product-configuration problem, so say so loudly instead
  // of quietly shipping an undersized server.
  const missing: string[] = []
  if (!data.specs.cpu) missing.push('cpu')
  if (!data.specs.memory) missing.push('memory')
  if (!data.specs.disk) missing.push('disk')
  if (missing.length > 0) {
    console.warn(
      `⚠️  Server "${data.name}" has no ${missing.join(', ')} in its product specs — using fallback limits. ` +
        `Set them in Admin → Products → Pterodactyl Resources.`,
    )
  }

  const cpu = data.specs.cpu || 100
  const memory = data.specs.memory || 512
  const disk = data.specs.disk || 1024
  const swap = data.specs.swap >= 0 ? data.specs.swap : 0
  const database = data.specs.database >= 0 ? data.specs.database : 0
  const allocations = data.specs.allocation || 1
  const backups = data.specs.backups >= 0 ? data.specs.backups : 0

  console.log('🚀 Deploying server with specs:', { cpu, memory, disk, swap, database, allocations, backups })

  const serverData = {
    name: data.name,
    user: data.user,
    egg: data.egg,
    nest: data.nest,
    docker_image: eggData.docker_image,
    startup: eggData.startup,
    environment: convertPetroEggVariablesToEnvironment(eggData),
    limits: {
      memory: memory,
      swap: swap,
      disk: disk,
      io: 500,
      cpu: cpu,
      oom_disabled: false,
    },
    feature_limits: {
      databases: database,
      allocations: allocations,
      backups: backups,
    },
    allocation: {
      default: allocation.allocation,
    },
  }
  return serverData
}

// The key/alias handling lives in an isomorphic module so the admin product
// form and this deployer can never disagree about what a spec key means.
import { normalizeSpecSource, parseSpecValue, type SpecKey } from '#/lib/ptero-specs'

export { normalizeSpecSource }

/** Build specs for a Pterodactyl server from a product's specs JSON field */
export function extractPteroSpecsFromProduct(productSpecs: unknown) {
  const source = normalizeSpecSource(productSpecs)

  const read = (key: SpecKey, fallback = 0) => {
    const parsed = parseSpecValue(source[key], key)
    return parsed === null ? fallback : parsed
  }

  const result = {
    cpu: read('cpu'),
    memory: read('memory'),
    disk: read('disk'),
    swap: read('swap'),
    database: read('database'),
    allocation: read('allocation', 1),
    backups: read('backups'),
  }

  const unresolved = (['cpu', 'memory', 'disk'] as const).filter((key) => !result[key])
  if (unresolved.length > 0) {
    console.warn(
      `⚠️  Product specs did not resolve ${unresolved.join(', ')}. ` +
        `Recognised keys: cpu, memory, disk, swap, databases, allocations, backups.`,
    )
  }

  console.log('✅ Extracted specs result:', JSON.stringify(result, null, 2))
  return result
}

/**
 * Resolve the nest/egg (and extra environment variables) for a deployment from
 * the product specs, letting the configuration values the customer purchased
 * override them. Shared by the online-purchase and admin-deploy paths so both
 * behave identically.
 */
export async function resolvePteroEggConfig({
  productSpecs,
  pteroConfig,
  configuration,
}: {
  productSpecs?: unknown
  /** Optional product-level override block ({ nest, egg, extraEnv }). */
  pteroConfig?: unknown
  configuration?: unknown
}) {
  const source = normalizeSpecSource(productSpecs)

  const override = (pteroConfig ?? {}) as Record<string, unknown>

  const eggFromProduct = parseSpecValue(source.egg, 'egg')
  const nestFromProduct = parseSpecValue(source.nest, 'nest')

  let egg = eggFromProduct ?? Number(override.egg ?? process.env.PTERO_DEFAULT_EGG ?? 1)
  let nest = nestFromProduct ?? Number(override.nest ?? process.env.PTERO_DEFAULT_NEST ?? 1)
  let extraEnv: Record<string, string> = {
    ...((override.extraEnv as Record<string, string>) ?? {}),
  }

  const configValueIds = Object.values((configuration ?? {}) as Record<string, unknown>).filter(
    (value): value is string => typeof value === 'string' && value.length > 0,
  )

  if (configValueIds.length > 0) {
    const configValues = await prisma.configurationValue.findMany({
      where: { value: { in: configValueIds } },
    })

    for (const configValue of configValues) {
      const metadata = configValue.metadata as Record<string, any> | null
      if (!metadata) continue
      if (metadata.eggId) egg = Number(metadata.eggId)
      if (metadata.nestId) nest = Number(metadata.nestId)
      if (metadata.envVars && typeof metadata.envVars === 'object') {
        extraEnv = { ...extraEnv, ...metadata.envVars }
      }
    }
  }

  if (!Number.isFinite(egg) || egg <= 0 || !Number.isFinite(nest) || nest <= 0) {
    throw new Error(
      `Could not resolve a Pterodactyl egg/nest for this product (got egg=${egg}, nest=${nest}). ` +
        `Set them in the product's Pterodactyl Resources, or configure PTERO_DEFAULT_EGG / PTERO_DEFAULT_NEST.`,
    )
  }

  return { egg, nest, extraEnv }
}
