import { prisma } from '#/db'
import { createServerFn } from '@tanstack/react-start'
import { getRequestHeaders } from '@tanstack/react-start/server'
import { auth } from '@/lib/auth'
import { z } from 'zod'
import type { Prisma } from '@/generated/prisma/client'

const createProductSchema: z.ZodType<Prisma.ProductCreateInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  title: z.string(),
  tag: z.string().optional().nullable(),
  deployMode: z.string().default('PTERODACTYL'),
  imageUrl: z.string().optional().nullable(),
  category: z.enum(['VPS', 'VDS', 'WEBHOST', 'DISCORD', 'DDOS_PROT', 'DEDICATED', 'MINECRAFT']),
  labels: z.array(z.string()).default([]),
  price: z.number().int(),
  specs: z.any().default({}),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
}) as any

const updateProductSchema: z.ZodType<Prisma.ProductUpdateInput & { id: string }> = z.object({
  id: z.string(),
  name: z.string().optional(),
  title: z.string().optional(),
  tag: z.string().optional().nullable(),
  deployMode: z.string().optional(),
  imageUrl: z.string().optional().nullable(),
  category: z.enum(['VPS', 'VDS', 'WEBHOST', 'DISCORD', 'DDOS_PROT', 'DEDICATED', 'MINECRAFT']).optional(),
  labels: z.array(z.string()).optional(),
  price: z.number().int().optional(),
  specs: z.any().optional(),
}) as any

const deleteProductSchema = z.object({
  id: z.string(),
})

const getProductSchema = z.object({
  id: z.string(),
})

export const createProduct = createServerFn({ method: 'POST' })
  .inputValidator((data) => createProductSchema.parse(data))
  .handler(async ({ data }) => {
    const headers = getRequestHeaders()
    const session = await auth.api.getSession({ headers })
    if (!session?.user) throw new Error('Unauthorized')

    return prisma.product.create({ data })
  })

export const getProducts = createServerFn({ method: 'GET' }).handler(async () => {
  return prisma.product.findMany({ orderBy: { createdAt: 'desc' } })
})

export const getProduct = createServerFn({ method: 'GET' })
  .inputValidator((data) => getProductSchema.parse(data))
  .handler(async ({ data }) => {
    const product = await prisma.product.findUnique({ where: { id: data.id } })
    if (!product) throw new Error('Product not found')
    return product
  })

export const updateProduct = createServerFn({ method: 'POST' })
  .inputValidator((data) => updateProductSchema.parse(data))
  .handler(async ({ data }) => {
    const headers = getRequestHeaders()
    const session = await auth.api.getSession({ headers })
    if (!session?.user) throw new Error('Unauthorized')

    const { id, ...updateData } = data
    return prisma.product.update({
      where: { id },
      data: updateData,
    })
  })

export const deleteProduct = createServerFn({ method: 'POST' })
  .inputValidator((data) => deleteProductSchema.parse(data))
  .handler(async ({ data }) => {
    const headers = getRequestHeaders()
    const session = await auth.api.getSession({ headers })
    if (!session?.user) throw new Error('Unauthorized')

    return prisma.product.delete({ where: { id: data.id } })
  })
