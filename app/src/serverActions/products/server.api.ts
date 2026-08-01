import { createServerFn } from '@tanstack/react-start'
import { getRequestHeaders } from '@tanstack/react-start/server'
import { prisma } from '#/db'
import { auth } from '@/lib/auth'
import { z } from 'zod'
import { ServerSchema } from '#/generated/schemas'

const getServerSchema = z.object({
  id: z.string(),
})

const deleteServerSchema = z.object({
  id: z.string(),
})

export const createServer = createServerFn({ method: 'POST' })
  .validator(ServerSchema)
  .handler(async ({ data }) => {
    const headers = getRequestHeaders()
    const session = await auth.api.getSession({ headers })
    if (!session?.user) throw new Error('Unauthorized')

    return prisma.server.create({ data })
  })

export const getServers = createServerFn({ method: 'GET' }).handler(
  async () => {
    const headers = getRequestHeaders()
    const session = await auth.api.getSession({ headers })
    if (!session?.user) throw new Error('Unauthorized')

    return prisma.server.findMany({
      where: { userId: session.user.id },
      orderBy: { createdAt: 'desc' },
    })
  },
)

export const getServer = createServerFn({ method: 'GET' })
  .validator( getServerSchema)
  .handler(async ({ data }) => {
    const headers = getRequestHeaders()
    const session = await auth.api.getSession({ headers })
    if (!session?.user) throw new Error('Unauthorized')

    const server = await prisma.server.findUnique({
      where: { id: data.id, userId: session.user.id },
    })

    if (!server) throw new Error('Server not found')
    return server
  })

export const updateServer = createServerFn({ method: 'POST' })
  .validator(ServerSchema)
  .handler(async ({ data }) => {
    const headers = getRequestHeaders()
    const session = await auth.api.getSession({ headers })
    if (!session?.user) throw new Error('Unauthorized')

    const { id, ...updateData } = data
    return prisma.server.update({
      where: { id, userId: session.user.id },
      data: updateData,
    })
  })

export const deleteServer = createServerFn({ method: 'POST' })
  .validator( deleteServerSchema)
  .handler(async ({ data }) => {
    const headers = getRequestHeaders()
    const session = await auth.api.getSession({ headers })
    if (!session?.user) throw new Error('Unauthorized')

    return prisma.server.delete({
      where: { id: data.id, userId: session.user.id },
    })
  })
