import { HostingTabs } from '#/components/pricing/HostingTabs'
import { Spotlight } from '#/components/ui/spotlight-new'
import { createFileRoute, Link, Outlet } from '@tanstack/react-router'
import { Boxes, Server, Cpu, Globe, Gamepad2 } from 'lucide-react'

export const Route = createFileRoute('/pricing')({
  head: () => ({}),
  component: pricingLayout,
})

const category = [
  {
    label: 'Minecraft',
    to: '/pricing/minecraft',
    icon: Boxes,
  },
  {
    label: 'VPS',
    to: '/pricing/vps',
    icon: Server,
  },
  {
    label: 'Dedicated',
    to: '/pricing/dedicated',
    icon: Cpu,
  },
  {
    label: 'Web Hosting',
    to: '/pricing/webhost',
    icon: Globe,
  },
  {
    label: 'Game Servers',
    to: '/pricing/game-servers',
    icon: Gamepad2,
  },
]

function pricingLayout() {
  return (
    <section className="flex flex-col items-center min-h-screen relative">
      <Spotlight />
      <div className="absolute bottom-0 right-0 bg-background bg-[radial-gradient(el)]"></div>
      <div className="mt-30 flex flex-col justify-center items-center w-full h-full">
        <h1 className=" text-6xl font-bold my-6 text-center">
          Transparent Pricing <br />
          No Surprises
        </h1>
        <HostingTabs tabs={category} />
      </div>
      <Outlet />
    </section>
  )
}
