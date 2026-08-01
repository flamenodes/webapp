import { createServerFn } from '@tanstack/react-start'
import { getRequestHeaders } from '@tanstack/react-start/server'
import { auth } from '@/lib/auth'
import { z } from 'zod'

const wrapSuccess = <T>(message: string, data?: T) => ({ success: true, message, data })
const wrapError = (message: string) => ({ success: false, message })

async function requireAdmin() {
  const headers = getRequestHeaders()
  const session = await auth.api.getSession({ headers })
  if (!session?.user) throw new Error('Unauthorized')
  const { prisma } = await import('#/db')
  const user = await prisma.user.findUnique({ where: { id: session.user.id }, select: { role: true } })
  const role = user?.role?.toUpperCase()
  if (role !== 'ADMIN' && role !== 'OWNER') throw new Error('Forbidden')
  return session
}

// Check if web settings feature is enabled (public)
export const isWebSettingsEnabled = createServerFn({ method: 'GET' }).handler(async () => {
  const { prisma } = await import('#/db')
  const setting = await prisma.webSettings.findUnique({
    where: { key: 'feature_enabled' },
  })
  return setting?.value?.enabled === true
})

// Toggle web settings feature (admin only)
export const toggleWebSettings = createServerFn({ method: 'POST' })
  .validator((data: unknown) => z.object({ enabled: z.boolean() }).parse(data))
  .handler(async ({ data }) => {
    await requireAdmin()
    const { prisma } = await import('#/db')
    
    await prisma.webSettings.upsert({
      where: { key: 'feature_enabled' },
      update: { value: { enabled: data.enabled } },
      create: { key: 'feature_enabled', value: { enabled: data.enabled } },
    })
    
    return wrapSuccess(`Web Settings ${data.enabled ? 'enabled' : 'disabled'} successfully`)
  })

// Get all web settings (admin)
export const getAllWebSettings = createServerFn({ method: 'GET' }).handler(async () => {
  await requireAdmin()
  const { prisma } = await import('#/db')
  const settings = await prisma.webSettings.findMany({
    orderBy: { key: 'asc' },
  })
  
  const settingsMap: Record<string, any> = {}
  settings.forEach((s) => {
    settingsMap[s.key] = s.value
  })
  
  return settingsMap
})

// Get footer settings (public)
export const getFooterSettings = createServerFn({ method: 'GET' }).handler(async () => {
  const { prisma } = await import('#/db')
  
  // Check if feature is enabled
  const featureSetting = await prisma.webSettings.findUnique({
    where: { key: 'feature_enabled' },
  })
  
  if (!featureSetting?.value?.enabled) {
    return null // Return null to use hardcoded footer
  }
  
  const setting = await prisma.webSettings.findUnique({
    where: { key: 'footer' },
  })
  
  return setting?.value || {
    categories: [],
    socialLinks: [],
    copyrightText: '© 2024 Flame Nodes. All rights reserved.',
  }
})

// Get header settings (public)
export const getHeaderSettings = createServerFn({ method: 'GET' }).handler(async () => {
  const { prisma } = await import('#/db')
  
  // Check if feature is enabled
  const featureSetting = await prisma.webSettings.findUnique({
    where: { key: 'feature_enabled' },
  })
  
  if (!featureSetting?.value?.enabled) {
    return { companyDropdown: [] } // Return empty to use hardcoded header
  }
  
  const setting = await prisma.webSettings.findUnique({
    where: { key: 'header' },
  })
  
  return setting?.value || { companyDropdown: [] }
})

// Update footer settings (admin)
const updateFooterSchema = z.object({
  categories: z.array(z.object({
    id: z.string(),
    title: z.string(),
    sortOrder: z.number().default(0),
    links: z.array(z.object({
      id: z.string(),
      label: z.string(),
      url: z.string(),
      sortOrder: z.number().default(0),
    })),
  })),
  socialLinks: z.array(z.object({
    id: z.string(),
    platform: z.string(),
    url: z.string(),
    icon: z.string(),
    sortOrder: z.number().default(0),
  })),
  copyrightText: z.string(),
})

export const updateFooterSettings = createServerFn({ method: 'POST' })
  .validator((data) => updateFooterSchema.parse(data))
  .handler(async ({ data }) => {
    await requireAdmin()
    const { prisma } = await import('#/db')
    
    await prisma.webSettings.upsert({
      where: { key: 'footer' },
      update: { value: data },
      create: { key: 'footer', value: data },
    })
    
    return wrapSuccess('Footer settings updated successfully')
  })
