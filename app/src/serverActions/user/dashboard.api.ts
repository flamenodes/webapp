import { createServerFn } from '@tanstack/react-start'
import { getRequestHeaders } from '@tanstack/react-start/server'
import { prisma } from '#/db'
import { auth } from '@/lib/auth'
import { z } from 'zod'

export const getUserServers = createServerFn({ method: 'GET' }).handler(async () => {
  const headers = getRequestHeaders()
  const session = await auth.api.getSession({ headers })
  if (!session?.user) throw new Error('Unauthorized')

  return prisma.server.findMany({
    where: { userId: session.user.id },
    include: {
      orderItem: {
        include: {
          product: true,
        },
      },
    },
    orderBy: { createdAt: 'desc' },
  })
})

export const getUserNotifications = createServerFn({ method: 'GET' }).handler(async () => {
  const headers = getRequestHeaders()
  const session = await auth.api.getSession({ headers })
  if (!session?.user) throw new Error('Unauthorized')

  return prisma.notification.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: 'desc' },
    take: 50,
  })
})

export const getUserStats = createServerFn({ method: 'GET' }).handler(async () => {
  const headers = getRequestHeaders()
  const session = await auth.api.getSession({ headers })
  if (!session?.user) throw new Error('Unauthorized')

  const [totalServers, activeServers, totalOrders, pendingOrders] = await Promise.all([
    prisma.server.count({ where: { userId: session.user.id } }),
    prisma.server.count({ where: { userId: session.user.id, status: 'ACTIVE' } }),
    prisma.order.count({ where: { userId: session.user.id } }),
    prisma.order.count({ where: { userId: session.user.id, status: 'PENDING' } }),
  ])

  return {
    totalServers,
    activeServers,
    totalOrders,
    pendingOrders,
  }
})

export const markNotificationRead = createServerFn({ method: 'POST' })
  .inputValidator((data: unknown) => z.object({ id: z.string() }).parse(data))
  .handler(async ({ data }) => {
    const headers = getRequestHeaders()
    const session = await auth.api.getSession({ headers })
    if (!session?.user) throw new Error('Unauthorized')

    await prisma.notification.update({
      where: { id: data.id, userId: session.user.id },
      data: { read: true },
    })

    return { success: true, message: 'Notification marked as read' }
  })

export const markAllNotificationsRead = createServerFn({ method: 'POST' }).handler(async () => {
  const headers = getRequestHeaders()
  const session = await auth.api.getSession({ headers })
  if (!session?.user) throw new Error('Unauthorized')

  await prisma.notification.updateMany({
    where: { userId: session.user.id, read: false },
    data: { read: true },
  })

  return { success: true, message: 'All notifications marked as read' }
})
