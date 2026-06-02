import { useState } from 'react'
import { Bell, Check, CheckCheck, Trash2, ExternalLink } from 'lucide-react'
import { Button } from '#/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '#/components/ui/dropdown-menu'
import { ScrollArea } from '#/components/ui/scroll-area'
import { useNotifications } from '#/hooks/useNotifications'
import { useNavigate } from '@tanstack/react-router'
import { cn } from '#/lib/utils'

const notificationTypeColors = {
  info: 'bg-blue-500/10 text-blue-500',
  success: 'bg-green-500/10 text-green-500',
  warning: 'bg-yellow-500/10 text-yellow-500',
  error: 'bg-red-500/10 text-red-500',
}

const notificationTypeIcons = {
  info: '💡',
  success: '✅',
  warning: '⚠️',
  error: '❌',
}

interface NotificationDropdownProps {
  userId?: string
}

export function NotificationDropdown({ userId }: NotificationDropdownProps) {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const { notifications, unreadCount, markAsRead, markAllAsRead, isMarkingRead } = useNotifications(userId)

  const handleNotificationClick = (notification: any) => {
    if (!notification.read) {
      markAsRead(notification.id)
    }
    if (notification.link) {
      navigate({ to: notification.link as any })
    }
    setOpen(false)
  }

  const getTimeAgo = (date: string) => {
    const now = new Date()
    const notifDate = new Date(date)
    const diff = Math.floor((now.getTime() - notifDate.getTime()) / 1000)

    if (diff < 60) return 'Just now'
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`
    if (diff < 604800) return `${Math.floor(diff / 86400)}d ago`
    return notifDate.toLocaleDateString()
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon-sm"
          className="text-muted-foreground hover:text-foreground relative"
        >
          <Bell className="w-5 h-5" />
          {unreadCount > 0 && (
            <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
              {unreadCount > 9 ? '9+' : unreadCount}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-96">
        <div className="flex items-center justify-between px-3 py-2 border-b">
          <h3 className="text-sm font-semibold">Notifications</h3>
          {unreadCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              className="h-7 text-xs"
              onClick={() => markAllAsRead()}
              disabled={isMarkingRead}
            >
              <CheckCheck className="w-3 h-3 mr-1" />
              Mark all read
            </Button>
          )}
        </div>

        <ScrollArea className="h-[400px]">
          {notifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Bell className="w-12 h-12 text-muted-foreground/50 mb-3" />
              <p className="text-sm text-muted-foreground">No notifications yet</p>
              <p className="text-xs text-muted-foreground/60 mt-1">
                We'll notify you when something happens
              </p>
            </div>
          ) : (
            <div className="py-1">
              {notifications.map((notification: any) => (
                <div
                  key={notification.id}
                  className={cn(
                    'relative px-3 py-3 hover:bg-accent/50 transition-colors cursor-pointer border-b last:border-b-0',
                    !notification.read && 'bg-primary/5'
                  )}
                  onClick={() => handleNotificationClick(notification)}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={cn(
                        'w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-sm',
                        notificationTypeColors[notification.type as keyof typeof notificationTypeColors] ||
                          notificationTypeColors.info
                      )}
                    >
                      {notificationTypeIcons[notification.type as keyof typeof notificationTypeIcons] || '💡'}
                    </div>

                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-sm font-medium leading-tight">{notification.title}</p>
                        {!notification.read && (
                          <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-1" />
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground leading-snug">
                        {notification.message}
                      </p>
                      <div className="flex items-center gap-2 text-[10px] text-muted-foreground/60">
                        <span>{getTimeAgo(notification.createdAt)}</span>
                        {notification.link && (
                          <>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <ExternalLink className="w-2.5 h-2.5" />
                              View details
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>

        {notifications.length > 0 && (
          <>
            <DropdownMenuSeparator />
            <div className="px-2 py-2">
              <Button
                variant="ghost"
                size="sm"
                className="w-full h-8 text-xs"
                onClick={() => {
                  navigate({ to: '/user/notifications' as any })
                  setOpen(false)
                }}
              >
                View all notifications
              </Button>
            </div>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
