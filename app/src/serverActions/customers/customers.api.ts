import { prisma } from '#/db'
import { auth } from '#/lib/auth'
import { createServerFn } from '@tanstack/react-start'
import { getRequestHeaders } from '@tanstack/react-start/server'
import { z } from 'zod'
import { getSession } from '@/handlers/auth.handler'
import crypto from 'node:crypto'

const createCustomerSchema = z.object({
  name: z.string().trim().min(1),
  email: z.string().trim().email(),
  username: z.string().trim().min(3),
  firstname: z.string().trim().min(1),
  lastname: z.string().trim().min(1),
  password: z.string().min(8),
  image: z.string().trim().nullable().optional(),
  displayUsername: z.string().trim().nullable().optional(),
})

const updateCustomerSchema = z.object({
  id: z.string().min(1),
  name: z.string().trim().min(1).optional(),
  email: z.string().trim().email().optional(),
  username: z.string().trim().min(3).optional(),
  firstname: z.string().trim().min(1).optional(),
  lastname: z.string().trim().min(1).optional(),
  image: z.string().trim().nullable().optional(),
  displayUsername: z.string().trim().nullable().optional(),
  banned: z.boolean().optional(),
  banReason: z.string().trim().nullable().optional(),
})

const deleteCustomerSchema = z.object({
  id: z.string().min(1),
})

const deleteCustomersSchema = z.object({
  ids: z.array(z.string().min(1)),
})

export const getCustomers = createServerFn({ method: 'GET' }).handler(async () => {
  try {
    const session = await getSession()
    
    console.log('Session:', session?.user)
    
    if (!session?.user) {
      console.error('No session found')
      throw new Error('Unauthorized')
    }
    const customers = await prisma.user.findMany({
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        clientId: true,
        name: true,
        email: true,
        emailVerified: true,
        image: true,
        username: true,
        firstname: true,
        lastname: true,
        displayUsername: true,
        banned: true,
        banReason: true,
        banExpires: true,
        createdAt: true,
        updatedAt: true,
        billingAddress: true,
        _count: {
          select: {
            orders: true,
            servers: true,
            tickets: true,
          },
        },
      },
    })

    console.log('Found customers:', customers)
    return customers
  } catch (error) {
    console.error('Error in getCustomers:', error)
    throw error
  }
})


export const createCustomer = createServerFn({ method: 'POST' })
  .validator((data) => createCustomerSchema.parse(data))
  .handler(async ({ data }) => {
    const headers = getRequestHeaders()
    const session = await auth.api.getSession({ headers })
    
    if (!session?.user) throw new Error('Unauthorized')

    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email: data.email },
          { username: data.username },
        ],
      },
    })

    if (existingUser) {
      throw new Error('Email or username already exists')
    }

    const clientId = `#FN-${crypto.randomBytes(4).toString('hex').toUpperCase()}`

    const customer = await auth.api.signUpEmail({
      body: {
        email: data.email,
        password: data.password,
        name: data.name,
        username: data.username,
        firstname: data.firstname,
        lastname: data.lastname,
        image: data.image ?? undefined,
      },
    })

    if (customer?.user) {
      await prisma.user.update({
        where: { id: customer.user.id },
        data: {
          clientId,
          displayUsername: data.displayUsername ?? null,
        },
      })
    }

    return { success: true, customer: customer?.user }
  })

export const updateCustomer = createServerFn({ method: 'POST' })
  .validator((data) => updateCustomerSchema.parse(data))
  .handler(async ({ data }) => {
    const headers = getRequestHeaders()
    const session = await auth.api.getSession({ headers })
    
    if (!session?.user) throw new Error('Unauthorized')

    const customer = await prisma.user.update({
      where: { id: data.id },
      data: {
        name: data.name,
        email: data.email,
        username: data.username,
        firstname: data.firstname,
        lastname: data.lastname,
        image: data.image,
        displayUsername: data.displayUsername,
        banned: data.banned,
        banReason: data.banReason,
      },
    })

    return { success: true, customer }
  })

export const deleteCustomer = createServerFn({ method: 'POST' })
  .validator((data) => deleteCustomerSchema.parse(data))
  .handler(async ({ data }) => {
    const headers = getRequestHeaders()
    const session = await auth.api.getSession({ headers })
    
    if (!session?.user) throw new Error('Unauthorized')

    await prisma.user.delete({
      where: { id: data.id },
    })

    return { success: true }
  })

export const deleteCustomers = createServerFn({ method: 'POST' })
  .validator((data) => deleteCustomersSchema.parse(data))
  .handler(async ({ data }) => {
    const headers = getRequestHeaders()
    const session = await auth.api.getSession({ headers })
    
    if (!session?.user) throw new Error('Unauthorized')

    await prisma.user.deleteMany({
      where: {
        id: { in: data.ids },
      },
    })

    return { success: true }
  })

export const generatePassword = createServerFn({ method: 'GET' }).handler(() => {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789!@#$%^&*'
  let password = ''
  for (let i = 0; i < 16; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return { password }
})
