import { createServerFn } from '@tanstack/react-start'
import { ptero } from './client'

export const getPteroNests = createServerFn({ method: 'GET' }).handler(async () => {
  const res = await ptero.get('/application/nests')
  return res.data.data.map((n: any) => ({
    id: n.attributes.id,
    name: n.attributes.name,
    description: n.attributes.description,
  }))
})

export const getPteroEggs = createServerFn({ method: 'GET' })
  .inputValidator((data: any) => ({ nestId: Number(data.nestId) }))
  .handler(async ({ data }) => {
    const res = await ptero.get(`/application/nests/${data.nestId}/eggs`, {
      params: { include: 'variables' },
    })
    return res.data.data.map((e: any) => ({
      id: e.attributes.id,
      name: e.attributes.name,
      description: e.attributes.description,
      dockerImage: e.attributes.docker_image,
    }))
  })
