import { Card, CardContent, CardHeader } from '#/components/ui/card.tsx'
import { Settings2, Sparkles, Zap } from 'lucide-react'
import type { ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'
import PixelBlast from '../PixelBlast'

const cardData = [
  {
    icon: Zap,
    title: 'Performance',
    description: 'Fast servers with stable performance and low latency for smooth gameplay.',
    delay: 0
  },
  {
    icon: Settings2,
    title: 'Customizabilty',
    description: 'Easy control panel with full access to manage files, mods, backups, and startup options.',
    delay: 120
  },
  {
    icon: Sparkles,
    title: 'Trusted',
    description: 'Reliable hosting trusted by communities that want good uptime and quick support.',
    delay: 240
  }
]

export default function Features() {
  return (
    <section className="bg-zinc-50 py-16 md:py-16 dark:bg-transparent">
      <div className="@container mx-auto max-w-5xl px-6 relative z-6">
        <div className="absolute w-full z-0 top-30">
          <PixelBlast
            variant="square"
            pixelSize={6}
            color="#ff327f"
            patternScale={2}
            patternDensity={1}
            pixelSizeJitter={0}
            enableRipples
            rippleSpeed={0.4}
            rippleThickness={0.12}
            rippleIntensityScale={1.5}
            liquid={false}
            liquidStrength={0.12}
            liquidRadius={1.2}
            liquidWobbleSpeed={5}
            speed={0.5}
            edgeFade={0.25}
            transparent
          />
        </div>
        <div className="text-center">
          <h2 className="text-balance text-3xl lg:text-4xl font-extrabold">
            Why choose Us?
          </h2>
          <p className="mt-4">
            Discover the powerful capabilities that set our hosting platform
            apart. From advanced customization options to , we deliver the tools
            you need to create exceptional hosting experiences.
          </p>
        </div>
        <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
          {cardData.map((card, index) => (
            <AnimatedCard key={index} delay={card.delay}>
              <Card className="group shadow-zinc-950/5 h-full cursor-pointer border-border hover:border-primary/30 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
                <CardHeader className="pb-3">
                  <CardDecorator>
                    <card.icon
                      className="size-6 group-hover:text-primary transition-colors duration-300"
                      aria-hidden
                    />
                  </CardDecorator>
                  <h3 className="mt-6 font-bold group-hover:text-primary transition-colors duration-300 text-xl">
                    {card.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}

function AnimatedCard({
  children,
  delay,
}: {
  children: ReactNode
  delay: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-50"
    />

    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
      {children}
    </div>
  </div>
)
