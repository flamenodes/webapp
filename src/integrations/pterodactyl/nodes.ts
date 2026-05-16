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
