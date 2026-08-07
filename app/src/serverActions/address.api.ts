import { createServerFn } from '@tanstack/react-start'
import { z } from 'zod'
import { getSession } from '@/handlers/auth.handler'
import { prisma } from '@/db'

const addressSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  phone: z.string(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  zipCode: z.string(),
  country: z.string(),
})

export const saveAddress = createServerFn({ method: 'POST' })
  .validator((data) => addressSchema.parse(data))
  .handler(async ({ data }) => {
    const session = await getSession()
    if (!session?.user) throw new Error('Unauthorized')

    await prisma.billingAddress.upsert({
      where: { userId: session.user.id },
      update: {
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        address: data.address,
        city: data.city,
        state: data.state,
        zip: data.zipCode,
        country: data.country,
      },
      create: {
        userId: session.user.id,
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        address: data.address,
        city: data.city,
        state: data.state,
        zip: data.zipCode,
        country: data.country,
      },
    })

    return { success: true }
  })

export const getAddress = createServerFn({ method: 'GET' }).handler(async () => {
  const session = await getSession()
  if (!session?.user) return null

  const billing = await prisma.billingAddress.findUnique({
    where: { userId: session.user.id },
  })

  return {
    firstName: billing?.firstName ?? '',
    lastName: billing?.lastName ?? '',
    email: session.user.email ?? '',
    phone: billing?.phone ?? '',
    address: billing?.address ?? '',
    city: billing?.city ?? '',
    state: billing?.state ?? '',
    zipCode: billing?.zip ?? '',
    country: billing?.country ?? 'India',
  }
})
