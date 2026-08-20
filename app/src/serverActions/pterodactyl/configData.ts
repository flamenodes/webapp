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

  // Ensure critical specs are never 0
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

/** Build specs for a Pterodactyl server from a product's specs JSON field */
export function extractPteroSpecsFromProduct(productSpecs: unknown) {
  console.log('🔍 Extracting specs from product:', JSON.stringify(productSpecs, null, 2));

  const s = (productSpecs ?? {}) as Record<string, any>

  // The Product Configuration UI saves Pterodactyl specs nested under a 'ptero' key
  // Check for nested ptero object first, then fall back to root-level keys for backwards compatibility
  const pteroSpecs = s.ptero ?? {}
  const source = { ...s, ...pteroSpecs } // ptero specs take precedence

  // Parse values - they might be strings from the database
  const cpu = typeof source.cpu === 'string' ? Number(source.cpu) : (source.cpu ?? 0)
  const memory = typeof source.memory === 'string' ? Number(source.memory) : (source.memory ?? 0)
  const disk = typeof source.disk === 'string' ? Number(source.disk) : (source.disk ?? 0)
  const swap = typeof source.swap === 'string' ? Number(source.swap) : (source.swap ?? 0)
  const database = typeof source.databases === 'string' ? Number(source.databases) :
                  typeof source.database === 'string' ? Number(source.database) :
                  (source.databases ?? source.database ?? 0)
  const allocation = typeof source.allocations === 'string' ? Number(source.allocations) :
                    typeof source.allocation === 'string' ? Number(source.allocation) :
                    (source.allocations ?? source.allocation ?? 1)
  const backups = typeof source.backups === 'string' ? Number(source.backups) : (source.backups ?? 0)

  const result = {
    cpu,
    memory,
    disk,
    swap,
    database,
    allocation,
    backups,
  }

  console.log('✅ Extracted specs result:', JSON.stringify(result, null, 2));
  return result
}
