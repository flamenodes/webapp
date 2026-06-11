import { createFileRoute } from '@tanstack/react-router'
import Features from '#/components/hero/Features'
import HeroSection from '#/components/hero/HeroSection'
import ScrollReveal from '#/components/ScrollReveal'
import { seo } from '#/utils/seo'
import { TrustSection } from '@/components/hero/TrustSection'
import { PricingTableFour } from '@/components/billingsdk/pricing-table-four'
import { plans } from '@/lib/billingsdk-config'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: seo({
      title: 'Home | Flame Nodes',
      description:
        'High-performance cloud hosting with instant setup. VPS, dedicated servers, Minecraft hosting, web hosting, and enterprise DDoS protection.',
      keywords:
        'cloud hosting, VPS, dedicated servers, Minecraft hosting, game server, DDoS protection',
      image: '/flamenodes.png',
    }),
  }),
  component: Home,
})

function Home() {
  const pricing = [
    {
      icon: '',
      title: 'Web Hosting',
      description: 'Fast and reliable web hosting solutions',
      price: '49',
      features: [
        'Wordpress, Nodejs Etc',
        'Free Subdomain',
        'High Speed NVMe SSD',
        'Premium Support',
        'Free SSL Certificate',
        'Daily Backups',
      ],
      cta: 'View Pricing',
      featured: false,
      to: '/pricing/webhost',
    },
    {
      icon: '',
      title: 'Minecraft Hosting',
      description: 'Optimized servers for Minecraft gameplay',
      price: '99',
      features: [
        'Ryzen 9 (Optimized)',
        'DDR4 RAM',
        'High Speed NVMe SSD',
        'Premium Support',
        'One-Click Modpack Install',
        'DDoS Protection',
      ],
      cta: 'View Pricing',
      featured: true,
      to: '/pricing/minecraft',
    },
    {
      icon: '',
      title: 'VPS Hosting',
      description: 'High-performance virtual private servers',
      price: '599',
      features: [
        'Ryzen 9 (Core)',
        'DDR4 RAM',
        'High Speed NVMe SSD',
        'Premium Support',
        'Full Root Access',
        '99.9% Uptime',
      ],
      cta: 'View Pricing',
      featured: false,
      to: '/pricing/vps',
    },
  ]

  return (
    <main className="w-full overflow-x-hidden">
      <HeroSection />
      <Features />
      <section className="text-center mt-20 mx-auto max-w-5xl px-4 sm:px-6 font-cursive leading-10 *:text-sm">
        <ScrollReveal
          textClassName="text-3xl sm:text-4xl"
          baseOpacity={0.1}
          enableBlur
          baseRotation={6}
          blurStrength={9}
        >
          FlameNodes is a modern game and cloud hosting platform focused on
          solutions for gamers, developers, and online communities.
        </ScrollReveal>
      </section>
      <section className="flex justify-center items-center w-full">
        <div className="max-w-[60rem]">
          <PricingTableFour
            plans={plans}
            title="Find Your Perfect Plan"
            theme="minimal"
            description="Reliable infrastructure, premium features, and flexible pricing designed for creators and gaming communities."
            subtitle="Everything You Need to Build and Grow"
            onPlanSelect={(planId: string) =>
              console.log('Selected plan:', planId)
            }
            size="medium"
            className="w-full bg-transparent py-12"
            showBillingToggle={true}
            billingToggleLabels={{
              monthly: 'Monthly',
              yearly: 'Yearly',
            }}
          />
        </div>
      </section>
      <TrustSection />
    </main>
  )
}
