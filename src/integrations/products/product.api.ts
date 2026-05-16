import { prisma } from '#/db'
import { createServerFn } from '@tanstack/react-start'
import { getRequestHeaders } from '@tanstack/react-start/server'
import { auth } from '@/lib/auth'
import { z } from 'zod'

const productCategoryEnum = z.enum(['VPS', 'VDS', 'WEBHOST', 'DISCORD', 'DDOS_PROT', 'DEDICATED', 'MINECRAFT'])
const productDeployModeEnum = z.string().default('PTERODACTYL')

const createProductSchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  slug: z.string(),
  title: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  tag: z.string().optional().nullable(),
  deployMode: productDeployModeEnum,
  imageUrl: z.string().optional().nullable(),
  category: productCategoryEnum,
  labels: z.array(z.string()).default([]),
  monthlyPrice: z.number().int(),
  specs: z.any().default({}),
  active: z.boolean().default(true),
})

const updateProductSchema = z.object({
  id: z.string(),
  name: z.string().optional(),
  slug: z.string().optional(),
  title: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  tag: z.string().optional().nullable(),
  deployMode: z.string().optional(),
  imageUrl: z.string().optional().nullable(),
  category: productCategoryEnum.optional(),
  labels: z.array(z.string()).optional(),
  monthlyPrice: z.number().int().optional(),
  specs: z.any().optional(),
  active: z.boolean().optional(),
})

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

    const product = await prisma.product.create({ data })
    return {
      success: true,
      message: 'Product created successfully.',
      data: product,
    }
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
    const product = await prisma.product.update({
      where: { id },
      data: updateData,
    })
    return {
      success: true,
      message: 'Product updated successfully.',
      data: product,
    }
  })

export const deleteProduct = createServerFn({ method: 'POST' })
  .inputValidator((data) => deleteProductSchema.parse(data))
  .handler(async ({ data }) => {
    const headers = getRequestHeaders()
    const session = await auth.api.getSession({ headers })
    if (!session?.user) throw new Error('Unauthorized')

    const deleted = await prisma.product.delete({ where: { id: data.id } })
    return {
      success: true,
      message: 'Product deleted successfully.',
      data: deleted,
    }
  })
