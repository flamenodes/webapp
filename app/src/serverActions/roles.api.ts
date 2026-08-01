import { createServerFn } from '@tanstack/react-start'
import { prisma } from '#/db'
import { z } from 'zod'
import { hasPermissionFn } from '@/lib/has-permission'
import { auth } from '@/lib/auth'

const wrapSuccess = <T>(message: string, data?: T) => ({
  success: true,
  message,
  data,
})
const wrapError = (message: string) => ({ success: false, message })

async function requireRolesPermission(action: 'read' | 'create' | 'update' | 'delete') {
  const perm = await hasPermissionFn({
    data: { permissions: { roles: [action] } },
  })
  if (!perm) {
    throw new Error(`You do not have permission to ${action} roles.`)
  }
}

export const getAllUsers = createServerFn({ method: 'GET' }).handler(async () => {
  await requireRolesPermission('read')

  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
      createdAt: true,
      emailVerified: true,
      role: true,
    },
    orderBy: { createdAt: 'desc' },
  })

  return wrapSuccess('Users fetched', users)
})

const updateUserRoleSchema = z.object({
  userId: z.string(),
  role: z.enum(['user', 'support', 'finance', 'manager', 'admin', 'owner']),
})

export const updateUserRole = createServerFn({ method: 'POST' })
  .validator((data) => updateUserRoleSchema.parse(data))
  .handler(async ({ data }) => {
    await requireRolesPermission('update')

    await prisma.user.update({
      where: { id: data.userId },
      data: { role: data.role },
    })

    return wrapSuccess('User role updated successfully')
  })

const updateUserPermissionsSchema = z.object({
  userId: z.string(),
  permissions: z.record(z.array(z.string())),
})

export const updateUserPermissions = createServerFn({ method: 'POST' })
  .validator((data) => updateUserPermissionsSchema.parse(data))
  .handler(async ({ data }) => {
    await requireRolesPermission('update')

    await auth.api.setUserPermissions({
      body: {
        userId: data.userId,
        permissions: data.permissions,
      },
    })

    return wrapSuccess('User permissions updated successfully')
  })

export const getUserPermissions = createServerFn({ method: 'POST' })
  .validator((data: unknown) => z.object({ userId: z.string() }).parse(data))
  .handler(async ({ data }) => {
    await requireRolesPermission('read')

    const user = await prisma.user.findUnique({
      where: { id: data.userId },
      select: { role: true },
    })

    if (!user) {
      throw new Error('User not found')
    }

    // Get permissions from better-auth based on role
    const permissions = await auth.api.getUserPermissions({
      body: { userId: data.userId },
    })

    return wrapSuccess('Permissions fetched', permissions)
  })
