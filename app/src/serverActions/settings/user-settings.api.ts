import { createServerFn } from '@tanstack/react-start'
import { getRequestHeaders } from '@tanstack/react-start/server'
import { prisma } from '#/db'
import { auth } from '@/lib/auth'
import { z } from 'zod'

const wrapSuccess = <T>(message: string, data?: T) => ({ success: true, message, data })
const wrapError = (message: string) => ({ success: false, message })

const updateProfileSchema = z.object({
  firstname: z.string().min(1).optional(),
  lastname: z.string().min(1).optional(),
})

export const getUserProfile = createServerFn({ method: 'GET' }).handler(async () => {
  const headers = getRequestHeaders()
  const session = await auth.api.getSession({ headers })
  if (!session?.user) throw new Error('Unauthorized')

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: {
      id: true,
      name: true,
      email: true,
      firstname: true,
      lastname: true,
      billingAddress: true,
    },
  })

  if (!user) throw new Error('User not found')
  return wrapSuccess('Profile fetched', user)
})

export const updateUserProfile = createServerFn({ method: 'POST' })
  .validator((data) => updateProfileSchema.parse(data))
  .handler(async ({ data }) => {
    const headers = getRequestHeaders()
    const session = await auth.api.getSession({ headers })
    if (!session?.user) return wrapError('Unauthorized')

    const updated = await prisma.user.update({
      where: { id: session.user.id },
      data,
    })

    return wrapSuccess('Profile updated successfully', updated)
  })
