import { prisma } from '#/db'
import { getSession } from '@/handlers/auth.handler'
import { createServerFn } from '@tanstack/react-start'
import { ptero } from '@/serverActions/pterodactyl/client'
import z from 'zod'
import { hasPermissionFn } from '@/lib/has-permission'

type PteroNode = {
  id: number
  uuid: string
  name: string
  description: string | null
  fqdn: string
  scheme: string
  maintenance_mode: boolean
  memory: number
  memory_overallocate: number
  disk: number
  disk_overallocate: number
  daemon_listen: number
  daemon_sftp: number
  location_id: number
}

async function fetchPteroNodes(): Promise<PteroNode[]> {
  try {
    const res = await ptero.get('/application/nodes')
    const data: Array<{ attributes: PteroNode }> = res.data?.data ?? []
    return data.map((d) => d.attributes)
  } catch {
    return []
  }
}

function formatRelativeTime(date: Date): string {
  const diff = Date.now() - date.getTime()
  const mins = Math.floor(diff / 60_000)
  if (mins < 1) return 'just now'
  if (mins < 60) return `${mins}m ago`
  const hrs = Math.floor(mins / 60)
  if (hrs < 24) return `${hrs}h ago`
  return `${Math.floor(hrs / 24)}d ago`
}

export const getDashboardStats = createServerFn({ method: 'GET' }).handler(
  async () => {
    const session = await getSession()
    if (!session?.user) throw new Error('Unauthorized')

    const now = new Date()
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
    const startOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1)

    const [
      revenueTotal,
      revenueThisMonth,
      revenueLastMonth,
      activeServers,
      pendingOrders,
      openTickets,
      totalCustomers,
      statusNodes,
      totalTickets,
      resolvedTickets,
      totalOrders,
      paidOrders,
      recentOrders,
      recentTickets,
      pteroNodes,
    ] = await Promise.all([
      prisma.order.aggregate({
        _sum: { totalAmount: true },
        where: { status: 'PAID' },
      }),
      prisma.order.aggregate({
        _sum: { totalAmount: true },
        where: { status: 'PAID', createdAt: { gte: startOfMonth } },
      }),
      prisma.order.aggregate({
        _sum: { totalAmount: true },
        where: {
          status: 'PAID',
          createdAt: { gte: startOfLastMonth, lt: startOfMonth },
        },
      }),
      prisma.server.count(),
      prisma.order.count({ where: { status: 'PENDING' } }),
      prisma.ticket.count({ where: { status: 'OPEN' } }),
      prisma.user.count(),
      prisma.statusNode.findMany({ orderBy: { createdAt: 'asc' } }),
      prisma.ticket.count(),
      prisma.ticket.count({
        where: { status: { in: ['RESOLVED', 'CLOSED'] } },
      }),
      prisma.order.count(),
      prisma.order.count({ where: { status: { in: ['PAID', 'DELIVERED'] } } }),
      prisma.order.findMany({
        take: 6,
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          status: true,
          totalAmount: true,
          createdAt: true,
          user: { select: { name: true } },
        },
      }),
      prisma.ticket.findMany({
        take: 6,
        orderBy: { createdAt: 'desc' },
        select: {
          ticketId: true,
          title: true,
          status: true,
          createdAt: true,
          user: { select: { name: true } },
        },
      }),
      fetchPteroNodes(),
    ])

    const thisMonthRev = revenueThisMonth._sum.totalAmount ?? 0
    const lastMonthRev = revenueLastMonth._sum.totalAmount ?? 0
    const revChange =
      lastMonthRev > 0
        ? (((thisMonthRev - lastMonthRev) / lastMonthRev) * 100).toFixed(1)
        : null

    const activities = [
      ...recentOrders.map((o) => ({
        id: o.id,
        type: o.status === 'PAID' ? 'payment' : 'new',
        message: o.status === 'PAID' ? 'Payment received' : 'New order placed',
        detail:
          o.status === 'PAID'
            ? `₹${o.totalAmount.toLocaleString()} · ${o.user.name}`
            : o.user.name,
        badge: o.status === 'PAID' ? 'Payment' : 'Order',
        time: o.createdAt.toISOString(),
      })),
      ...recentTickets.map((t) => ({
        id: t.ticketId,
        type: t.status === 'OPEN' ? 'warning' : 'system',
        message:
          t.status === 'OPEN'
            ? 'New support ticket'
            : `Ticket ${t.status.toLowerCase()}`,
        detail: `${t.title} · ${t.user.name}`,
        badge:
          t.status === 'OPEN'
            ? 'Ticket'
            : t.status.charAt(0) + t.status.slice(1).toLowerCase(),
        time: t.createdAt.toISOString(),
      })),
    ]
      .sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime())
      .slice(0, 8)
      .map((a) => ({ ...a, time: formatRelativeTime(new Date(a.time)) }))

    // Map ptero nodes to the unified node shape
    const pteroAsNodes = pteroNodes.map((n) => ({
      id: `ptero-${n.id}`,
      name: n.name,
      ip: n.fqdn,
      location: 'Pterodactyl',
      type: 'Pterodactyl',
      port: n.daemon_listen,
      protocol: n.scheme,
      status: n.maintenance_mode ? 'maintenance' : 'up',
      latency: null as number | null,
      lastChecked: null as Date | null,
      cpu: null as number | null,
      memory: n.memory,
      disk: n.disk,
      createdAt: new Date(),
      updatedAt: new Date(),
    }))

    const allNodes = [...statusNodes, ...pteroAsNodes]

    const downNodes = statusNodes.filter((n) => n.status === 'down')
    const upCount = allNodes.filter((n) => n.status === 'up').length
    const downCount = allNodes.filter((n) => n.status === 'down').length
    const degradedCount = allNodes.filter(
      (n) => n.status === 'degraded' || n.status === 'maintenance',
    ).length
    const unknownCount = allNodes.filter((n) => n.status === 'unknown').length
    const totalNodes = allNodes.length

    const nodeUptimePct =
      totalNodes > 0 ? Math.round((upCount / totalNodes) * 100) : 0
    const ticketResPct =
      totalTickets > 0 ? Math.round((resolvedTickets / totalTickets) * 100) : 0
    const orderSuccessPct =
      totalOrders > 0 ? Math.round((paidOrders / totalOrders) * 100) : 0

    return {
      revenue: {
        total: revenueTotal._sum.totalAmount ?? 0,
        thisMonth: thisMonthRev,
        change: revChange,
      },
      activeServers,
      pendingOrders,
      openTickets,
      totalCustomers,
      statusNodes: allNodes,
      serverStatus: [
        { status: 'Online', count: upCount, color: 'var(--chart-1)' },
        { status: 'Degraded', count: degradedCount, color: 'var(--chart-2)' },
        { status: 'Offline', count: downCount, color: '#fb7185' },
        ...(unknownCount > 0
          ? [
              {
                status: 'Unknown',
                count: unknownCount,
                color: 'var(--muted-foreground)',
              },
            ]
          : []),
      ].filter((s) => s.count > 0),
      resourceGauges: [
        { label: 'Node Uptime', value: nodeUptimePct },
        { label: 'Ticket Res.', value: ticketResPct },
        { label: 'Order Success', value: orderSuccessPct },
      ],
      activities,
      alerts: [
        ...downNodes.map((n) => ({
          id: n.id,
          severity: 'critical' as const,
          message: `${n.name} (${n.ip}) is unreachable`,
          time: n.lastChecked
            ? formatRelativeTime(new Date(n.lastChecked))
            : 'Never checked',
        })),
        ...pteroNodes
          .filter((n) => n.maintenance_mode)
          .map((n) => ({
            id: `ptero-${n.id}`,
            severity: 'warning' as const,
            message: `Pterodactyl node "${n.name}" is in maintenance mode`,
            time: 'Now',
          })),
      ],
    }
  },
)

