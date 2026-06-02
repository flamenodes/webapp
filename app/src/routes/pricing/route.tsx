import { HostingTabs } from '#/components/pricing/HostingTabs'
import { Spotlight } from '#/components/ui/spotlight-new'
import { createFileRoute, Outlet, useLocation, useNavigate } from '@tanstack/react-router'
import { Boxes, Server, Cpu, Globe, Gamepad2, Shield, Zap } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '#/components/ui/dropdown-menu'
import { Button } from '#/components/ui/button'
import { ChevronDown } from 'lucide-react'
import { seo } from '#/utils/seo'

type PageTitle = { 
  top: string; 
  before: string; 
  highlight: string; 
  after: string; 
  description?: string;
  badges?: { icon: any; label: string }[]
}

const PAGE_TITLES: Record<string, PageTitle> = {
  '/pricing/minecraft': { 
    top: 'Deploy Your', 
    before: '', 
    highlight: 'Minecraft', 
    after: ' Server',
    description: 'Full mod, plugin, and server software support. NVMe SSD storage, DDoS protection included.',
    badges: [
      { icon: Zap, label: 'Instant Deploy' },
      { icon: Shield, label: 'DDoS Protected' },
    ]
  },
  '/pricing/vps': { 
    top: 'Launch Your', 
    before: '', 
    highlight: 'VPS', 
    after: ' Today',
    description: 'Full root access, dedicated resources, and enterprise-grade infrastructure. NVMe SSD, snapshots included.',
    badges: [
      { icon: Zap, label: 'Instant Setup' },
      { icon: Shield, label: '99.9% Uptime' },
    ]
  },
  '/pricing/webhost': { 
    top: 'Deploy Your', 
    before: '', 
    highlight: 'Website', 
    after: ' Today',
    description: 'WordPress, Node.js, and custom applications supported. Free SSL, daily backups, and CDN included.',
    badges: [
      { icon: Zap, label: 'Free SSL' },
      { icon: Shield, label: 'Daily Backups' },
    ]
  },
  '/pricing/dedicated': { 
    top: 'Raw Power,', 
    before: '', 
    highlight: 'Dedicated', 
    after: ' to You',
    description: 'Full dedicated hardware with complete control. Enterprise SSD/NVMe, IPMI access, and custom configurations.',
    badges: [
      { icon: Zap, label: 'Full Control' },
      { icon: Shield, label: 'IPMI Access' },
    ]
  },
  '/pricing/vds': { 
    top: 'Virtual Power,', 
    before: '', 
    highlight: 'Real', 
    after: ' Performance',
    description: 'Dedicated resources with VPS flexibility. High-performance CPU cores, NVMe storage, and full isolation.',
    badges: [
      { icon: Zap, label: 'Dedicated CPU' },
      { icon: Shield, label: 'Fully Isolated' },
    ]
  },
  '/pricing/discord-bot': { 
    top: 'Keep Your Bot', 
    before: '', 
    highlight: 'Online', 
    after: ', Always',
    description: 'Node.js, Python, and custom runtime support. Auto-restart, monitoring, and 24/7 uptime included.',
    badges: [
      { icon: Zap, label: '24/7 Online' },
      { icon: Shield, label: 'Auto-Restart' },
    ]
  },
  '/pricing/protection': { 
    top: 'Stay Safe,', 
    before: 'Stay ', 
    highlight: 'Protected', 
    after: '.',
    description: 'Enterprise-grade DDoS protection with advanced filtering. Real-time mitigation and zero downtime.',
    badges: [
      { icon: Zap, label: 'Real-Time' },
      { icon: Shield, label: 'Layer 3-7' },
    ]
  },
}

const DEFAULT_TITLE: PageTitle = { 
  top: 'Transparent Pricing.', 
  before: 'No ', 
  highlight: 'Surprises', 
  after: '.',
  description: 'Simple, predictable pricing for all our hosting services. No hidden fees, no surprises.',
  badges: [
    { icon: Zap, label: 'No Setup Fees' },
    { icon: Shield, label: 'Cancel Anytime' },
  ]
}

