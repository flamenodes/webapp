import { ScrollArea } from '@/components/ui/scroll-area'
import { ChatTopBar } from '@/components/tickets/ChatTopBar'
import { ChatMessage } from '@/components/tickets/ChatMessage'
import { ChatComposer } from '@/components/tickets/ChatComposer'
import {
  getTicket,
  sendTicketMessage,
  updateTicket,
} from '@/serverActions/tickets/tickets.api'
import {
  useSuspenseQuery,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { toast } from 'sonner'
import { useTicketSocket } from '@/lib/socket/useTicketSocket'
import { getSession } from '@/handlers/auth.handler'
import { useEffect, useRef } from 'react'

interface ChatPanelProps {
  ticketId: string
  isStaffView?: boolean
}

export function ChatPanel({ ticketId, isStaffView = false }: ChatPanelProps) {
  const queryClient = useQueryClient()
  useTicketSocket(ticketId)

  const { data } = useSuspenseQuery({
    queryKey: ['ticket', ticketId],
    queryFn: () => getTicket({ data: { ticketId } }),
  })

  const { data: sessionData } = useSuspenseQuery({
    queryKey: ['session'],
    queryFn: getSession,
  })

  const sendMessage = useMutation({
    mutationFn: (content: string) =>
      sendTicketMessage({ data: { ticketId, content } }),

    async onMutate(content) {
      await queryClient.cancelQueries({
        queryKey: ['ticket', ticketId],
      })

      const previousTicket = queryClient.getQueryData(['ticket', ticketId])

      const optimisticMessage = {
        id: `temp-${Date.now()}`,
        content,
        senderRole: isStaffView ? 'STAFF' : 'USER',
        createdAt: new Date().toISOString(),
        optimistic: true,
      }

      queryClient.setQueryData(['ticket', ticketId], (old: any) => {
        if (!old?.ticket) return old

        return {
          ...old,
          ticket: {
            ...old.ticket,
            messages: [...old.ticket.messages, optimisticMessage],
          },
        }
      })

      return { previousTicket }
    },

    onError: (_err, _content, context) => {
      if (context?.previousTicket) {
        queryClient.setQueryData(['ticket', ticketId], context.previousTicket)
      }

      toast.error('Failed to send message')
    },

    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ['ticket', ticketId],
      })

      queryClient.invalidateQueries({
        queryKey: ['tickets'],
      })
    },
  })

  const resolveTicket = useMutation({
    mutationFn: () => updateTicket({ data: { ticketId, status: 'RESOLVED' } }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ticket', ticketId] })
      queryClient.invalidateQueries({ queryKey: ['tickets'] })
      toast.success('Ticket resolved')
    },
    onError: () => toast.error('Failed to resolve ticket'),
  })

  const joinTicket = useMutation({
    mutationFn: () =>
      updateTicket({ data: { ticketId, assignedToId: sessionData?.user.id } }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ticket', ticketId] })
      queryClient.invalidateQueries({ queryKey: ['tickets'] })
      toast.success('Joined ticket')
    },
    onError: () => toast.error('Failed to join ticket'),
  })

  const bottomRef = useRef<HTMLDivElement>(null)

  if (!data?.ticket) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-sm text-muted-foreground">Ticket not found</p>
      </div>
    )
  }

  const ticket = data.ticket

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: 'smooth',
    })
  }, [ticket.messages])


  const currentUserId = sessionData?.user.id
  const isAssigned = ticket.assignedToId === currentUserId

  return (
    <div className="flex h-full flex-col bg-background">
      <ChatTopBar
        ticketId={ticket.ticketId}
        ticketTitle={ticket.title}
        userName={ticket.user.name}
        userAvatar={ticket.user.name.substring(0, 2).toUpperCase()}
        userImage={ticket.user.image}
        assignedToAvatar={ticket.assignedTo?.name.substring(0, 2).toUpperCase()}
        assignedToImage={ticket.assignedTo?.image}
        status={ticket.status.toLowerCase() as any}
        isAssigned={isAssigned}
        onJoin={() => joinTicket.mutate()}
        onResolve={() => resolveTicket.mutate()}
        showResolveButton={isStaffView}
        showJoinButton={isStaffView}
      />

      <ScrollArea className="flex-1 px-4 py-6 md:px-6 overflow-scroll">
        <div className="flex flex-col gap-6">
          <div className="flex justify-center">
            <span className="text-xs text-muted-foreground">
              {new Date(ticket.createdAt).toLocaleDateString()}
            </span>
          </div>

          {ticket.messages.map((message) => {
            const senderInfo = message.senderRole === 'USER' ? ticket.user : ticket.assignedTo
            return (
              <ChatMessage
                key={message.id}
                message={{
                  id: message.id,
                  type: message.senderRole === 'USER' ? 'incoming' : 'outgoing',
                  content: message.content,
                  timestamp: new Date(message.createdAt).toLocaleTimeString(),
                  sender: {
                    name: senderInfo?.name || 'Unknown',
                    avatar: senderInfo?.image || senderInfo?.name?.substring(0, 2).toUpperCase() || 'UN',
                  },
                }}
              />
            )
          })}
        </div>
        <div ref={bottomRef}/>
      </ScrollArea>

      <ChatComposer
        onSend={(content) => sendMessage.mutate(content)}
        disabled={isStaffView && !isAssigned}
      />
    </div>
  )
}