export const getAllOrders = createServerFn({ method: 'GET' }).handler(
  async () => {
    const session = await getSession()
    if (!session?.user) throw new Error('Unauthorized')

    return prisma.order.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        items: {
          include: { product: { select: { planName: true, category: true } } },
        },
        user: { select: { id: true, name: true, email: true, image: true } },
      },
    })
  },
)

const requireAdmin = async () => {
  const perm = await hasPermissionFn({
    data: { permissions: { products: ['delete'] } },
  })
  if (!perm) {
    return 'You do not have permission do delete order.'
  }
}

export const deleteOrder = createServerFn({ method: 'POST' })
  .inputValidator(
    z.object({
      id: z.string(),
    }),
  )
  .handler(async ({ data }) => {
    await requireAdmin()
    await prisma.order.delete({ where: { id: data.id } })
    return { success: true, message: 'Order deleted successfully' }
  })

export const deleteOrders = createServerFn({ method: 'POST' })
  .inputValidator(
    z.object({
      ids: z.array(z.string()),
    }),
  )
  .handler(async ({ data }) => {
    await requireAdmin()
    const result = await prisma.order.deleteMany({ where: { id: { in: data.ids } } })
    return { success: true, deleted: result.count, message: `${result.count} orders deleted successfully` }
  })