export const Route = createFileRoute('/pricing')({
  head: () => ({
    meta: seo({
      title: 'Pricing | Flame Nodes',
      description: 'Transparent, affordable pricing for cloud hosting, VPS, dedicated servers, Minecraft servers, and more. No hidden fees.',
      keywords: 'hosting pricing, VPS pricing, dedicated server pricing, Minecraft hosting pricing',
      image: '/flamenodes.png',
    }),
  }),
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
]

const gameServerOptions = [
  { label: 'FiveM', to: '/pricing/fivem', icon: Gamepad2 },
  { label: 'Terraria', to: '/pricing/terraria', icon: Gamepad2 },
  { label: 'Rust', to: '/pricing/rust', icon: Gamepad2 },
  { label: 'ARK', to: '/pricing/ark', icon: Gamepad2 },
  // Add more game servers here as needed
]

function pricingLayout() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const title = PAGE_TITLES[pathname] ?? DEFAULT_TITLE
  
  const isGameServerPage = gameServerOptions.some(opt => opt.to === pathname)
  const currentGameServer = gameServerOptions.find(opt => opt.to === pathname)

  return (
    <section className="flex flex-col items-center min-h-screen relative">
      <Spotlight />
      <div className="absolute bottom-0 right-0 bg-background bg-[radial-gradient(el)]"></div>
      <div className="mt-12 sm:mt-16 md:mt-20 flex flex-col justify-center items-center w-full h-full px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold my-4 sm:my-6 text-center font-angkor leading-tight">
          {title.top}
          <br />
          {title.before}
          <span className="gradient">{title.highlight}</span>
          {title.after}
        </h1>
        {title.description && (
          <div className="text-center max-w-2xl mb-4 sm:mb-6 px-4 space-y-2 sm:space-y-3">
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
              {title.description}
            </p>
            {title.badges && (
              <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 text-xs text-muted-foreground/80 flex-wrap">
                {title.badges.map((badge, idx) => {
                  const Icon = badge.icon
                  return (
                    <span key={idx} className="flex items-center gap-1.5">
                      <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      {badge.label}
                    </span>
                  )
                })}
              </div>
            )}
          </div>
        )}
        
        {/* Tabs with Game Servers Dropdown */}
        <div className="flex justify-center items-center gap-0 w-full max-w-full">
          <div className="flex items-center rounded-xl sm:rounded-2xl border border-white/[0.05] bg-[#09090D]/90 backdrop-blur-xl overflow-x-auto overflow-y-hidden shadow-[0_10px_40px_rgba(0,0,0,0.45)] scrollbar-hide max-w-full">
            {category.map((tab) => {
              const Icon = tab.icon
              const isActive = pathname === tab.to

              return (
                <button
                  key={tab.label}
                  onClick={() => navigate({ to: tab.to })}
                  className={`
                    relative flex items-center gap-1.5 sm:gap-2 md:gap-2.5 px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-3.5
                    text-[11px] sm:text-xs md:text-[13px] font-medium transition-all duration-300
                    border-r border-white/[0.04] last:border-r-0
                    hover:text-white hover:bg-white/[0.02] flex-shrink-0
                    ${
                      isActive
                        ? 'text-[#ff4d8d] bg-gradient-to-b from-[#ff4d8d]/15 to-[#ff4d8d]/5 shadow-[inset_0_-2px_0_#ff4d8d]'
                        : 'text-white/55'
                    }
                  `}
                >
                  {isActive && (
                    <>
                      <div className="absolute inset-0 bg-[#ff4d8d]/8 blur-2xl pointer-events-none" />
                      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#ff4d8d] to-transparent" />
                    </>
                  )}
                  <Icon
                    size={14}
                    strokeWidth={1.9}
                    className={`relative z-10 transition-colors sm:w-4 sm:h-4 ${isActive ? 'text-[#ff4d8d]' : 'text-white/40'}`}
                  />
                  <span className="relative z-10 whitespace-nowrap hidden sm:inline">{tab.label}</span>
                </button>
              )
            })}
            
            {/* Game Servers Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`
                    relative flex items-center gap-1.5 sm:gap-2 md:gap-2.5 px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-3.5
                    text-[11px] sm:text-xs md:text-[13px] font-medium transition-all duration-300
                    hover:text-white hover:bg-white/[0.02] flex-shrink-0
                    ${
                      isGameServerPage
                        ? 'text-[#ff4d8d] bg-gradient-to-b from-[#ff4d8d]/15 to-[#ff4d8d]/5 shadow-[inset_0_-2px_0_#ff4d8d]'
                        : 'text-white/55'
                    }
                  `}
                >
                  {isGameServerPage && (
                    <>
                      <div className="absolute inset-0 bg-[#ff4d8d]/8 blur-2xl pointer-events-none" />
                      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#ff4d8d] to-transparent" />
                    </>
                  )}
                  <Gamepad2
                    size={14}
                    strokeWidth={1.9}
                    className={`relative z-10 transition-colors sm:w-4 sm:h-4 ${isGameServerPage ? 'text-[#ff4d8d]' : 'text-white/40'}`}
                  />
                  <span className="relative z-10 whitespace-nowrap hidden sm:inline">
                    {isGameServerPage ? currentGameServer?.label : 'Game Servers'}
                  </span>
                  <ChevronDown
                    size={12}
                    className={`relative z-10 transition-colors sm:w-3.5 sm:h-3.5 ${isGameServerPage ? 'text-[#ff4d8d]' : 'text-white/40'}`}
                  />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40 sm:w-48">
                {gameServerOptions.map((option) => {
                  const OptionIcon = option.icon
                  return (
                    <DropdownMenuItem
                      key={option.to}
                      onClick={() => navigate({ to: option.to })}
                      className="cursor-pointer text-xs sm:text-sm"
                    >
                      <OptionIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2" />
                      {option.label}
                    </DropdownMenuItem>
                  )
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      <Outlet />
    </section>
  )
}
