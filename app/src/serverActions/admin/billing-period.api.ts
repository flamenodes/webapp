import { createServerFn } from '@tanstack/react-start'
import { getRequestHeaders } from '@tanstack/react-start/server'
import { prisma } from '#/db'
import { auth } from '@/lib/auth'
import { z } from 'zod'

async function requireAdmin() {
  const headers = getRequestHeaders()
  const session = await auth.api.getSession({ headers })
  if (!session?.user) throw new Error('Unauthorized')
  const role = session.user.role?.toLowerCase()
  if (role !== 'admin' && role !== 'owner') throw new Error('Forbidden')
  return session.user
}

export const createCustomBillingPeriod = createServerFn({ method: 'POST' })
  .inputValidator((data) => z.object({
    productId: z.string(),
    customDays: z.number().min(1),
    price: z.number().min(0),
  }).parse(data))
  .handler(async ({ data }) => {
    await requireAdmin()
    const option = await prisma.productBillingOption.create({
      data: {
        productId: data.productId,
        billingPeriod: 'CUSTOM',
        customDays: data.customDays,
        price: data.price,
      },
    })
    return { success: true, data: option }
  })

export const updateCustomBillingPeriod = createServerFn({ method: 'POST' })
  .inputValidator((data) => z.object({
    id: z.string(),
    customDays: z.number().min(1).optional(),
    price: z.number().min(0).optional(),
  }).parse(data))
  .handler(async ({ data }) => {
    await requireAdmin()
    const option = await prisma.productBillingOption.update({
      where: { id: data.id },
      data: {
        customDays: data.customDays,
        price: data.price,
      },
    })
    return { success: true, data: option }
  })

export const deleteCustomBillingPeriod = createServerFn({ method: 'POST' })
  .inputValidator((data) => z.object({ id: z.string() }).parse(data))
  .handler(async ({ data }) => {
    await requireAdmin()
    await prisma.productBillingOption.delete({
      where: { id: data.id },
    })
    return { success: true }
  })
