import { createServerFn } from '@tanstack/react-start'
import { prisma } from '#/db'
import { getSession } from '@/handlers/auth.handler'
import { ptero, pteroClient, getPanelServerUrl } from '../pterodactyl/client'
import { getPteroServerId } from '../pterodactyl/resolve'
import { z } from 'zod'
import net from 'net'

async function requireAdmin() {
  const session = await getSession()
  if (!session?.user) throw new Error('Unauthorized')
  if ((session.user as any).role?.toUpperCase() !== 'ADMIN' && (session.user as any).role?.toUpperCase() !== 'OWNER') throw new Error('Forbidden')
  return session
}

export const getAdminServers = createServerFn({ method: 'GET' }).handler(async () => {
  await requireAdmin()

  const servers = await prisma.server.findMany({
    include: {
      user: { select: { id: true, name: true, email: true } },
      orderItem: {
        include: {
          product: { select: { planName: true, deployMode: true } },
        },
      },
    },
    orderBy: { createdAt: 'desc' },
  })

  return servers.map((s) => ({
    ...s,
    deployMode: (s.orderItem?.product as any)?.deployMode ?? 'CUSTOM',
    productName: s.orderItem?.product?.planName ?? 'Unknown',
  }))
})

/**
 * Panel details for a server, for the admin "Live Panel Data" card.
 *
 * The stored `PTERO_SECRET` is an **application** key (`ptla_`), which may only
 * call `/api/application/*`. Calling `/api/client/*` with it returns 403, which
 * is why this used to render "Could not fetch Pterodactyl data." Live resource
 * usage is only available from the client API, so it is fetched with the
 * optional `PTERO_CLIENT_SECRET` (`ptlc_`) key and simply omitted when that key
 * is not configured.
 */
export const fetchPteroServerData = createServerFn({ method: 'POST' })
  .validator((data: unknown) => z.object({ serverId: z.string() }).parse(data))
  .handler(async ({ data }) => {
    await requireAdmin()

    const server = await prisma.server.findUniqueOrThrow({ where: { id: data.serverId } })
    const stored = (server.pterodactylData as any) ?? {}
    const pteroId = getPteroServerId(server)
    const identifier = stored.identifier ?? stored.attributes?.identifier ?? null

    let panelError: string | null = null
    let application: any = null

    if (pteroId) {
      try {
        const res = await ptero.get(`/application/servers/${pteroId}`, {
          params: { include: 'allocations,node,user' },
        })
        application = res.data?.attributes ?? res.data?.data?.attributes ?? null
      } catch (error: any) {
        panelError =
          error?.response?.status === 404
            ? 'This server no longer exists in the Pterodactyl panel.'
            : (error?.response?.data?.errors?.[0]?.detail ?? error?.message ?? 'Panel request failed')
      }
    } else {
      panelError = 'No Pterodactyl server is linked to this record yet.'
    }

    // Live usage is best-effort: it needs the optional client key.
    let live: any = null
    if (pteroClient && identifier) {
      try {
        const res = await pteroClient.get(`/client/servers/${identifier}/resources`)
        live = res.data?.attributes ?? null
      } catch (error: any) {
        console.warn(
          `⚠️  Live usage unavailable for ${identifier}:`,
          error?.response?.status ?? error?.message,
        )
      }
    }

    // Prefer fresh panel data, fall back to what we stored at creation time.
    const source = application ?? stored
    const allocation = source?.relationships?.allocations?.data?.[0] ?? null
    const node = source?.relationships?.node?.data?.attributes ?? null
    const owner = source?.relationships?.user?.data?.attributes ?? null

    return {
      // Panel data is available if either the live lookup or the stored payload
      // has something to show.
      available: Boolean(application || source?.identifier || source?.uuid || pteroId),
      error: panelError,
      live: Boolean(live),
      state: live?.current_state ?? application?.status ?? null,
      status: application?.status ?? null,
      suspended: application?.suspended ?? null,
      usage: live?.resources
        ? {
            cpu: live.resources.cpu_absolute ?? 0,
            memory: live.resources.memory_bytes ?? 0,
            disk: live.resources.disk_bytes ?? 0,
            network_rx: live.resources.network_rx_bytes ?? 0,
            network_tx: live.resources.network_tx_bytes ?? 0,
            uptime: live.resources.uptime ?? null,
          }
        : null,
      limits: application?.limits ?? stored?.limits ?? null,
      featureLimits: application?.feature_limits ?? stored?.feature_limits ?? null,
      name: application?.name ?? stored?.name ?? server.name,
      description: application?.description ?? stored?.description ?? null,
      identifier: identifier ?? application?.identifier ?? null,
      uuid: application?.uuid ?? stored?.uuid ?? null,
      pterodactylId: pteroId,
      ip: allocation?.attributes?.ip ?? server.ip ?? null,
      ipAlias: allocation?.attributes?.ip_alias ?? null,
      port: allocation?.attributes?.port ?? server.port ?? null,
      allocationId: allocation?.id ?? null,
      nodeId: node?.id ?? source?.node ?? null,
      nodeAlias: node?.name ?? node?.name_short ?? null,
      owner: owner?.email ?? owner?.username ?? null,
      panelUrl: getPanelServerUrl(identifier ?? application?.identifier),
      createdAt: application?.created_at ?? stored?.created_at ?? null,
    }
  })

