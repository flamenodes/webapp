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

    // Extract allocation and node info from stored pterodactylData
    const allocationData = pteroData.relationships?.allocations?.data?.[0]?.attributes
    const nodeData = pteroData.relationships?.node?.data?.attributes
    const allocationId = pteroData.relationships?.allocations?.data?.[0]?.id

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
      ip: allocationData?.ip ?? null,
      port: allocationData?.port ?? null,
      allocationId: allocationId ?? null,
      nodeId: nodeData?.id ?? null,
      nodeAlias: nodeData?.name_short ?? nodeData?.name ?? null,
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
    const pteroData = server.pterodactylData as any

    if (deployMode === 'PTERODACTYL' && pteroData?.id && data.syncToPanel) {
      if (data.status) {
        try {
          if (data.status === 'SUSPENDED') {
            await ptero.post(`/application/servers/${pteroData.id}/suspend`)
          } else if (data.status === 'ACTIVE') {
            await ptero.post(`/application/servers/${pteroData.id}/unsuspend`)
          }
        } catch (pteroError: any) {
          console.error(`Pterodactyl status sync failed for server ${pteroData.id}:`, pteroError.message)
          throw new Error('Failed to sync status to Pterodactyl panel')
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

export const deleteAdminServer = createServerFn({ method: 'POST' })
  .inputValidator((data: unknown) => z.object({ serverId: z.string() }).parse(data))
  .handler(async ({ data }) => {
    await requireAdmin()

    const server = await prisma.server.findUniqueOrThrow({
      where: { id: data.serverId },
      include: { orderItem: { include: { product: { select: { deployMode: true } } } } },
    })

    const deployMode = server.orderItem?.product?.deployMode ?? 'CUSTOM'
    const pteroData = server.pterodactylData as any

    if (deployMode === 'PTERODACTYL' && pteroData?.id) {
      try {
        await ptero.delete(`/application/servers/${pteroData.id}`)
      } catch (pteroError: any) {
        console.error(`Failed to delete Pterodactyl server ${pteroData.id}:`, pteroError.message)
      }
    }

    await prisma.server.delete({ where: { id: data.serverId } })
    return { success: true }
  })

export const bulkDeleteServers = createServerFn({ method: 'POST' })
  .inputValidator((data: unknown) => z.object({ serverIds: z.array(z.string()) }).parse(data))
  .handler(async ({ data }) => {
    await requireAdmin()

    const servers = await prisma.server.findMany({
      where: { id: { in: data.serverIds } },
      include: { orderItem: { include: { product: { select: { deployMode: true } } } } },
    })

    for (const server of servers) {
      const deployMode = server.orderItem?.product?.deployMode ?? 'CUSTOM'
      const pteroData = server.pterodactylData as any

      if (deployMode === 'PTERODACTYL' && pteroData?.id) {
        try {
          await ptero.delete(`/application/servers/${pteroData.id}`)
        } catch (pteroError: any) {
          console.error(`Failed to delete Pterodactyl server ${pteroData.id}:`, pteroError.message)
        }
      }
    }

    await prisma.server.deleteMany({ where: { id: { in: data.serverIds } } })
    return { success: true, deletedCount: servers.length }
  })

export const retryDeployment = createServerFn({ method: 'POST' })
  .inputValidator((data: unknown) => z.object({ serverId: z.string() }).parse(data))
  .handler(async ({ data }) => {
    await requireAdmin()

    const server = await prisma.server.findUniqueOrThrow({
      where: { id: data.serverId },
      include: {
        user: { select: { id: true, name: true, email: true } },
        orderItem: {
          include: {
            order: { select: { id: true } },
            product: true,
          },
        },
      },
    })

    if (server.orderItem?.product?.deployMode !== 'PTERODACTYL') {
      throw new Error('Manual deployment only supported for Pterodactyl servers')
    }

    console.log('='.repeat(80));
    console.log('🔄 RETRY DEPLOYMENT - DEBUGGING SPECS');
    console.log('='.repeat(80));
    console.log('📦 Product ID:', server.orderItem.product.id);
    console.log('📦 Product Name:', server.orderItem.product.planName);
    console.log('📦 Product Object:', JSON.stringify(server.orderItem.product, null, 2));
    console.log('📦 Product specs field:', JSON.stringify(server.orderItem.product.specs, null, 2));
    console.log('📦 Product specs type:', typeof server.orderItem.product.specs);
    console.log('📦 OrderItem specsSnapshot:', JSON.stringify(server.orderItem?.specsSnapshot, null, 2));
    console.log('='.repeat(80));

    const { extractPteroSpecsFromProduct } = await import('../pterodactyl/configData')
    const specs = extractPteroSpecsFromProduct(server.orderItem.product.specs)
    
    console.log('✅ Final extracted specs:', JSON.stringify(specs, null, 2));
    console.log('='.repeat(80));
    
    // Validate critical specs are not 0
    if (!specs.cpu || !specs.memory || !specs.disk) {
      throw new Error('Product specs are incomplete. CPU, memory, and disk must be greater than 0.')
    }

    const pteroConfig = (server.orderItem.product.pteroConfig as any) ?? {}
    const orderId = server.orderItem.order?.id
    
    if (!orderId) throw new Error('No order found for this server')

    await prisma.server.update({
      where: { id: data.serverId },
      data: { status: 'PROCESSING' },
    })

    const { deployServerFn } = await import('../queue/deploy-functions')
    
    const result = await deployServerFn({
      data: {
        orderId,
        orderItemId: server.orderItemId!,
        serverId: server.id,
        name: server.name,
        user: pteroConfig.user ?? 1,
        nest: pteroConfig.nest ?? 1,
        egg: pteroConfig.egg ?? 1,
        extraEnv: pteroConfig.extraEnv ?? {},
        specs,
        type: 'pterodactyl',
        userEmail: server.user?.email ?? '',
        userName: server.user?.name ?? 'User',
      },
    })
    
    return { 
      success: result.success,
      message: result.success ? 'Deployment completed successfully' : result.error || 'Deployment failed'
    }
  })

export const redeployServer = createServerFn({ method: 'POST' })
  .inputValidator((data: unknown) => z.object({ serverId: z.string() }).parse(data))
  .handler(async ({ data }) => {
    await requireAdmin()

    const server = await prisma.server.findUniqueOrThrow({
      where: { id: data.serverId },
      include: {
        user: { select: { id: true, name: true, email: true } },
        orderItem: {
          include: {
            order: { select: { id: true } },
            product: true,
          },
        },
      },
    })

    if (server.orderItem?.product?.deployMode !== 'PTERODACTYL') {
      throw new Error('Redeployment only supported for Pterodactyl servers')
    }

    console.log('='.repeat(80));
    console.log('🔄 REDEPLOY - DEBUGGING SPECS');
    console.log('='.repeat(80));
    console.log('📦 Product ID:', server.orderItem.product.id);
    console.log('📦 Product Name:', server.orderItem.product.planName);
    console.log('📦 Product Object:', JSON.stringify(server.orderItem.product, null, 2));
    console.log('📦 Product specs field:', JSON.stringify(server.orderItem.product.specs, null, 2));
    console.log('📦 Product specs type:', typeof server.orderItem.product.specs);
    console.log('📦 OrderItem specsSnapshot:', JSON.stringify(server.orderItem?.specsSnapshot, null, 2));
    console.log('='.repeat(80));

    const { extractPteroSpecsFromProduct } = await import('../pterodactyl/configData')
    const specs = extractPteroSpecsFromProduct(server.orderItem.product.specs)
    
    console.log('✅ Final extracted specs:', JSON.stringify(specs, null, 2));
    console.log('='.repeat(80));
    
    // Validate critical specs are not 0
    if (!specs.cpu || !specs.memory || !specs.disk) {
      throw new Error('Product specs are incomplete. CPU, memory, and disk must be greater than 0.')
    }

    const pteroConfig = (server.orderItem.product.pteroConfig as any) ?? {}

    await prisma.server.update({
      where: { id: data.serverId },
      data: { status: 'PROCESSING' },
    })

    const { redeployServerFn } = await import('../queue/deploy-functions')
    
    const result = await redeployServerFn({
      data: {
        orderId: server.orderItem.order?.id ?? '',
        orderItemId: server.orderItemId!,
        serverId: server.id,
        name: server.name,
        user: pteroConfig.user ?? 1,
        nest: pteroConfig.nest ?? 1,
        egg: pteroConfig.egg ?? 1,
        extraEnv: pteroConfig.extraEnv ?? {},
        specs,
        type: 'pterodactyl',
        userEmail: server.user?.email ?? '',
        userName: server.user?.name ?? 'User',
      },
    })
    
    return { 
      success: result.success,
      message: result.success ? 'Redeployment started successfully' : result.error || 'Redeployment failed'
    }
  })
