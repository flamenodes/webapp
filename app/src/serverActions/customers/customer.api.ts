import { prisma } from '#/db'
import { createServerFn } from '@tanstack/react-start'
import { z } from 'zod'

const customerIdSchema = z.object({
  id: z.string().min(1),
})

const createCustomerSchema = z.object({
  clientId: z.string().trim().min(1),
  name: z.string().trim().min(1),
  email: z.string().trim().email(),
  username: z.string().trim().min(1),
  firstname: z.string().trim().min(1),
  lastname: z.string().trim().min(1),
  image: z.string().trim().nullable().optional(),
  role: z.string().trim().nullable().optional(),
  banned: z.boolean().nullable().optional(),
  banReason: z.string().trim().nullable().optional(),
  banExpires: z.string().datetime().nullable().optional(),
  displayUsername: z.string().trim().nullable().optional(),
})

const updateCustomerSchema = customerIdSchema.extend({
  clientId: z.string().trim().min(1).optional(),
  name: z.string().trim().min(1).optional(),
  email: z.string().trim().email().optional(),
  username: z.string().trim().min(1).optional(),
  firstname: z.string().trim().min(1).optional(),
  lastname: z.string().trim().min(1).optional(),
  image: z.string().trim().nullable().optional(),
  role: z.string().trim().nullable().optional(),
  banned: z.boolean().nullable().optional(),
  banReason: z.string().trim().nullable().optional(),
  banExpires: z.string().datetime().nullable().optional(),
  displayUsername: z.string().trim().nullable().optional(),
})

export const createCustomer = createServerFn({ method: 'POST' })
  .inputValidator(createCustomerSchema)
  .handler(async ({ data }) => {
    const customer = await prisma.user.create({
      data: {
        id: crypto.randomUUID(),
        clientId: data.clientId,
        name: data.name,
        email: data.email,
        emailVerified: false,
        image: data.image ?? null,
        role: data.role ?? null,
        banned: data.banned ?? null,
        banReason: data.banReason ?? null,
        banExpires: data.banExpires ? new Date(data.banExpires) : null,
        username: data.username,
        firstname: data.firstname,
        lastname: data.lastname,
        displayUsername: data.displayUsername ?? null,
      },
    })

    return customer
  })

export const updateCustomer = createServerFn({ method: 'POST' })
  .inputValidator(updateCustomerSchema)
  .handler(async ({ data }) => {
    const updated = await prisma.user.update({
      where: { id: data.id },
      data: {
        clientId: data.clientId,
        name: data.name,
        email: data.email,
        username: data.username,
        firstname: data.firstname,
        lastname: data.lastname,
        image: data.image,
        role: data.role,
        banned: data.banned,
        banReason: data.banReason,
        banExpires:
          data.banExpires === undefined
            ? undefined
            : data.banExpires
              ? new Date(data.banExpires)
              : null,
        displayUsername: data.displayUsername,
      },
    })

    return updated
  })

export const deleteCustomer = createServerFn({ method: 'POST' })
  .inputValidator(customerIdSchema)
  .handler(async ({ data }) => {
    const deleted = await prisma.user.delete({
      where: { id: data.id },
    })

    return deleted
  })