export const pingAdminServer = createServerFn({ method: 'POST' })
  .validator((data: unknown) => z.object({ serverId: z.string() }).parse(data))
  .handler(async ({ data }) => {
    await requireAdmin()

    const server = await prisma.server.findUniqueOrThrow({ where: { id: data.serverId } })
    if (!server.ip || !server.port) throw new Error('Server has no IP/port configured')

    const online = await new Promise<boolean>((resolve) => {
      const socket = new net.Socket()
      socket.setTimeout(3000)
      socket.once('connect', () => { socket.destroy(); resolve(true) })
      socket.once('error', () => { socket.destroy(); resolve(false) })
      socket.once('timeout', () => { socket.destroy(); resolve(false) })
      socket.connect(server.port!, server.ip!)
    })

    return { online, ip: server.ip, port: server.port }
  })

export const updateAdminServer = createServerFn({ method: 'POST' })
  .validator((data: unknown) =>
    z.object({
      serverId: z.string(),
      ip: z.string().optional(),
      port: z.number().int().min(1).max(65535).optional(),
      label: z.string().optional(),
      status: z.enum(['ACTIVE', 'SUSPENDED', 'TERMINATED', 'PROCESSING']).optional(),
      syncToPanel: z.boolean().optional(),
    }).parse(data),
  )
  .handler(async ({ data }) => {
    await requireAdmin()

    const server = await prisma.server.findUniqueOrThrow({
      where: { id: data.serverId },
      include: { orderItem: { include: { product: { select: { deployMode: true } } } } },
    })
    const resources = (server.resources as any) ?? {}

    if (data.label !== undefined) resources.label = data.label

    const deployMode = server.orderItem?.product?.deployMode ?? 'CUSTOM'
    const pteroId = getPteroServerId(server)
    let panelSync: 'not_applicable' | 'synced' | 'skipped' = 'not_applicable'
    let panelError: string | undefined

    // Suspend/unsuspend in the panel only when the caller asked for it.
    if (deployMode === 'PTERODACTYL' && data.syncToPanel && data.status) {
      if (!pteroId) {
        panelSync = 'skipped'
        panelError = 'This server has no Pterodactyl server id yet, so the panel was not updated.'
      } else if (data.status === 'SUSPENDED' || data.status === 'ACTIVE') {
        try {
          await ptero.post(
            `/application/servers/${pteroId}/${data.status === 'SUSPENDED' ? 'suspend' : 'unsuspend'}`,
          )
          panelSync = 'synced'
        } catch (pteroError: any) {
          console.error(`Pterodactyl status sync failed for server ${pteroId}:`, pteroError.message)
          throw new Error(
            pteroError?.response?.data?.errors?.[0]?.detail ||
              'Failed to sync status to the Pterodactyl panel',
          )
        }
      }
    }

    const updated = await prisma.server.update({
      where: { id: data.serverId },
      data: {
        ...(data.ip !== undefined ? { ip: data.ip } : {}),
        ...(data.port !== undefined ? { port: data.port } : {}),
        ...(data.status !== undefined ? {
          status: data.status,
          suspended: data.status === 'SUSPENDED',
        } : {}),
        resources,
      },
    })

    return { ...updated, panelSync, panelError }
  })

