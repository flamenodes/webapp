import { createServerFn } from '@tanstack/react-start'
import { getRequestHeaders } from '@tanstack/react-start/server'
import { prisma } from '#/db'
import { auth } from '@/lib/auth'
import { getSession } from '@/handlers/auth.handler'
import { evaluateCoupon } from '#/lib/coupon'
import { z } from 'zod'

async function requireAdmin() {
  const session = await getSession()
  const role = (session?.user as any)?.role?.toUpperCase()
  if (!session?.user) throw new Error('Unauthorized')
  if (role !== 'ADMIN' && role !== 'OWNER') throw new Error('Forbidden')
  return session
}

/** Coupon codes are matched case-insensitively, so they are stored upper-cased. */
const couponCode = z.string().trim().min(2).max(64).transform((c) => c.toUpperCase())

/** ISO string from a date input; an empty string means "never expires". */
const expiryInput = z
  .string()
  .nullish()
  .refine((value) => !value || !Number.isNaN(new Date(value).getTime()), {
    message: 'Invalid expiry date',
  })

function toDate(value: string | null | undefined): Date | null {
  return value && value.trim() ? new Date(value) : null
}

const couponBodySchema = z.object({
  type: z.enum(['PERCENT', 'FIXED']),
  amount: z.number().int().positive(),
  description: z.string().trim().max(200).nullish(),
  active: z.boolean().default(true),
  expiresAt: expiryInput,
  maxUses: z.number().int().positive().nullish(),
})

const percentWithinRange = (c: { type?: 'PERCENT' | 'FIXED'; amount?: number }) =>
  c.type !== 'PERCENT' || (c.amount ?? 0) <= 100

const createCouponSchema = couponBodySchema
  .extend({ code: couponCode })
  .refine(percentWithinRange, {
    message: 'A percentage coupon cannot exceed 100.',
    path: ['amount'],
  })

const updateCouponSchema = couponBodySchema
  .partial()
  .extend({ id: z.string(), code: couponCode.optional() })
  .refine(percentWithinRange, {
    message: 'A percentage coupon cannot exceed 100.',
    path: ['amount'],
  })

const validateCouponSchema = z.object({
  code: z.string().trim().min(1),
  /** Order subtotal in rupees, used to work out the discount. */
  subtotal: z.number().int().nonnegative(),
})

export const getCoupons = createServerFn({ method: 'GET' }).handler(async () => {
  await requireAdmin()
  return prisma.coupon.findMany({ orderBy: { createdAt: 'desc' } })
})

export const createCoupon = createServerFn({ method: 'POST' })
  .validator(createCouponSchema)
  .handler(async ({ data }) => {
    await requireAdmin()

    const existing = await prisma.coupon.findUnique({ where: { code: data.code } })
    if (existing) throw new Error(`Coupon ${data.code} already exists.`)

    return prisma.coupon.create({
      data: {
        code: data.code,
        type: data.type,
        amount: data.amount,
        description: data.description ?? null,
        active: data.active,
        expiresAt: toDate(data.expiresAt),
        maxUses: data.maxUses ?? null,
      },
    })
  })

export const updateCoupon = createServerFn({ method: 'POST' })
  .validator(updateCouponSchema)
  .handler(async ({ data }) => {
    await requireAdmin()

    const { id, ...changes } = data

    if (changes.code) {
      const clash = await prisma.coupon.findUnique({ where: { code: changes.code } })
      if (clash && clash.id !== id) {
        throw new Error(`Coupon ${changes.code} already exists.`)
      }
    }

    return prisma.coupon.update({
      where: { id },
      data: {
        ...(changes.code !== undefined ? { code: changes.code } : {}),
        ...(changes.type !== undefined ? { type: changes.type } : {}),
        ...(changes.amount !== undefined ? { amount: changes.amount } : {}),
        ...(changes.description !== undefined
          ? { description: changes.description ?? null }
          : {}),
        ...(changes.active !== undefined ? { active: changes.active } : {}),
        ...(changes.expiresAt !== undefined
          ? { expiresAt: toDate(changes.expiresAt) }
          : {}),
        ...(changes.maxUses !== undefined ? { maxUses: changes.maxUses ?? null } : {}),
      },
    })
  })

export const deleteCoupon = createServerFn({ method: 'POST' })
  .validator(z.object({ id: z.string() }))
  .handler(async ({ data }) => {
    await requireAdmin()
    await prisma.coupon.delete({ where: { id: data.id } })
    return { success: true, message: 'Coupon deleted' }
  })

/**
 * Price a coupon for a customer's cart. Returns a message instead of throwing
 * so the payment page can show "expired" / "usage limit reached" inline.
 */
export const validateCoupon = createServerFn({ method: 'POST' })
  .validator(validateCouponSchema)
  .handler(async ({ data }) => {
    const headers = getRequestHeaders()
    const session = await auth.api.getSession({ headers })
    if (!session?.user) throw new Error('Unauthorized')

    const coupon = await prisma.coupon.findUnique({
      where: { code: data.code.trim().toUpperCase() },
    })

    return evaluateCoupon(coupon, data.subtotal)
  })
