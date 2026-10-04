import { createServerFn } from '@tanstack/react-start'
import { razorpay } from './instance'
import { prisma } from '#/db'
import { getSession } from '#/handlers/auth.handler'
import { z } from 'zod'

export const createOrderSchema = z
  .object({
    /** Amount in paise (rupees × 100). Ignored when `orderId` is given. */
    amount: z.number().int().positive().optional(),

    /**
     * The stored order to charge for. Preferred over `amount` so the price —
     * including any coupon discount — always comes from the server.
     */
    orderId: z.string().optional(),

    currency: z.literal('INR'),

    receipt: z.string().min(1),

    notes: z.record(z.string(), z.string()).optional(),
  })
  .refine((data) => data.orderId !== undefined || data.amount !== undefined, {
    message: 'Either orderId or amount is required.',
    path: ['amount'],
  })

export const createRazorOrderFn = createServerFn({ method: 'POST' })
  .validator(createOrderSchema)
  .handler(async ({ data }) => {
    const { orderId, amount, ...rest } = data

    if (!orderId) {
      // `amount` is guaranteed by the schema when no order is given.
      return razorpay.orders.create({ ...rest, amount: amount as number })
    }

    const session = await getSession()
    if (!session?.user) throw new Error('Unauthorized')

    const order = await prisma.order.findFirst({
      where: { id: orderId, userId: session.user.id },
      select: { totalAmount: true },
    })
    if (!order) throw new Error('Order not found')

    return razorpay.orders.create({ ...rest, amount: order.totalAmount * 100 })
  })

export const getAllRazorOrderFn = createServerFn({ method: 'GET' }).handler(
  async () => {
    try {
      const resData = razorpay.orders.all

      return { resData }
    } catch (err: any) {
      return err
    }
  },
)

export const getRazorOrderByID = createServerFn({ method: 'GET' })
  .validator(z.object({ id: z.string() }))
  .handler(async ({ data }) => {
    try {
      const resData = await razorpay.orders.fetch(data.id)
      return { resData }
    } catch (err: any) {
      return err
    }
  })