export const deleteAdminServer = createServerFn({ method: 'POST' })
  .validator((data: unknown) => z.object({ serverId: z.string() }).parse(data))
  .handler(async ({ data }) => {
    await requireAdmin()

    const server = await prisma.server.findUniqueOrThrow({
      where: { id: data.serverId },
      include: { orderItem: { include: { product: { select: { deployMode: true } } } } },
    })

    const deployMode = server.orderItem?.product?.deployMode ?? 'CUSTOM'
    const pteroId = getPteroServerId(server)

    if (deployMode === 'PTERODACTYL' && pteroId) {
      try {
        await ptero.delete(`/application/servers/${pteroId}`)
      } catch (pteroError: any) {
        console.error(`Failed to delete Pterodactyl server ${pteroId}:`, pteroError.message)
      }
    }

    await prisma.server.delete({ where: { id: data.serverId } })
    return { success: true }
  })

export const bulkDeleteServers = createServerFn({ method: 'POST' })
  .validator((data: unknown) => z.object({ serverIds: z.array(z.string()) }).parse(data))
  .handler(async ({ data }) => {
    await requireAdmin()

    const servers = await prisma.server.findMany({
      where: { id: { in: data.serverIds } },
      include: { orderItem: { include: { product: { select: { deployMode: true } } } } },
    })

    for (const server of servers) {
      const deployMode = server.orderItem?.product?.deployMode ?? 'CUSTOM'
      const pteroId = getPteroServerId(server)

      if (deployMode === 'PTERODACTYL' && pteroId) {
        try {
          await ptero.delete(`/application/servers/${pteroId}`)
        } catch (pteroError: any) {
          console.error(`Failed to delete Pterodactyl server ${pteroId}:`, pteroError.message)
        }
      }
    }

    await prisma.server.deleteMany({ where: { id: { in: data.serverIds } } })
    return { success: true, deletedCount: servers.length }
  })

/**
 * Retry a failed deployment. Queues the work through BullMQ so the request
 * returns immediately; falls back to inline processing without Redis.
 */
export const retryDeployment = createServerFn({ method: 'POST' })
  .validator((data: unknown) => z.object({ serverId: z.string() }).parse(data))
  .handler(async ({ data }) => {
    await requireAdmin()

    const { buildDeploymentRequest, dispatchDeployment } = await import('./deploy-payload')
    const request = await buildDeploymentRequest(data.serverId)

    await prisma.server.update({
      where: { id: data.serverId },
      data: { status: 'PROCESSING' },
    })

    return dispatchDeployment(request, { mode: 'create', source: 'retry' })
  })

/** Redeploy an existing server (re-apply build limits + reinstall). */
export const redeployServer = createServerFn({ method: 'POST' })
  .validator((data: unknown) => z.object({ serverId: z.string() }).parse(data))
  .handler(async ({ data }) => {
    await requireAdmin()

    const { buildDeploymentRequest, dispatchDeployment } = await import('./deploy-payload')
    const request = await buildDeploymentRequest(data.serverId)

    await prisma.server.update({
      where: { id: data.serverId },
      data: { status: 'PROCESSING' },
    })

    return dispatchDeployment(request, { mode: 'redeploy', source: 'admin' })
  })
