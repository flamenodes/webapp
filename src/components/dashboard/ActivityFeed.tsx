import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import { Badge } from '#/components/ui/badge'
import { recentActivity } from '#/data/dashboard/mockData'
import { AlertTriangle, CreditCard, Settings, Plus } from 'lucide-react'

const typeConfig = {
  new: { icon: Plus, color: 'text-success', bg: 'bg-success/10' },
  warning: { icon: AlertTriangle, color: 'text-warning', bg: 'bg-warning/10' },
  payment: { icon: CreditCard, color: 'text-info', bg: 'bg-info/10' },
  system: { icon: Settings, color: 'text-muted-foreground', bg: 'bg-muted' },
}

const badgeVariantMap: Record<string, 'default' | 'secondary' | 'destructive' | 'outline'> = {
  Deployed: 'default',
  Warning: 'destructive',
  Payment: 'secondary',
  System: 'outline',
  New: 'default',
  Alert: 'destructive',
}

export function ActivityFeed() {
  return (
    <Card className="border-border bg-card">
      <CardHeader className="pb-2 px-5 pt-5">
        <CardTitle className="text-sm font-semibold text-foreground">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="px-5 pb-5">
        <div className="flex flex-col gap-3">
          {recentActivity.map((item) => {
            const cfg = typeConfig[item.type as keyof typeof typeConfig] || typeConfig.system
            const Icon = cfg.icon
            return (
              <div key={item.id} className="flex items-center gap-3 group">
                <div className={`rounded-lg p-2 shrink-0 ${cfg.bg}`}>
                  <Icon className={`w-3.5 h-3.5 ${cfg.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{item.message}</p>
                  <p className="text-xs text-muted-foreground truncate">{item.detail}</p>
                </div>
                <div className="flex flex-col items-end gap-1 shrink-0">
                  <Badge variant={badgeVariantMap[item.badge] ?? 'outline'} className="text-xs">
                    {item.badge}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{item.time}</span>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
