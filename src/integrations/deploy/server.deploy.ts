import { createServerFn } from '@tanstack/react-start'
import { getRequestHeaders } from '@tanstack/react-start/server'
import { auth } from '@/lib/auth'
import { z } from 'zod'
import { enqueuePteroDeployment } from './queue'

const deploySchema = z.object({
  orderId: z.string(),
  orderItemId: z.string(),
  serverId: z.string(),
  name: z.string(),
  user: z.number(),
  nest: z.number(),
  egg: z.number(),
  specs: z.object({
    cpu: z.number(),
    memory: z.number(),
    swap: z.number(),
    disk: z.number(),
    database: z.number(),
    allocation: z.number(),
    backups: z.number(),
  }),
  type: z.string(),
})

export const deployServer = createServerFn({ method: 'POST' })
  .inputValidator((data) => deploySchema.parse(data))
  .handler(async ({ data }) => {
    const headers = getRequestHeaders()
    const session = await auth.api.getSession({ headers })
    if (!session?.user) throw new Error('Unauthorized')

    try {
      await enqueuePteroDeployment(data)
      return {
        success: true,
        message: 'Deployment queued successfully.',
      }
    } catch (err: any) {
      return {
        success: false,
        message: err?.message || 'Failed to queue deployment.',
      }
    }
  })
