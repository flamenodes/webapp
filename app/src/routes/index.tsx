import { createFileRoute } from '@tanstack/react-router'
import Features from '#/components/hero/Features'
import HeroSection from '#/components/hero/HeroSection'
import ScrollReveal from '#/components/ScrollReveal'
import { PricingHeroCard } from '#/components/hero/PricingHeroCard'
import { seo } from '#/utils/seo'
import { ContactUS } from '@/components/hero/ContactUS'

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
    <main className=" w-full">
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
      <section className="flex flex-col items-center justify-center [perspective:1000px] gap-8 relative px-4 sm:px-6 pb-20 pt-8">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-background/10 to-primary/20 blur-3xl rounded-full scale-150 opacity-60 pointer-events-none"></div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-angkor font-extrabold text-transparent bg-clip-text bg-linear-60 from-primary to-primary/50 [text-shadow:0_0_20px_rgba(238,105,105,0.3)]">
          Plans Starts At!
        </h1>
        <div id="pricing" className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 space-y-4">
          {pricing.map((map, key) => (
            <PricingHeroCard
              key={key}
              name={map.title}
              description={map.description}
              featured={map.featured}
              price={map.price}
              features={map.features}
              cta={map.cta}
              to={map.to}
            />
          ))}
        </div>
      </section>
      <ContactUS/>
    </main>
  )
}
