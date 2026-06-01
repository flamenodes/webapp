import { useEffect, useCallback } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getActiveAnnouncements } from '@/serverActions/notifications.api'
import { getSocket } from '@/socket/config'
import { toast } from 'sonner'

export function useAnnouncements() {
  const queryClient = useQueryClient()
  
  const { data: announcements = [], isLoading } = useQuery({
    queryKey: ['active-announcements'],
    queryFn: () => getActiveAnnouncements(),
    refetchInterval: 300000, // Refetch every 5 minutes as fallback
  })

  const handleNewAnnouncement = useCallback((announcement: any) => {
    // Update query cache
    queryClient.setQueryData(['active-announcements'], (old: any[] = []) => {
      // Check if announcement already exists
      const exists = old.some((a: any) => a.id === announcement.id)
      if (exists) {
        return old.map((a: any) => a.id === announcement.id ? announcement : a)
      }
      return [announcement, ...old]
    })

    // Show toast for new announcements
    const toastVariant = announcement.type === 'ERROR' ? 'destructive' : 'default'
    toast(announcement.title, {
      description: announcement.message,
      duration: 10000,
    })
  }, [queryClient])

  useEffect(() => {
    const socket = getSocket()

    // Listen for announcements
    socket.on('announcement', handleNewAnnouncement)

    return () => {
      socket.off('announcement', handleNewAnnouncement)
    }
  }, [handleNewAnnouncement])

  return {
    announcements,
    isLoading,
  }
}
