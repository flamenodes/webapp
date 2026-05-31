import { createServerFn } from '@tanstack/react-start'
import { ptero } from './client'

export const getAllPetroNode = createServerFn({ method: 'GET' }).handler(async () => {
  try {
    const res = await ptero.get('/application/nodes')
    return res.data
  } catch (err: any) {
    console.error(err.response)
  }
})

export type PteroNode = {
  id: number
  name: string
  fqdn: string
  memory: number
  disk: number
}

export const getPteroNodes = createServerFn({ method: 'GET' }).handler(async (): Promise<PteroNode[]> => {
  try {
    const res = await ptero.get('/application/nodes')
    return (res.data?.data ?? []).map((n: any) => ({
      id: n.attributes.id,
      name: n.attributes.name,
      fqdn: n.attributes.fqdn,
      memory: n.attributes.memory,
      disk: n.attributes.disk,
    }))
  } catch (err: any) {
    console.error(err.response)
    return []
  }
})
