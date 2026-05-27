import { createServerFn } from '@tanstack/react-start'
import { ptero } from './client'
import { z } from 'zod'
import { pteroServerData, pteroServerSchema } from './configData'
import { emitDevBroadcast } from '#/lib/server/socket-context'

export const getAllPteroServers = createServerFn({
  method: 'GET',
})
  .inputValidator(
    z.object({
      page: z.number(),
      perPage: z.number(),
    }),
  )
  .handler(async ({ data }) => {
    const res = await ptero.get('/application/servers', {
      params: {
        include: 'user,node',
        page: data.page,
        per_page: data.perPage,
      },
    })
    return res.data
  })

export const createPteroServer = createServerFn({ method: 'POST' })
  .inputValidator(pteroServerSchema)
  .handler(async ({ data }) => {
    try {
      const res = await ptero.post(
        '/application/servers',
        await pteroServerData({
          name: data.name,
          user: data.user,
          egg: data.egg,
          nest: data.nest,
          specs: {
            cpu: data.specs.cpu,
            memory: data.specs.memory,
            swap: data.specs.swap,
            disk: data.specs.disk,
            database: data.specs.database,
            allocation: data.specs.allocation,
            backups: data.specs.backups,
          },
        }),
      )
      emitDevBroadcast({
        id: `${Date.now()}`,
        text: `Ptero server created: ${data.name}`,
        timestamp: new Date().toISOString(),
      })
      return {
        success: true,
        message: 'Server created successfully.',
        data: res.data,
      }
    } catch (err: any) {
      console.error(err?.response?.data ?? err?.message ?? err)
      return {
        success: false,
        message:
          err?.response?.data?.errors?.[0]?.detail ||
          err?.message ||
          'An error occurred while creating the server.',
      }
    }
  })
