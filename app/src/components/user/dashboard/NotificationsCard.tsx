import { useQuery } from '@tanstack/react-query'
import { getUserNotifications } from '@/serverActions/user/dashboard.api'
import { Loader2 } from 'lucide-react'
import { formatDistanceToNow } from '@/lib/date-utils'

export function NotificationsCard() {
  const { data: notifications = [], isLoading } = useQuery({
    queryKey: ['user-notifications'],
    queryFn: () => getUserNotifications(),
  })

  const unreadCount = notifications.filter((n) => !n.read).length

  return (
    <div className="flex flex-col rounded-2xl border border-border bg-card overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-border">
        <div className="flex items-center gap-2">
          <h2 className="text-sm font-semibold">Notifications</h2>
          {unreadCount > 0 && (
            <span className="flex items-center justify-center w-4 h-4 rounded-full bg-primary text-primary-foreground text-[9px] font-bold">
              {unreadCount}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col px-4 py-1">
        {isLoading ? (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
          </div>
        ) : notifications.length === 0 ? (
          <div className="flex items-center justify-center py-8">
            <p className="text-xs text-muted-foreground">No notifications</p>
          </div>
        ) : (
          notifications.slice(0, 5).map((item, i) => (
            <div
              key={item.id}
              className={`flex items-center justify-between py-2.5 ${i < Math.min(notifications.length, 5) - 1 ? 'border-b border-border' : ''}`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${!item.read ? 'bg-primary' : 'bg-border'}`} />
                <div className="min-w-0">
                  <p className={`text-xs truncate ${!item.read ? 'font-semibold text-foreground' : 'text-muted-foreground'}`}>
                    {item.title}
                  </p>
                  <p className="text-[10px] text-muted-foreground truncate">{item.message}</p>
                </div>
              </div>
              <span className="text-[10px] text-muted-foreground shrink-0 ml-3">
                {formatDistanceToNow(new Date(item.timestamp), { addSuffix: true })}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
