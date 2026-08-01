import { createServerFn } from '@tanstack/react-start'
import { getRequestHeaders } from '@tanstack/react-start/server'
import { prisma } from '#/db'
import { auth } from '@/lib/auth'
import { z } from 'zod'

const wrapSuccess = <T>(message: string, data?: T) => ({ success: true, message, data })
const wrapError = (message: string) => ({ success: false, message })

const addToCartSchema = z.object({
  productId: z.string(),
  quantity: z.number().int().positive().default(1),
  billingPeriod: z.enum(['MONTHLY', 'QUARTERLY', 'YEARLY']).default('MONTHLY'),
  configuration: z.record(z.string()).optional(),
})

const updateCartItemSchema = z.object({
  itemId: z.string(),
  quantity: z.number().int().positive(),
})

const removeFromCartSchema = z.object({
  itemId: z.string(),
})

export const getCart = createServerFn({ method: 'GET' }).handler(async () => {
  const headers = getRequestHeaders()
  const session = await auth.api.getSession({ headers })
  if (!session?.user) throw new Error('Unauthorized')

  let cart = await prisma.cart.findFirst({
    where: { userId: session.user.id },
    include: {
      items: {
        include: { product: true },
        orderBy: { createdAt: 'desc' },
      },
    },
  })

  if (!cart) {
    cart = await prisma.cart.create({
      data: { userId: session.user.id },
      include: {
        items: {
          include: { product: true },
        },
      },
    })
  }

  return cart
})

export const addToCart = createServerFn({ method: 'POST' })
  .validator((data) => addToCartSchema.parse(data))
  .handler(async ({ data }) => {
    const headers = getRequestHeaders()
    const session = await auth.api.getSession({ headers })
    if (!session?.user) return wrapError('Unauthorized')

    const product = await prisma.product.findUnique({
      where: { id: data.productId },
    })

    if (!product) return wrapError('Product not found')

    let cart = await prisma.cart.findFirst({
      where: { userId: session.user.id },
    })

    if (!cart) {
      cart = await prisma.cart.create({
        data: { userId: session.user.id },
      })
    }

    const existingItem = await prisma.cartItem.findFirst({
      where: {
        cartId: cart.id,
        productId: data.productId,
        billingPeriod: data.billingPeriod,
      },
    })

    if (existingItem) {
      await prisma.cartItem.update({
        where: { id: existingItem.id },
        data: {
          quantity: existingItem.quantity + data.quantity,
          configuration: data.configuration ?? existingItem.configuration ?? undefined,
        },
      })
    } else {
      await prisma.cartItem.create({
        data: {
          cartId: cart.id,
          productId: data.productId,
          quantity: data.quantity,
          billingPeriod: data.billingPeriod,
          configuration: data.configuration ?? undefined,
        },
      })
    }

    return wrapSuccess('Added to cart')
  })

export const updateCartItem = createServerFn({ method: 'POST' })
  .validator((data) => updateCartItemSchema.parse(data))
  .handler(async ({ data }) => {
    const headers = getRequestHeaders()
    const session = await auth.api.getSession({ headers })
    if (!session?.user) return wrapError('Unauthorized')

    const item = await prisma.cartItem.findUnique({
      where: { id: data.itemId },
      include: { cart: true },
    })

    if (!item || item.cart.userId !== session.user.id) {
      return wrapError('Cart item not found')
    }

    await prisma.cartItem.update({
      where: { id: data.itemId },
      data: { quantity: data.quantity },
    })

    return wrapSuccess('Cart updated')
  })

export const removeFromCart = createServerFn({ method: 'POST' })
  .validator((data) => removeFromCartSchema.parse(data))
  .handler(async ({ data }) => {
    const headers = getRequestHeaders()
    const session = await auth.api.getSession({ headers })
    if (!session?.user) return wrapError('Unauthorized')

    const item = await prisma.cartItem.findUnique({
      where: { id: data.itemId },
      include: { cart: true },
    })

    if (!item || item.cart.userId !== session.user.id) {
      return wrapError('Cart item not found')
    }

    await prisma.cartItem.delete({
      where: { id: data.itemId },
    })

    return wrapSuccess('Removed from cart')
  })

export const clearCart = createServerFn({ method: 'POST' }).handler(async () => {
  const headers = getRequestHeaders()
  const session = await auth.api.getSession({ headers })
  if (!session?.user) return wrapError('Unauthorized')

  const cart = await prisma.cart.findFirst({
    where: { userId: session.user.id },
  })

  if (cart) {
    await prisma.cartItem.deleteMany({
      where: { cartId: cart.id },
    })
  }

  return wrapSuccess('Cart cleared')
})
