import { createServerFn } from '@tanstack/react-start'
import { z } from 'zod'
import { hasPermissionFn } from '@/lib/has-permission'

const wrapSuccess = <T>(message: string, data?: T) => ({
  success: true,
  message,
  data,
})
const wrapError = (message: string) => ({ success: false, message })

async function requireAdmin() {
  const perm = await hasPermissionFn({
    data: { permissions: { dashboard: ['admin'] } },
  })
  if (!perm) {
    throw new Error('You do not have permission to access settings.')
  }
}

const razorpayConfigSchema = z.object({
  mode: z.enum(['test', 'production']),
  testKeyId: z.string().optional(),
  testKeySecret: z.string().optional(),
  prodKeyId: z.string().optional(),
  prodKeySecret: z.string().optional(),
  gstin: z.string().optional(),
  companyName: z.string().optional(),
  companyAddress: z.string().optional(),
  companyCity: z.string().optional(),
  companyZip: z.string().optional(),
  companyCountry: z.string().optional(),
  pteroNodeMode: z.enum(['balance', 'specific']).optional(),
  pteroNodeId: z.number().int().positive().optional().nullable(),
})

export const getRazorpayConfig = createServerFn({ method: 'GET' }).handler(
  async () => {
    await requireAdmin()
    const { prisma } = await import('#/db')

    const config = await prisma.razorpayConfig.findFirst()
    return wrapSuccess('Config fetched', config)
  },
)

export const updateRazorpayConfig = createServerFn({ method: 'POST' })
  .validator((data) => razorpayConfigSchema.parse(data))
  .handler(async ({ data }) => {
    await requireAdmin()
    const { prisma } = await import('#/db')

    const existing = await prisma.razorpayConfig.findFirst()

    let config
    if (existing) {
      config = await prisma.razorpayConfig.update({
        where: { id: existing.id },
        data,
      })
    } else {
      config = await prisma.razorpayConfig.create({
        data,
      })
    }

    return wrapSuccess('Razorpay configuration updated', config)
  })

export const getPteroNodeSettings = createServerFn({ method: 'GET' }).handler(
  async () => {
    const { prisma } = await import('#/db')
    const config = await prisma.razorpayConfig.findFirst()
    return {
      nodeMode: (config?.pteroNodeMode ?? 'balance') as 'balance' | 'specific',
      nodeId: config?.pteroNodeId ?? undefined,
    }
  },
)

export const getActiveRazorpayKeys = createServerFn({ method: 'GET' }).handler(
  async () => {
    const { prisma } = await import('#/db')
    const config = await prisma.razorpayConfig.findFirst()

    if (!config) {
      return {
        keyId: process.env.RAZORPAY_KEY_ID || '',
        keySecret: process.env.RAZORPAY_KEY_SECRET || '',
        mode: 'test',
        gstin: null,
      }
    }

    const isProduction = config.mode === 'production'
    return {
      keyId: isProduction ? config.prodKeyId || '' : config.testKeyId || '',
      keySecret: isProduction
        ? config.prodKeySecret || ''
        : config.testKeySecret || '',
      mode: config.mode,
      gstin: config.gstin,
      companyName: config.companyName,
      companyAddress: config.companyAddress,
      companyCity: config.companyCity,
      companyZip: config.companyZip,
      companyCountry: config.companyCountry,
    }
  },
)

export const getWebSettingsToggle = createServerFn({ method: 'GET' }).handler(
  async () => {
    const { prisma } = await import('#/db')
    const setting = await prisma.webSettings.findUnique({
      where: { key: 'enabled' },
    })
    return setting?.value?.enabled ?? false
  },
)

export const updateWebSettingsToggle = createServerFn({ method: 'POST' })
  .validator((data: unknown) => z.boolean().parse(data))
  .handler(async ({ data: enabled }) => {
    await requireAdmin()
    const { prisma } = await import('#/db')
    await prisma.webSettings.upsert({
      where: { key: 'enabled' },
      update: { value: { enabled } },
      create: { key: 'enabled', value: { enabled } },
    })
    return wrapSuccess('Web settings toggle updated', { enabled })
  })
