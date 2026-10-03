/**
 * Plain (non-`createServerFn`) deployment implementation.
 *
 * This is the single place that talks to the Pterodactyl Application API to
 * provision a server, so the BullMQ worker, the admin actions and the inline
 * fallbacks all behave identically. Functions here **throw** on failure — the
 * caller decides whether that means a BullMQ retry, a `FAILED` status, or a
 * fallback to inline processing.
 */
import { UnrecoverableError } from 'bullmq'
import { prisma } from '#/db'
import { calculateExpiryDate } from '../billing/expiry'
import { ptero, getPanelServerUrl } from '../pterodactyl/client'
import { pteroServerData } from '../pterodactyl/configData'
import { getPteroServerId } from '../pterodactyl/resolve'
import type { DeploymentJobData } from './queues'

/** Everything `performDeployment`/`performRedeploy` need. */
export type DeploymentPayload = Omit<
  DeploymentJobData,
  'type' | 'userEmail' | 'userName' | 'mode'
>

export interface DeploymentResult {
  ip: string | null
  port: number | null
  pterodactylId: number
  identifier: string | null
  panelUrl?: string
}

interface AllocationInfo {
  ip: string | null
  ipAlias: string | null
  port: number | null
}

const DAEMON_ERROR_CODE = 'DaemonConnectionException'

function isDaemonError(error: any): boolean {
  const errors = error?.response?.data?.errors ?? error?.response?.errors
  return Boolean(
    Array.isArray(errors) && errors.some((e: any) => e?.code === DAEMON_ERROR_CODE),
  )
}

function describeError(error: any) {
  return {
    message: error?.message,
    status: error?.response?.status,
    errors: error?.response?.data?.errors ?? error?.response?.errors,
  }
}

function readAllocation(attributes: any): AllocationInfo {
  const allocation = attributes?.relationships?.allocations?.data?.[0]?.attributes
  return {
    ip: allocation?.ip ?? null,
    ipAlias: allocation?.ip_alias ?? null,
    port: allocation?.port ?? null,
  }
}

/**
 * `POST /application/servers` does not always inline `relationships.allocations`,
 * which left `ip`/`port` null in the database. Re-read the server with includes
 * so the stored panel data is complete.
 */
async function fetchServerAttributes(pterodactylServerId: number): Promise<any | null> {
  try {
    const res = await ptero.get(`/application/servers/${pterodactylServerId}`, {
      params: { include: 'allocations,node' },
    })
    return res.data?.attributes ?? res.data?.data?.attributes ?? null
  } catch (error: any) {
    console.warn(
      `⚠️  Could not re-fetch Pterodactyl server ${pterodactylServerId}: ${error?.message}`,
    )
    return null
  }
}

async function buildPayload(data: DeploymentPayload, triedAllocations: number[]) {
  const serverPayload = await pteroServerData(
    {
      name: data.name,
      user: data.user,
      egg: data.egg,
      nest: data.nest,
      specs: data.specs,
    },
    triedAllocations,
  )

  if (data.extraEnv && Object.keys(data.extraEnv).length > 0) {
    serverPayload.environment = { ...serverPayload.environment, ...data.extraEnv }
  }

  return serverPayload
}

/** Persist a freshly created (or re-read) panel server onto its DB row. */
async function persistCreatedServer(
  data: DeploymentPayload,
  attributes: any,
): Promise<DeploymentResult> {
  const pterodactylId: number = attributes.id
  let resolved = attributes

  if (readAllocation(attributes).ip == null) {
    const full = await fetchServerAttributes(pterodactylId)
    if (full) {
      resolved = {
        ...attributes,
        ...full,
        relationships: full.relationships ?? attributes.relationships,
      }
    }
  }

  const { ip, port } = readAllocation(resolved)
  const identifier = resolved.identifier ?? attributes.identifier ?? null

  // The panel server now exists. If the database write fails we must NOT let
  // BullMQ retry the job — a retry would create a duplicate panel server. Retry
  // the write itself, then fail unrecoverably.
  for (let attempt = 1; ; attempt++) {
    try {
      await prisma.server.update({
        where: { id: data.serverId },
        data: {
          status: 'ACTIVE',
          pterodactylData: resolved,
          pterodactylServerId: pterodactylId,
          ip,
          port,
          // Billing cycle starts on delivery, not on order creation.
          expiresAt: calculateExpiryDate(data.billingPeriod ?? 'MONTHLY', data.customDays),
        },
      })
      break
    } catch (error: any) {
      if (attempt >= 3) {
        throw new UnrecoverableError(
          `Pterodactyl server ${pterodactylId} was created but could not be saved to the database: ${error.message}`,
        )
      }
      console.warn(`⚠️  Server ${data.serverId} not saved (attempt ${attempt}/3), retrying...`)
      await new Promise((resolve) => setTimeout(resolve, 1000 * attempt))
    }
  }

  if (data.orderId) {
    await prisma.order
      .update({ where: { id: data.orderId }, data: { status: 'DELIVERED' } })
      .catch((err) => console.warn(`⚠️  Could not mark order ${data.orderId} delivered:`, err.message))
  }

  return { ip, port, pterodactylId, identifier, panelUrl: getPanelServerUrl(identifier) }
}

