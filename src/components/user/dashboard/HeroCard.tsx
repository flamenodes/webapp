import { Flame, Hash, ShieldCheck, MapPin, Clock } from 'lucide-react'
import { heroMeta } from '#/data/dashboard/dashboardData'

const META_ICONS: Record<string, React.ElementType> = {
  Hash,
  ShieldCheck,
  MapPin,
  Clock,
}

export function HeroCard({
  username,
  avatar,
}: {
  username?: string
  avatar: any
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-card flex flex-col justify-between p-5 md:p-6">
      <div className="pointer-events-none absolute -top-16 -right-16 w-64 h-64 rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Top row */}
      <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div className="relative shrink-0">
            <div className="w-14 h-14 rounded-full bg-primary/15 border border-primary/25 flex items-center justify-center shadow-[0_0_20px_var(--primary)/20]">
              <img src={avatar} sizes="24" />
            </div>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-success border-2 border-card" />
          </div>

          <div className="min-w-0">
            <p className="text-xs text-muted-foreground">Welcome back,</p>
            <h1 className="text-xl md:text-2xl font-bold tracking-tight leading-tight mt-0.5">
              {username}
            </h1>
            <p className="text-xs text-muted-foreground mt-0.5">
              Infrastructure running smoothly across all regions.
            </p>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-1.5 rounded-full border border-success/30 bg-success/10 px-3 py-1.5 shrink-0 self-start">
          <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
          <span className="text-xs font-semibold text-success">
            All Systems Operational
          </span>
        </div>
      </div>

      {/* Meta row */}
      <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5 pt-4 border-t border-border">
        {heroMeta.map(({ icon, label, value }) => {
          const Icon = META_ICONS[icon] ?? Hash
          return (
            <div key={label} className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Icon size={14} className="text-primary" strokeWidth={1.75} />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] text-muted-foreground uppercase tracking-wide">
                  {label}
                </p>
                <p className="text-sm font-semibold leading-tight truncate">
                  {value}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
