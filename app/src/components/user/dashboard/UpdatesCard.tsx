import { useQuery } from '@tanstack/react-query'
import { getUserStats } from '@/serverActions/user/dashboard.api'
import { Loader2, TrendingUp, Server, ShoppingCart, Clock } from 'lucide-react'

export function UpdatesCard() {
  const { data: stats, isLoading } = useQuery({
    queryKey: ['user-stats'],
    queryFn: () => getUserStats(),
  })

  const updates = stats ? [
    {
      id: 'total-servers',
      icon: Server,
      title: 'Total Servers',
      value: stats.totalServers,
      color: 'text-primary',
    },
    {
      id: 'active-servers',
      icon: TrendingUp,
      title: 'Active Servers',
      value: stats.activeServers,
      color: 'text-success',
    },
    {
      id: 'total-orders',
      icon: ShoppingCart,
      title: 'Total Orders',
      value: stats.totalOrders,
      color: 'text-blue-500',
    },
    {
      id: 'pending-orders',
      icon: Clock,
      title: 'Pending Orders',
      value: stats.pendingOrders,
      color: 'text-warning',
    },
  ] : []

  return (
    <div className="flex flex-col rounded-2xl border border-border bg-card overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-border">
        <h2 className="text-sm font-semibold">Quick Stats</h2>
      </div>

      <div className="flex flex-col px-4 py-1">
        {isLoading ? (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
          </div>
        ) : (
          updates.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={item.id}
                className={`flex items-center justify-between py-2.5 ${i < updates.length - 1 ? 'border-b border-border' : ''}`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <Icon className={`w-3.5 h-3.5 shrink-0 ${item.color}`} />
                  <span className="text-xs text-foreground truncate">{item.title}</span>
                </div>
                <span className={`text-sm font-bold shrink-0 ml-3 ${item.color}`}>{item.value}</span>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}
