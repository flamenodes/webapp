import { useEffect } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { io, Socket } from 'socket.io-client'

let socket: Socket | null = null

export function useTicketSocket(ticketId?: string) {
  const queryClient = useQueryClient()

  useEffect(() => {
    if (!ticketId) return

    if (!socket) {
      const socketUrl = import.meta.env.VITE_SOCKET_URL || 'http://localhost:4000'
      socket = io(socketUrl, {
        transports: ['websocket', 'polling'],
      })
    }

    const handleNewMessage = (data: any) => {
      if (data.ticketId === ticketId) {
        queryClient.invalidateQueries({ queryKey: ['ticket', ticketId] })
        queryClient.invalidateQueries({ queryKey: ['tickets'] })
      }
    }

    const handleTicketUpdated = (data: any) => {
      if (data.ticketId === ticketId) {
        queryClient.invalidateQueries({ queryKey: ['ticket', ticketId] })
        queryClient.invalidateQueries({ queryKey: ['tickets'] })
      }
    }

    socket.on('ticket:new-message', handleNewMessage)
    socket.on('ticket:updated', handleTicketUpdated)

    return () => {
      socket?.off('ticket:new-message', handleNewMessage)
      socket?.off('ticket:updated', handleTicketUpdated)
    }
  }, [ticketId, queryClient])
}