/**
 * Create the server in Pterodactyl, retrying on `DaemonConnectionException`
 * with a different allocation each attempt.
 */
export async function performDeployment(
  data: DeploymentPayload,
  options: { maxRetries?: number } = {},
): Promise<DeploymentResult> {
  const maxRetries = options.maxRetries ?? 5
  const triedAllocations: number[] = []
  let lastError: any = null

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`\n🔄 Deployment attempt ${attempt}/${maxRetries} for ${data.name}`)

      const serverPayload = await buildPayload(data, triedAllocations)
      triedAllocations.push(serverPayload.allocation.default)

      const res = await ptero.post('/application/servers', serverPayload)
      const attributes = res.data?.attributes ?? res.data?.data?.attributes

      if (!attributes?.id) {
        throw new Error('No server attributes returned from Pterodactyl')
      }

      const result = await persistCreatedServer(data, attributes)
      console.log(`✅ Deployment successful for ${data.name} - ${result.ip}:${result.port}`)
      return result
    } catch (error: any) {
      lastError = error
      const daemonError = isDaemonError(error)

      console.error(`❌ Attempt ${attempt} failed:`, { daemonError, ...describeError(error) })

      if (daemonError && attempt < maxRetries) {
        const delay = 3000 + attempt * 1000
        console.warn(`⚠️ Daemon unavailable, retrying in ${delay}ms with another allocation...`)
        await new Promise((resolve) => setTimeout(resolve, delay))
        continue
      }

      throw error
    }
  }

  throw lastError ?? new Error('Deployment failed after all retries')
}

/**
 * Redeploy an existing server: re-apply build limits and reinstall. If the panel
 * server no longer exists, fall back to a full create.
 */
export async function performRedeploy(data: DeploymentPayload): Promise<DeploymentResult> {
  const server = await prisma.server.findUniqueOrThrow({ where: { id: data.serverId } })
  const pterodactylServerId = getPteroServerId(server)

  let exists = false
  if (pterodactylServerId) {
    try {
      await ptero.get(`/application/servers/${pterodactylServerId}`)
      exists = true
    } catch (error: any) {
      if (error?.response?.status !== 404) throw error
      console.warn(
        `⚠️  Pterodactyl server ${pterodactylServerId} not found, creating a new one`,
      )
    }
  }

  if (!exists) {
    return performDeployment(data)
  }

  console.log(`\n🔄 Redeploying ${data.name} (Pterodactyl ID: ${pterodactylServerId})`)

  await ptero.post(`/application/servers/${pterodactylServerId}/build`, {
    limits: {
      memory: data.specs.memory,
      swap: data.specs.swap,
      disk: data.specs.disk,
      io: 500,
      cpu: data.specs.cpu,
      threads: null,
    },
    feature_limits: {
      databases: data.specs.database,
      allocations: data.specs.allocation,
      backups: data.specs.backups,
    },
  })

  await ptero.post(`/application/servers/${pterodactylServerId}/reinstall`)

  const attributes = await fetchServerAttributes(pterodactylServerId)
  const allocation = attributes ? readAllocation(attributes) : null
  const identifier = attributes?.identifier ?? null

  await prisma.server.update({
    where: { id: data.serverId },
    data: {
      status: 'ACTIVE',
      ...(attributes ? { pterodactylData: attributes } : {}),
      ...(allocation?.ip ? { ip: allocation.ip } : {}),
      ...(allocation?.port ? { port: allocation.port } : {}),
      pterodactylServerId,
    },
  })

  console.log(`✅ Redeployment successful for ${data.name}`)
  return {
    ip: allocation?.ip ?? null,
    port: allocation?.port ?? null,
    pterodactylId: pterodactylServerId,
    identifier,
    panelUrl: getPanelServerUrl(identifier),
  }
}

/** Mark a server failed — used by callers that swallow the thrown error. */
export async function markServerFailed(serverId: string, reason?: string) {
  console.error(`❌ Deployment failed for server ${serverId}${reason ? `: ${reason}` : ''}`)
  await prisma.server
    .update({ where: { id: serverId }, data: { status: 'FAILED' } })
    .catch((err) => console.warn('⚠️  Could not mark server FAILED:', err.message))
}
