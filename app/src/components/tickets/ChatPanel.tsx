import { ScrollArea } from '@/components/ui/scroll-area'
import { ChatTopBar } from '@/components/tickets/ChatTopBar'
import { ChatMessage } from '@/components/tickets/ChatMessage'
import { ChatComposer } from '@/components/tickets/ChatComposer'
import { Marker, MarkerContent } from '@/components/ui/marker'
import {
  getTicket,
  sendTicketMessage,
  updateTicket,
  deleteTicket,
} from '@/serverActions/tickets/tickets.api'
import { sendAiReply } from '@/serverActions/tickets/ai-support.api'
import {
  useSuspenseQuery,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { toast } from 'sonner'
import { useTicketSocket } from '@/lib/socket/useTicketSocket'
import { getSession } from '@/handlers/auth.handler'
import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Trash2 } from 'lucide-react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'

interface ChatPanelProps {
  ticketId: string
  isStaffView?: boolean
}

export function ChatPanel({ ticketId, isStaffView = false }: ChatPanelProps) {
  const queryClient = useQueryClient()
  const { data: sessionData } = useSuspenseQuery({
    queryKey: ['session'],
    queryFn: getSession,
  })

  const { typing, stopTyping } = useTicketSocket(ticketId, sessionData?.user?.id)

  const { data } = useSuspenseQuery({
    queryKey: ['ticket', ticketId],
    queryFn: () => getTicket({ data: { ticketId } }),
  })

  const [someoneTyping, setSomeoneTyping] = useState(false)
  const typingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onTyping = (e: Event) => {
      const detail = (e as CustomEvent).detail
      if (detail.ticketId !== ticketId) return
      if (detail.userId === sessionData?.user?.id) return
      setSomeoneTyping(true)
      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current)
      typingTimeoutRef.current = setTimeout(() => setSomeoneTyping(false), 3000)
    }
    const onStopTyping = (e: Event) => {
      const detail = (e as CustomEvent).detail
      if (detail.ticketId !== ticketId) return
      if (detail.userId === sessionData?.user?.id) return
      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current)
      setSomeoneTyping(false)
    }
    window.addEventListener('ticket:typing', onTyping)
    window.addEventListener('ticket:stop-typing', onStopTyping)
    return () => {
      window.removeEventListener('ticket:typing', onTyping)
      window.removeEventListener('ticket:stop-typing', onStopTyping)
      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current)
    }
  }, [ticketId, sessionData?.user?.id])

  const sendMessage = useMutation({
    mutationFn: (content: string) =>
      sendTicketMessage({ data: { ticketId, content } }),

    async onMutate(content) {
      await queryClient.cancelQueries({ queryKey: ['ticket', ticketId] })

      const previousTicket = queryClient.getQueryData(['ticket', ticketId])

      const optimisticMessage = {
        id: `temp-${Date.now()}`,
        content,
        senderRole: isStaffView ? 'STAFF' : 'USER',
        senderId: sessionData?.user?.id,
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
      queryClient.invalidateQueries({ queryKey: ['ticket', ticketId] })
      queryClient.invalidateQueries({ queryKey: ['tickets'] })
      // Trigger AI reply for user messages
      if (!isStaffView) {
        sendAiReply({ data: { ticketId } }).then(() => {
          queryClient.invalidateQueries({ queryKey: ['ticket', ticketId] })
        }).catch(() => {})
      }
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

  const closeTicket = useMutation({
    mutationFn: () => updateTicket({ data: { ticketId, status: 'CLOSED' } }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ticket', ticketId] })
      queryClient.invalidateQueries({ queryKey: ['tickets'] })
      toast.success('Ticket closed')
    },
    onError: () => toast.error('Failed to close ticket'),
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

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)

  const deleteTicketMutation = useMutation({
    mutationFn: () => deleteTicket({ data: { ticketId } }),
    onSuccess: (result) => {
      if (result?.deleted) {
        queryClient.invalidateQueries({ queryKey: ['tickets'] })
        toast.success('Ticket deleted')
      } else if (result?.requested) {
        queryClient.invalidateQueries({ queryKey: ['ticket', ticketId] })
        toast.info('Deletion requested — an owner must approve')
      }
    },
    onError: () => toast.error('Failed to process deletion request'),
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
    console.log('[ChatPanel] messages:', ticket.messages)
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [ticket.messages, someoneTyping])


  const currentUserId = sessionData?.user.id
  const isAssigned = ticket.assignedToId === currentUserId
  const userRole = (sessionData?.user as any)?.role ?? ''
  const canDelete = isStaffView && ticket.status === 'CLOSED' && (userRole === 'owner' || userRole === 'admin')

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
        onClose={() => closeTicket.mutate()}
        showResolveButton={isStaffView}
        showJoinButton={isStaffView}
        showCloseButton={isStaffView ? isAssigned : ticket.status !== 'CLOSED'}
      />

      {canDelete && (
        <div className="px-4 py-2 border-b flex items-center justify-between bg-destructive/5">
          <span className="text-xs text-muted-foreground">
            {userRole === 'owner' ? 'This closed ticket can be permanently deleted.' : 'You can request deletion of this closed ticket (requires owner approval).'}
          </span>
          <Button
            size="sm"
            variant="destructive"
            className="h-7 text-xs"
            onClick={() => setShowDeleteConfirm(true)}
            disabled={deleteTicketMutation.isPending}
          >
            <Trash2 className="w-3 h-3 mr-1.5" />
            {userRole === 'owner' ? 'Delete Ticket' : 'Request Deletion'}
          </Button>
        </div>
      )}

      <AlertDialog open={showDeleteConfirm} onOpenChange={setShowDeleteConfirm}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {userRole === 'owner' ? 'Delete Ticket?' : 'Request Ticket Deletion?'}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {userRole === 'owner'
                ? 'This will permanently delete the ticket and all its messages. This cannot be undone.'
                : 'A deletion request will be sent. An owner must approve before the ticket is deleted.'}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick={() => {
                setShowDeleteConfirm(false)
                deleteTicketMutation.mutate()
              }}
            >
              {userRole === 'owner' ? 'Delete' : 'Request Deletion'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <ScrollArea className="flex-1 px-4 py-6 md:px-6 overflow-scroll">
        <div className="flex flex-col gap-6">
          <div className="flex justify-center">
            <span className="text-xs text-muted-foreground">
              {new Date(ticket.createdAt).toLocaleDateString()}
            </span>
          </div>

          {ticket.messages.map((message) => {
            const isOwn = message.senderId === currentUserId
            const senderInfo = isOwn
              ? (currentUserId === ticket.user.id ? ticket.user : ticket.assignedTo)
              : (message.senderRole === 'USER' ? ticket.user : ticket.assignedTo)
            return (
              <ChatMessage
                key={message.id}
                message={{
                  id: message.id,
                  type: isOwn ? 'outgoing' : 'incoming',
                  content: message.content,
                  timestamp: new Date(message.createdAt).toLocaleTimeString(),
                  sender: {
                    name: senderInfo?.name || 'Unknown',
                    avatar: senderInfo?.image || senderInfo?.name.substring(0, 2).toUpperCase() || 'UN',
                  },
                }}
              />
            )
          })}

          {someoneTyping && (
            <Marker role="status">
              <MarkerContent className="shimmer">typing...</MarkerContent>
            </Marker>
          )}
        </div>
        <div ref={bottomRef}/>
      </ScrollArea>

      <ChatComposer
        onSend={(content) => sendMessage.mutate(content)}
        onTyping={typing}
        onStopTyping={stopTyping}
        disabled={isStaffView && !isAssigned}
      />
    </div>
  )
}
