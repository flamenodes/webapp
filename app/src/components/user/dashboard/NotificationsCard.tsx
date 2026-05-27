import { notifications } from '#/data/dashboard/dashboardData'

export function NotificationsCard() {
  const unreadCount = notifications.filter((n) => n.unread).length

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
        <button className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded">
          Mark read
        </button>
      </div>

      <div className="flex flex-col px-4 py-1">
        {notifications.slice(0, 4).map((item, i) => (
          <div
            key={item.id}
            className={`flex items-center justify-between py-2.5 ${i < 3 ? 'border-b border-border' : ''}`}
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${item.unread ? 'bg-primary' : 'bg-border'}`} />
              <span className={`text-xs truncate ${item.unread ? 'font-semibold text-foreground' : 'text-muted-foreground'}`}>
                {item.title}
              </span>
            </div>
            <span className="text-[10px] text-muted-foreground shrink-0 ml-3">{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
