import { createServerFn } from '@tanstack/react-start'
import { prisma } from '#/db'
import { getSession } from '@/handlers/auth.handler'
import { ptero } from '../pterodactyl/client'
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

export const fetchPteroServerData = createServerFn({ method: 'POST' })
  .inputValidator((data: unknown) => z.object({ serverId: z.string() }).parse(data))
  .handler(async ({ data }) => {
    await requireAdmin()

    const server = await prisma.server.findUniqueOrThrow({ where: { id: data.serverId } })
    const pteroData = server.pterodactylData as any
    if (!pteroData?.identifier) throw new Error('No Pterodactyl identifier on this server')

    const [resourcesRes, detailsRes] = await Promise.allSettled([
      ptero.get(`/client/servers/${pteroData.identifier}/resources`),
      ptero.get(`/client/servers/${pteroData.identifier}`),
    ])

    const resources =
      resourcesRes.status === 'fulfilled'
        ? resourcesRes.value.data?.attributes
        : null
    const details =
      detailsRes.status === 'fulfilled'
        ? detailsRes.value.data?.attributes
        : null

    return {
      state: resources?.current_state ?? null,
      usage: resources?.resources
        ? {
            cpu: resources.resources.cpu_absolute ?? 0,
            memory: resources.resources.memory_bytes ?? 0,
            disk: resources.resources.disk_bytes ?? 0,
            network_rx: resources.resources.network_rx_bytes ?? 0,
            network_tx: resources.resources.network_tx_bytes ?? 0,
          }
        : null,
      limits: details?.limits ?? null,
      name: details?.name ?? null,
      description: details?.description ?? null,
      identifier: pteroData.identifier,
    }
  })

export const pingAdminServer = createServerFn({ method: 'POST' })
  .inputValidator((data: unknown) => z.object({ serverId: z.string() }).parse(data))
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
  .inputValidator((data: unknown) =>
    z.object({
      serverId: z.string(),
      ip: z.string().optional(),
      port: z.number().int().min(1).max(65535).optional(),
      resources: z.object({
        cpu: z.number().optional(),
        memory: z.number().int().optional(),
        swap: z.number().int().optional(),
        disk: z.number().int().optional(),
        databases: z.number().int().optional(),
        backups: z.number().int().optional(),
        allocations: z.number().int().optional(),
      }).optional(),
      label: z.string().optional(),
      status: z.enum(['ACTIVE', 'SUSPENDED', 'TERMINATED', 'PROCESSING']).optional(),
    }).parse(data),
  )
  .handler(async ({ data }) => {
    await requireAdmin()

    const server = await prisma.server.findUniqueOrThrow({
      where: { id: data.serverId },
      include: { orderItem: { include: { product: { select: { deployMode: true } } } } },
    })
    const resources = (server.resources as any) ?? {}

    if (data.resources?.cpu !== undefined) resources.cpu = data.resources.cpu
    if (data.resources?.memory !== undefined) resources.memory = data.resources.memory
    if (data.resources?.swap !== undefined) resources.swap = data.resources.swap
    if (data.resources?.disk !== undefined) resources.disk = data.resources.disk
    if (data.resources?.databases !== undefined) resources.databases = data.resources.databases
    if (data.resources?.backups !== undefined) resources.backups = data.resources.backups
    if (data.resources?.allocations !== undefined) resources.allocations = data.resources.allocations
    if (data.label !== undefined) resources.label = data.label

    const deployMode = server.orderItem?.product?.deployMode ?? 'CUSTOM'
    const pteroData = server.pterodactylData as any

    if (deployMode === 'PTERODACTYL' && pteroData?.id) {
      // Sync status to Pterodactyl
      if (data.status) {
        try {
          if (data.status === 'SUSPENDED') {
            await ptero.post(`/application/servers/${pteroData.id}/suspend`)
          } else if (data.status === 'ACTIVE') {
            await ptero.post(`/application/servers/${pteroData.id}/unsuspend`)
          }
        } catch (pteroError: any) {
          console.error(`Pterodactyl status sync failed for server ${pteroData.id}:`, pteroError.message)
        }
      }

      // Sync resource specs to Pterodactyl build
      if (data.resources) {
        try {
          await ptero.patch(`/application/servers/${pteroData.id}/build`, {
            allocation: pteroData.allocation,
            memory: resources.memory ?? 512,
            swap: resources.swap ?? 0,
            disk: resources.disk ?? 1024,
            io: 500,
            cpu: resources.cpu ?? 100,
            threads: null,
            oom_disabled: false,
            feature_limits: {
              databases: resources.databases ?? 0,
              allocations: resources.allocations ?? 1,
              backups: resources.backups ?? 0,
            },
          })
        } catch (pteroError: any) {
          console.error(`Pterodactyl build sync failed for server ${pteroData.id}:`, pteroError.message)
        }
      }
    }

    return prisma.server.update({
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
  })
