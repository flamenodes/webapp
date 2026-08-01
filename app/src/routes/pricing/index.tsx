import { createFileRoute, useNavigate } from '@tanstack/react-router'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Boxes,
  Server,
  Cpu,
  Globe,
  Gamepad2,
  Shield,
  Zap,
  HardDrive,
  Database,
  Bot,
  ArrowRight,
} from 'lucide-react'

export const Route = createFileRoute('/pricing/')({
  component: PricingIndexPage,
})

const categories = [
  {
    id: 'minecraft',
    title: 'Minecraft Hosting',
    description:
      'Optimized servers for Minecraft with full mod & plugin support',
    icon: Boxes,
    color: 'from-emerald-500/20 to-green-500/20',
    borderColor: 'border-emerald-500/30',
    iconColor: 'text-emerald-500',
    to: '/pricing/minecraft',
    features: [
      'Instant Setup',
      'Full FTP Access',
      'DDoS Protection',
      'Auto Backups',
    ],
    popular: true,
  },
  {
    id: 'vps',
    title: 'VPS Hosting',
    description: 'Full root access with dedicated resources and flexibility',
    icon: Server,
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/30',
    iconColor: 'text-blue-500',
    to: '/pricing/vps',
    features: ['Root Access', 'NVMe SSD', 'Snapshots', '99.9% Uptime'],
    popular: false,
  },
  {
    id: 'dedicated',
    title: 'Dedicated Servers',
    description: 'Raw power with complete hardware control',
    icon: Cpu,
    color: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'border-purple-500/30',
    iconColor: 'text-purple-500',
    to: '/pricing/dedicated',
    features: ['Full Hardware', 'IPMI Access', 'Custom OS', 'No Limits'],
    popular: false,
  },
  {
    id: 'webhost',
    title: 'Web Hosting',
    description: 'WordPress, Node.js, and custom applications',
    icon: Globe,
    color: 'from-orange-500/20 to-red-500/20',
    borderColor: 'border-orange-500/30',
    iconColor: 'text-orange-500',
    to: '/pricing/webhost',
    features: [
      'Free SSL',
      'Daily Backups',
      'CDN Included',
      'One-Click Install',
    ],
    popular: false,
  },
  {
    id: 'vds',
    title: 'VDS Hosting',
    description: 'Virtual dedicated resources with premium isolation',
    icon: HardDrive,
    color: 'from-teal-500/20 to-cyan-500/20',
    borderColor: 'border-teal-500/30',
    iconColor: 'text-teal-500',
    to: '/pricing/vds',
    features: [
      'Dedicated CPU',
      'Full Isolation',
      'NVMe Storage',
      'High Performance',
    ],
    popular: false,
  },
  {
    id: 'discord',
    title: 'Discord Bot Hosting',
    description: 'Keep your bots online 24/7 with auto-restart',
    icon: Bot,
    color: 'from-indigo-500/20 to-violet-500/20',
    borderColor: 'border-indigo-500/30',
    iconColor: 'text-indigo-500',
    to: '/pricing/discord-bot',
    features: ['24/7 Online', 'Auto-Restart', 'Node.js/Python', 'Monitoring'],
    popular: false,
  },
  {
    id: 'game',
    title: 'Game Servers',
    description: 'FiveM, Rust, ARK, Terraria and more game servers',
    icon: Gamepad2,
    color: 'from-pink-500/20 to-rose-500/20',
    borderColor: 'border-pink-500/30',
    iconColor: 'text-pink-500',
    to: '/plans',
    features: [
      'Instant Deploy',
      'Multiple Games',
      'Mod Support',
      'Auto Updates',
    ],
    popular: false,
  },
  {
    id: 'protection',
    title: 'DDoS Protection',
    description: 'Enterprise-grade protection with real-time mitigation',
    icon: Shield,
    color: 'from-yellow-500/20 to-amber-500/20',
    borderColor: 'border-yellow-500/30',
    iconColor: 'text-yellow-500',
    to: '/pricing/protection',
    features: ['Layer 3-7', 'Real-Time', 'Zero Downtime', 'Advanced Filtering'],
    popular: false,
  },
]

function PricingIndexPage() {
  const navigate = useNavigate()

  return (
    <div className="w-full px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Card
                key={category.id}
                // bg-gradient-to-br ${category.color}
              // bg-gradient-to-br ${category.color}
                className={`
                  relative overflow-hidden cursor-pointer group
                  border-2
                  bg-card
                  hover:scale-[1.02] transition-all duration-300
                  hover:shadow-2xl hover:shadow-primary/10
                `}
                onClick={() => navigate({ to: category.to })}
              >
                {category.popular && (
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-primary/90 text-primary-foreground border-0">
                      Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="pb-3">
                  <div
                    className={`w-12 h-12 rounded-xl bg-background/50 backdrop-blur-sm flex items-center justify-center mb-3 border ${category.borderColor}`}
                  >
                    <Icon className={`w-6 h-6 ${category.iconColor}`} />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <CardDescription className="text-xs leading-relaxed">
                    {category.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {category.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs text-muted-foreground"
                      >
                        <Zap className="w-3 h-3 text-primary shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-border/50">
                    <span className="text-xs font-medium text-muted-foreground">
                      View Plans
                    </span>
                    <ArrowRight
                      className={`w-4 h-4 ${category.iconColor} group-hover:translate-x-1 transition-transform`}
                    />
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
