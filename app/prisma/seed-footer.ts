import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Seed footer settings with existing data
  await prisma.webSettings.upsert({
    where: { key: 'footer' },
    update: {},
    create: {
      key: 'footer',
      value: {
        categories: [
          {
            id: crypto.randomUUID(),
            title: 'Hosting',
            links: [
              { id: crypto.randomUUID(), label: 'Minecraft Hosting', url: '/minecraft' },
              { id: crypto.randomUUID(), label: 'VPS Hosting', url: '/vps' },
              { id: crypto.randomUUID(), label: 'Dedicated Servers', url: '/dedicated' },
              { id: crypto.randomUUID(), label: 'Game Panels', url: '/panels' },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: 'Company',
            links: [
              { id: crypto.randomUUID(), label: 'About Us', url: '/about' },
              { id: crypto.randomUUID(), label: 'Infrastructure', url: '/infrastructure' },
              { id: crypto.randomUUID(), label: 'Status Page', url: '/status' },
              { id: crypto.randomUUID(), label: 'Careers', url: '/careers' },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: 'Support',
            links: [
              { id: crypto.randomUUID(), label: 'Knowledgebase', url: '/kb' },
              { id: crypto.randomUUID(), label: 'Contact Support', url: '/support' },
              { id: crypto.randomUUID(), label: 'Billing', url: '/billing' },
              { id: crypto.randomUUID(), label: 'Terms of Service', url: '/terms' },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: 'Network',
            links: [
              { id: crypto.randomUUID(), label: 'Singapore', url: '/locations/singapore' },
              { id: crypto.randomUUID(), label: 'Germany', url: '/locations/germany' },
              { id: crypto.randomUUID(), label: 'India', url: '/locations/india' },
              { id: crypto.randomUUID(), label: 'Global Edge', url: '/locations/edge' },
            ],
          },
        ],
        socialLinks: [
          { id: crypto.randomUUID(), platform: 'Discord', url: 'https://discord.gg/flamenodes', icon: 'Discord' },
          { id: crypto.randomUUID(), platform: 'GitHub', url: 'https://github.com/flamenodes', icon: 'GitHub' },
          { id: crypto.randomUUID(), platform: 'X', url: 'https://x.com/flamenodes', icon: 'X' },
          { id: crypto.randomUUID(), platform: 'Instagram', url: 'https://instagram.com/flamenodes', icon: 'Instagram' },
        ],
        copyrightText: '© 2024 FlameNodes. All rights reserved.',
      },
    },
  })

  console.log('✅ Footer settings seeded successfully')

  // Seed header settings
  await prisma.webSettings.upsert({
    where: { key: 'header' },
    update: {},
    create: {
      key: 'header',
      value: {
        companyDropdown: [
          { id: crypto.randomUUID(), label: 'About Us', url: '/about', description: 'Learn more about our company' },
          { id: crypto.randomUUID(), label: 'Careers', url: '/careers', description: 'Join our team' },
          { id: crypto.randomUUID(), label: 'Contact', url: '/contact', description: 'Get in touch with us' },
        ],
      },
    },
  })

  console.log('✅ Header settings seeded successfully')

  // Seed web settings toggle (disabled by default)
  await prisma.webSettings.upsert({
    where: { key: 'enabled' },
    update: {},
    create: {
      key: 'enabled',
      value: { enabled: false },
    },
  })

  console.log('✅ Web settings toggle initialized')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
