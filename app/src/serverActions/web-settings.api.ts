import { createServerFn } from '@tanstack/react-start'
import { prisma } from '#/db'

export const getAllWebSettings = createServerFn({ method: 'GET' }).handler(async () => {
  return await prisma.webSettings.findMany({
    orderBy: { key: 'asc' }
  })
})

export const getWebSettingByKey = createServerFn({ method: 'GET' })
  .inputValidator((data: unknown) => data as string)
  .handler(async ({ data: key }) => {
    return await prisma.webSettings.findUnique({
      where: { key }
    })
  })

export const updateWebSetting = createServerFn({ method: 'POST' })
  .inputValidator((data: unknown) => data as { key: string; value: any })
  .handler(async ({ data }) => {
    return await prisma.webSettings.upsert({
      where: { key: data.key },
      update: { value: data.value },
      create: { key: data.key, value: data.value }
    })
  })

export const getFooterSettings = createServerFn({ method: 'GET' }).handler(async () => {
  const enabled = await prisma.webSettings.findUnique({ where: { key: 'enabled' } })
  if (!enabled?.value?.enabled) {
    return {
      categories: [],
      socialLinks: [],
      copyrightText: '© 2024 Flame Nodes. All rights reserved.'
    }
  }
  
  const footer = await prisma.webSettings.findUnique({
    where: { key: 'footer' }
  })
  
  return footer?.value || {
    categories: [],
    socialLinks: [],
    copyrightText: '© 2024 Flame Nodes. All rights reserved.'
  }
})

export const getHeaderSettings = createServerFn({ method: 'GET' }).handler(async () => {
  const enabled = await prisma.webSettings.findUnique({ where: { key: 'enabled' } })
  if (!enabled?.value?.enabled) {
    return { companyDropdown: [] }
  }
  
  const header = await prisma.webSettings.findUnique({
    where: { key: 'header' }
  })
  
  return header?.value || {
    companyDropdown: []
  }
})
