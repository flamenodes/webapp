import z from 'zod'
import { ptero } from './client'
import { getAllPetroNode } from './nodes'
import { findPetroAvailableAllocation } from './allocations'
import { convertPetroEggVariablesToEnvironment } from './nests-egg'

export const pteroServerSchema = z.object({
  name: z.string(),
  user: z.number(),
  egg: z.number(),
  nest: z.number(),
  specs: z.object({
    cpu: z.number(),
    memory: z.number(),
    swap: z.number(),
    disk: z.number(),
    database: z.number(),
    allocation: z.number(),
    backups: z.number(),
  }),
})

export const petroEggSchema = z.object({
  docker_image: z.string(),
  startup: z.string(),
  environment: z.any(),
})

export type PteroEgg = z.infer<typeof petroEggSchema>

export const getPetroEggData = async ({
  nestId,
  eggId,
}: {
  nestId: number
  eggId: number
}) => {
  const res = await ptero.get(`/application/nests/${nestId}/eggs/${eggId}`, {
    params: {
      include: 'variables',
    },
  })
  console.log(res.data.attributes)
  return res.data.attributes
}

export const pteroServerData = async (
  data: z.infer<typeof pteroServerSchema>,
) => {
  const eggData: PteroEgg = await getPetroEggData({
    nestId: data.nest,
    eggId: data.egg,
  })

  const allocation = await findPetroAvailableAllocation({ mode: 'balance' })

  const serverData = {
    name: data.name,
    user: data.user,
    egg: data.egg,
    nest: data.nest,
    docker_image: eggData.docker_image,
    startup: eggData.startup,
    environment: convertPetroEggVariablesToEnvironment(eggData),
    limits: {
      memory: data.specs.memory,
      swap: data.specs.swap,
      disk: data.specs.disk,
      io: 500,
      cpu: data.specs.cpu,
      oom_disabled: false,
    },
    feature_limits: {
      databases: data.specs.database,
      allocations: data.specs.allocation,
      backups: data.specs.backups,
    },
    allocation: {
      default: allocation.allocation,
    },
  }
  return serverData
}
