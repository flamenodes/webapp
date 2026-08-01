import { createServerFn } from '@tanstack/react-start'
import { getRequestHeaders } from '@tanstack/react-start/server'
import { auth } from '@/lib/auth'
import { z } from 'zod'

const wrapSuccess = <T>(message: string, data?: T) => ({ success: true, message, data })
const wrapError = (message: string) => ({ success: false, message })

async function requireAdmin() {
  const headers = getRequestHeaders()
  const session = await auth.api.getSession({ headers })
  if (!session?.user) throw new Error('Unauthorized')
  const { prisma } = await import('#/db')
  const user = await prisma.user.findUnique({ where: { id: session.user.id }, select: { role: true } })
  const role = user?.role?.toUpperCase()
  if (role !== 'ADMIN' && role !== 'OWNER') throw new Error('Forbidden')
  return session
}

// Get active announcements (public - no auth required)
export const getActiveAnnouncements = createServerFn({ method: 'GET' }).handler(async () => {
  const { prisma } = await import('#/db')
  const announcements = await prisma.announcement.findMany({
    where: {
      active: true,
      OR: [
        { expiresAt: null },
        { expiresAt: { gt: new Date() } },
      ],
    },
    orderBy: [
      { priority: 'desc' },
      { createdAt: 'desc' },
    ],
  })
  return announcements
})

// Get all announcements (admin only)
export const getAllAnnouncements = createServerFn({ method: 'GET' }).handler(async () => {
  await requireAdmin()
  const { prisma } = await import('#/db')
  return prisma.announcement.findMany({
    orderBy: { createdAt: 'desc' },
  })
})

// Create announcement (admin only)
const createAnnouncementSchema = z.object({
  title: z.string().min(1),
  message: z.string().min(1),
  type: z.enum(['INFO', 'WARNING', 'SUCCESS', 'ERROR', 'MAINTENANCE']),
  priority: z.number().int().default(0),
  link: z.string().optional(),
  expiresAt: z.string().optional(),
})

export const createAnnouncement = createServerFn({ method: 'POST' })
  .validator((data) => createAnnouncementSchema.parse(data))
  .handler(async ({ data }) => {
    await requireAdmin()
    const { prisma } = await import('#/db')

    const announcement = await prisma.announcement.create({
      data: {
        title: data.title,
        message: data.message,
        type: data.type,
        priority: data.priority,
        link: data.link,
        expiresAt: data.expiresAt ? new Date(data.expiresAt) : null,
      },
    })

    // Emit socket event for real-time update
    try {
      const { emitAnnouncement } = await import('../socket/events')
      emitAnnouncement(announcement)
    } catch (error) {
      console.error('Failed to emit announcement:', error)
    }

    return wrapSuccess('Announcement created successfully', announcement)
  })

// Update announcement (admin only)
const updateAnnouncementSchema = z.object({
  id: z.string(),
  title: z.string().min(1).optional(),
  message: z.string().min(1).optional(),
  type: z.enum(['INFO', 'WARNING', 'SUCCESS', 'ERROR', 'MAINTENANCE']).optional(),
  active: z.boolean().optional(),
  priority: z.number().int().optional(),
  link: z.string().optional(),
  expiresAt: z.string().optional(),
})

export const updateAnnouncement = createServerFn({ method: 'POST' })
  .validator((data) => updateAnnouncementSchema.parse(data))
  .handler(async ({ data }) => {
    await requireAdmin()
    const { prisma } = await import('#/db')

    const { id, ...updateData } = data
    const announcement = await prisma.announcement.update({
      where: { id },
      data: {
        ...updateData,
        expiresAt: updateData.expiresAt ? new Date(updateData.expiresAt) : undefined,
      },
    })

    return wrapSuccess('Announcement updated successfully', announcement)
  })

// Delete announcement (admin only)
export const deleteAnnouncement = createServerFn({ method: 'POST' })
  .validator((data: unknown) => z.object({ id: z.string() }).parse(data))
  .handler(async ({ data }) => {
    await requireAdmin()
    const { prisma } = await import('#/db')
    await prisma.announcement.delete({ where: { id: data.id } })
    return wrapSuccess('Announcement deleted successfully')
  })

// Create notification (internal use - for server-side only)
export async function createNotification(
  userId: string,
  title: string,
  message: string,
  type: string = 'info',
  link?: string,
  metadata?: any
) {
  const { prisma } = await import('#/db')
  const notification = await prisma.notification.create({
    data: {
      userId,
      title,
      message,
      type,
      link,
      metadata,
    },
  })

  // Emit socket event for real-time update
  try {
    const { emitNotification } = await import('../socket/events')
    emitNotification(userId, notification)
  } catch (error) {
    console.error('Failed to emit notification:', error)
  }

  return notification
}
