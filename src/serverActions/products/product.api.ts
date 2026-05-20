import { prisma } from '#/db'
import { createServerFn } from '@tanstack/react-start'
import { getRequestHeaders } from '@tanstack/react-start/server'
import { auth } from '@/lib/auth'
import { z } from 'zod'
import { ProductSchema } from '#/generated/schemas'


const deleteProductSchema = z.object({
  id: z.string(),
})

const getProductSchema = z.object({
  id: z.string(),
})

export const createProduct = createServerFn({ method: 'POST' })
  .inputValidator(ProductSchema)
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

export const getProducts = createServerFn({ method: 'GET' }).handler(
  async () => {
    const products = await prisma.product.findMany({ orderBy: { createdAt: 'desc' } })
    return products;
  },
)

export const getProduct = createServerFn({ method: 'GET' })
  .inputValidator(getProductSchema)
  .handler(async ({ data }) => {
    const product = await prisma.product.findUnique({ where: { id: data.id } })
    if (!product) throw new Error('Product not found')
    return product
  })

export const updateProduct = createServerFn({ method: 'POST' })
  .inputValidator(ProductSchema)
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
  .inputValidator(deleteProductSchema)
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
