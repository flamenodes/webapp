import net from 'node:net'
import { prisma } from '#/db'
import { getSession } from '@/handlers/auth.handler'
import { createServerFn } from '@tanstack/react-start'
import { z } from 'zod'

const addNodeSchema = z.object({
  name: z.string().trim().min(1),
  ip: z.string().trim().min(1),
  location: z.string().trim().min(1),
  type: z.string().trim().min(1),
  port: z.number().int().min(1).max(65535),
  protocol: z.enum(['http', 'https', 'tcp']),
  cpu: z.number().nullable().optional(),
  memory: z.number().int().nullable().optional(),
  disk: z.number().int().nullable().optional(),
})

async function checkHttp(ip: string, port: number, protocol: 'http' | 'https') {
  const url = `${protocol}://${ip}:${port}`
  const start = Date.now()
  try {
    await fetch(url, { signal: AbortSignal.timeout(5000) })
    return { status: 'up' as const, latency: Date.now() - start }
  } catch {
    return { status: 'down' as const, latency: null }
  }
}

function checkTcp(ip: string, port: number): Promise<{ status: 'up' | 'down'; latency: number | null }> {
  return new Promise((resolve) => {
    const start = Date.now()
    const socket = new net.Socket()
    socket.setTimeout(5000)
    socket.connect(port, ip, () => {
      socket.destroy()
      resolve({ status: 'up', latency: Date.now() - start })
    })
    socket.on('error', () => { socket.destroy(); resolve({ status: 'down', latency: null }) })
    socket.on('timeout', () => { socket.destroy(); resolve({ status: 'down', latency: null }) })
  })
}

async function pingNode(node: { ip: string; port: number; protocol: string }) {
  if (node.protocol === 'tcp') {
    return checkTcp(node.ip, node.port)
  }
  return checkHttp(node.ip, node.port, node.protocol as 'http' | 'https')
}

export const getStatusNodes = createServerFn({ method: 'GET' }).handler(async () => {
  return prisma.statusNode.findMany({ orderBy: { createdAt: 'asc' } })
})

export const addStatusNode = createServerFn({ method: 'POST' })
  .inputValidator((data: unknown) => addNodeSchema.parse(data))
  .handler(async ({ data }) => {
    const session = await getSession()
    if (!session?.user) throw new Error('Unauthorized')
    return prisma.statusNode.create({ data })
  })

export const deleteStatusNode = createServerFn({ method: 'POST' })
  .inputValidator((data: unknown) => z.object({ id: z.string() }).parse(data))
  .handler(async ({ data }) => {
    const session = await getSession()
    if (!session?.user) throw new Error('Unauthorized')
    await prisma.statusNode.delete({ where: { id: data.id } })
    return { success: true }
  })

// Public-safe: omits ip, port, protocol from the response
export const getPublicStatusNodes = createServerFn({ method: 'GET' }).handler(async () => {
  return prisma.statusNode.findMany({
    orderBy: { createdAt: 'asc' },
    select: { id: true, name: true, location: true, type: true, status: true, latency: true, lastChecked: true },
  })
})

export const pingAllNodes = createServerFn({ method: 'POST' }).handler(async () => {
  const nodes = await prisma.statusNode.findMany()
  const results = await Promise.all(
    nodes.map(async (node) => {
      const result = await pingNode(node)
      return prisma.statusNode.update({
        where: { id: node.id },
        data: { status: result.status, latency: result.latency, lastChecked: new Date() },
        select: { id: true, name: true, location: true, type: true, status: true, latency: true, lastChecked: true },
      })
    }),
  )
  return results
})

export const pingOneNode = createServerFn({ method: 'POST' })
  .inputValidator((data: unknown) => z.object({ id: z.string() }).parse(data))
  .handler(async ({ data }) => {
    const node = await prisma.statusNode.findUniqueOrThrow({ where: { id: data.id } })
    const result = await pingNode(node)
    return prisma.statusNode.update({
      where: { id: data.id },
      data: { status: result.status, latency: result.latency, lastChecked: new Date() },
    })
  })
