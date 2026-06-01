import { useEffect, useCallback } from 'react'
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import { getUserNotifications, markNotificationRead, markAllNotificationsRead } from '@/serverActions/user/dashboard.api'
import { getSocket } from '@/socket/config'
import { showBrowserNotification, requestNotificationPermission } from '@/lib/browser-notifications'
import { toast } from 'sonner'

export function useNotifications(userId?: string) {
  const queryClient = useQueryClient()
  
  const { data: notifications = [], isLoading } = useQuery({
    queryKey: ['user-notifications'],
    queryFn: () => getUserNotifications(),
    enabled: !!userId,
    refetchInterval: 60000, // Refetch every minute as fallback
  })

  const markReadMutation = useMutation({
    mutationFn: (id: string) => markNotificationRead({ data: { id } }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-notifications'] })
    },
  })

  const markAllReadMutation = useMutation({
    mutationFn: () => markAllNotificationsRead(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-notifications'] })
      toast.success('All notifications marked as read')
    },
  })

  const handleNewNotification = useCallback((notification: any) => {
    // Update query cache
    queryClient.setQueryData(['user-notifications'], (old: any[] = []) => {
      return [notification, ...old]
    })

    // Show browser notification
    showBrowserNotification(notification.title, {
      body: notification.message,
      tag: notification.id,
      requireInteraction: false,
    })

    // Show toast notification
    toast(notification.title, {
      description: notification.message,
      duration: 5000,
    })
  }, [queryClient])

  useEffect(() => {
    if (!userId) return

    const socket = getSocket()

    // Join user room
    socket.emit('join:user', userId)

    // Listen for notifications
    socket.on('notification', handleNewNotification)

    // Request notification permission on mount
    requestNotificationPermission()

    return () => {
      socket.off('notification', handleNewNotification)
      socket.emit('leave:user', userId)
    }
  }, [userId, handleNewNotification])

  const unreadCount = notifications.filter((n: any) => !n.read).length

  return {
    notifications,
    isLoading,
    unreadCount,
    markAsRead: (id: string) => markReadMutation.mutate(id),
    markAllAsRead: () => markAllReadMutation.mutate(),
    isMarkingRead: markReadMutation.isPending || markAllReadMutation.isPending,
  }
}
