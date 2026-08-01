import { createServerFn } from '@tanstack/react-start'
import { ptero } from './client'
import z from 'zod'

export const createPteroUser = createServerFn({ method: 'POST' })
  .validator(
    z.object({
      email: z.email(),
      username: z.string(),
      firstName: z.string(),
      lastName: z.string(),
      password: z.string(),
      language: z.string(),
      rootAdmin: z.boolean(),
    }),
  )
  .handler(async ({ data }) => {
    try {
      const userData = {
        email: data.email,
        username: data.username,
        first_name: data.firstName,
        last_name: data.lastName,
        password: data.password,
        language: data.language,
        root_admin: data.rootAdmin,
      }
      const res = await ptero.post('/applications/users', userData)
      return {
        success: true,
        message: 'User created successfully.',
        data: res.data.attribute,
      }
    } catch (err) {
      return { success: false, message: 'User creation failed.' }
    }
  })

export const updatePteroUser = createServerFn({ method: 'POST' })
  .validator(
    z.object({
      id: z.number(),
      email: z.email(),
      username: z.string(),
      firstName: z.string(),
      lastName: z.string(),
      password: z.string(),
      rootAdmin: z.boolean(),
    }),
  )
  .handler(async ({ data }) => {
    try {
      const userData = {
        email: data.email,
        username: data.username,
        first_name: data.firstName,
        last_name: data.lastName,
        password: data.password,
        root_admin: data.rootAdmin,
      }
      const res = await ptero.patch(`/applications/users/${data.id}`, userData)
      return {
        success: true,
        message: 'User updated successfully.',
        data: res.data.attribute,
      }
    } catch (err) {
      return { success: false, message: 'User updating failed.' }
    }
  })
