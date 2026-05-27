import * as LucideIcons from 'lucide-react'
import { TrendingUp, TrendingDown, Minus } from 'lucide-react'
import { Card, CardContent } from '#/components/ui/card'
import { Button } from '#/components/ui/button'

interface StatCardProps {
  icon: string
  label: string
  value: string
  change: string
  trend: 'up' | 'down' | 'stable' | 'warning'
  sparkline?: number[] | null
  progress?: number | null
  action?: string | null
}

const trendStyles = {
  up:      { text: 'text-emerald-400', icon: TrendingUp },
  down:    { text: 'text-destructive',  icon: TrendingDown },
  stable:  { text: 'text-muted-foreground', icon: Minus },
  warning: { text: 'text-warning',      icon: Minus },
}

function Sparkline({ data }: { data: number[] }) {
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1
  const w = 100
  const h = 32
  const pts = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * w
      const y = h - ((v - min) / range) * h
      return `${x},${y}`
    })
    .join(' ')

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-8" preserveAspectRatio="none">
      <defs>
        <linearGradient id="sg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.25" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline
        points={pts}
        fill="none"
        stroke="var(--primary)"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  )
}

function ProgressBar({ value }: { value: number }) {
  return (
    <div className="w-full h-1 rounded-full bg-muted overflow-hidden">
      <div
        className="h-full rounded-full bg-primary shadow-[0_0_6px_var(--primary)] transition-all duration-700"
        style={{ width: `${value}%` }}
      />
    </div>
  )
}

export function StatCard({ icon, label, value, change, trend, sparkline, progress, action }: StatCardProps) {
  const Icon = (LucideIcons as any)[icon] ?? LucideIcons.Activity
  const { text: trendText, icon: TrendIcon } = trendStyles[trend]

  return (
    <Card className="relative overflow-hidden gap-0 py-0 bg-card border-border hover:border-primary/25 hover:-translate-y-1 transition-all duration-300 group">
      {/* subtle top-left glow */}
      <div className="pointer-events-none absolute -top-6 -left-6 w-24 h-24 rounded-full bg-primary/8 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <CardContent className="p-5 flex flex-col gap-3">
        {/* Top: icon badge + label */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="rounded-lg bg-primary/10 p-2 shadow-[0_0_12px_rgba(255,45,117,0.15)]">
              <Icon className="w-4 h-4 text-primary" />
            </div>
            <span className="text-xs font-medium text-muted-foreground">{label}</span>
          </div>
          <TrendIcon className={`w-3.5 h-3.5 shrink-0 ${trendText}`} />
        </div>

        {/* Middle: value */}
        <p className="text-2xl font-bold tracking-tight leading-none">{value}</p>

        {/* Bottom: sparkline or progress, then change text + optional action */}
        <div className="flex flex-col gap-2">
          {sparkline && sparkline.length > 0 && <Sparkline data={sparkline} />}
          {progress != null && <ProgressBar value={progress} />}

          <div className="flex items-center justify-between gap-2">
            <span className={`text-xs font-medium ${trendText}`}>{change}</span>
            {action && (
              <Button
                variant="outline"
                size="xs"
                className="h-6 px-2 text-xs border-border text-muted-foreground hover:text-foreground hover:border-primary/40 shrink-0"
              >
                {action}
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
