import { Badge } from '#/components/ui/badge'
import { Button } from '#/components/ui/button'
import { Input } from '#/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '#/components/ui/select'
import { Separator } from '#/components/ui/separator'
import { Textarea } from '#/components/ui/textarea'
import {
  getTicket,
  listSupportAgents,
  listTickets,
  sendTicketMessage,
  updateTicket,
} from '#/serverActions/tickets/tickets.api'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useTicketSocket } from '#/lib/socket/useTicketSocket'
import { useEffect, useMemo, useRef, useState } from 'react'
import { toast } from 'sonner'
import { priorityColor, statusColor } from './supportDeskColors'

type TicketListItem = Awaited<ReturnType<typeof listTickets>>['tickets'][number]
type TicketDetail = Awaited<ReturnType<typeof getTicket>>['ticket']

export function StaffSupportDesk() {
  const queryClient = useQueryClient()

  const [search, setSearch] = useState('')
  const [status, setStatus] = useState<string | undefined>()
  const [priority, setPriority] = useState<string | undefined>()
  const [channelName, setChannelName] = useState<string | undefined>()
  const [selectedTicketId, setSelectedTicketId] = useState<string | null>(null)
  const [typingUsers, setTypingUsers] = useState<Set<string>>(() => new Set())

  const listInput = useMemo(
    () => ({
      search: search.trim() || undefined,
      status: status as any,
      priority: priority as any,
      channelName: channelName?.trim() || undefined,
      take: 50,
      skip: 0,
    }),
    [search, status, priority, channelName],
  )

  const ticketsQuery = useQuery({
    queryKey: ['tickets', 'staff', listInput],
    queryFn: async () => {
      const res = await listTickets({ data: listInput as any })
      return res.tickets
    },
  })

  const ticketQuery = useQuery({
    queryKey: ['ticket', selectedTicketId],
    enabled: Boolean(selectedTicketId),
    queryFn: async () => {
      const res = await getTicket({
        data: { ticketId: selectedTicketId! },
      })
      return res.ticket
    },
  })

  const agentsQuery = useQuery({
    queryKey: ['ticket-agents'],
    queryFn: async () => {
      const res = await listSupportAgents()
      return res.users
    },
  })

  // Use the WebSocket hook for live updates
  useTicketSocket(selectedTicketId || undefined)

  // Listen for typing events
  useEffect(() => {
    const handleTyping = (event: CustomEvent) => {
      const { userId } = event.detail
      if (userId) {
        setTypingUsers((prev) => new Set(prev).add(userId))
      }
    }

    const handleStopTyping = (event: CustomEvent) => {
      const { userId } = event.detail
      if (userId) {
        setTypingUsers((prev) => {
          const next = new Set(prev)
          next.delete(userId)
          return next
        })
      }
    }

    window.addEventListener('ticket:typing', handleTyping as EventListener)
    window.addEventListener('ticket:stop-typing', handleStopTyping as EventListener)

    return () => {
      window.removeEventListener('ticket:typing', handleTyping as EventListener)
      window.removeEventListener('ticket:stop-typing', handleStopTyping as EventListener)
    }
  }, [])
      if (!payload?.userId) return
      setTypingUsers((prev) => {
        const next = new Set(prev)
        next.delete(payload.userId!)
        return next
      })
    }

    socket.on('new-message', onNewMessage)
    socket.on('ticket-updated', onTicketUpdated)
    socket.on('typing', onTyping)
    socket.on('stop-typing', onStopTyping)

    return () => {
      socket.off('new-message', onNewMessage)
      socket.off('ticket-updated', onTicketUpdated)
      socket.off('typing', onTyping)
      socket.off('stop-typing', onStopTyping)
      socket.emit('leave-ticket', { ticketId: selectedTicketId })
      setTypingUsers(new Set())
    }
  }, [queryClient, selectedTicketId])

  const [draft, setDraft] = useState('')
  const [sending, setSending] = useState(false)

  function emitTyping() {
    if (!selectedTicketId || !socketRef.current) return
    if (!isTypingRef.current) {
      isTypingRef.current = true
      socketRef.current.emit('typing', { ticketId: selectedTicketId })
    }
    if (typingStopTimerRef.current) window.clearTimeout(typingStopTimerRef.current)
    typingStopTimerRef.current = window.setTimeout(() => emitStopTyping(), 900)
  }

  function emitStopTyping() {
    if (!selectedTicketId || !socketRef.current) return
    if (typingStopTimerRef.current) {
      window.clearTimeout(typingStopTimerRef.current)
      typingStopTimerRef.current = null
    }
    if (isTypingRef.current) {
      isTypingRef.current = false
      socketRef.current.emit('stop-typing', { ticketId: selectedTicketId })
    }
  }

  async function handleSendMessage() {
    const content = draft.trim()
    if (!selectedTicketId || !content || sending) return
    setSending(true)
    try {
      await sendTicketMessage({ data: { ticketId: selectedTicketId, content } })
      setDraft('')
      emitStopTyping()
      queryClient.invalidateQueries({ queryKey: ['ticket', selectedTicketId] })
      queryClient.invalidateQueries({ queryKey: ['tickets'] })
    } catch (err: any) {
      toast.error(err?.message ? String(err.message) : 'Failed to send message')
    } finally {
      setSending(false)
    }
  }

  const ticket = ticketQuery.data as TicketDetail | undefined
  const tickets = (ticketsQuery.data ?? []) as TicketListItem[]

  const [updating, setUpdating] = useState(false)
  async function staffUpdate(patch: Partial<{ status: string; priority: string; channelName: string; tags: string[]; assignedToId: string | null }>) {
    if (!ticket || updating) return
    setUpdating(true)
    try {
      await updateTicket({ data: { ticketId: ticket.ticketId, ...patch } as any })
      queryClient.invalidateQueries({ queryKey: ['ticket', selectedTicketId] })
      queryClient.invalidateQueries({ queryKey: ['tickets'] })
    } catch (err: any) {
      toast.error(err?.message ? String(err.message) : 'Failed to update ticket')
    } finally {
      setUpdating(false)
    }
  }

  // Staff UI is intentionally kept close to the previous SupportDesk implementation.
  // (User UI is now in a separate component.)
  return (
    <div className="flex h-[calc(100vh-5rem)] min-h-[640px] w-full overflow-hidden rounded-2xl border border-border/60 bg-background/40 backdrop-blur">
      <aside className="w-[360px] shrink-0 border-r border-border/60 bg-background/40 backdrop-blur">
        <div className="p-5 space-y-4">
          <div className="flex items-center justify-between gap-2">
            <div className="min-w-0">
              <div className="text-base font-semibold">Tickets</div>
              <div className="text-sm text-muted-foreground">Support inbox</div>
            </div>
          </div>

          <div className="space-y-2">
            <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by title or ID…" />
            <div className="grid grid-cols-3 gap-2">
              <Select value={status ?? 'ALL'} onValueChange={(v) => setStatus(v === 'ALL' ? undefined : v)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ALL">All</SelectItem>
                  <SelectItem value="OPEN">Open</SelectItem>
                  <SelectItem value="PENDING">Pending</SelectItem>
                  <SelectItem value="IN_PROGRESS">In progress</SelectItem>
                  <SelectItem value="RESOLVED">Resolved</SelectItem>
                  <SelectItem value="CLOSED">Closed</SelectItem>
                </SelectContent>
              </Select>
              <Select value={priority ?? 'ALL'} onValueChange={(v) => setPriority(v === 'ALL' ? undefined : v)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ALL">All</SelectItem>
                  <SelectItem value="LOW">Low</SelectItem>
                  <SelectItem value="MEDIUM">Medium</SelectItem>
                  <SelectItem value="HIGH">High</SelectItem>
                  <SelectItem value="URGENT">Urgent</SelectItem>
                </SelectContent>
              </Select>
              <Input value={channelName ?? ''} onChange={(e) => setChannelName(e.target.value)} placeholder="Channel" />
            </div>
          </div>
        </div>

        <Separator />

        <div className="h-[calc(100%-180px)] overflow-auto">
          {tickets.map((t) => (
            <button
              key={t.ticketId}
              className={[
                'w-full text-left px-5 py-4 border-b border-border/40 hover:bg-muted/30 transition-colors',
                selectedTicketId === t.ticketId ? 'bg-muted/40' : '',
              ].join(' ')}
              onClick={() => setSelectedTicketId(t.ticketId)}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="text-sm font-medium truncate">
                    {t.ticketId} • {t.title}
                  </div>
                  <div className="text-xs text-muted-foreground truncate">
                    {t.user?.email ?? ''}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground truncate">
                    {t.channelName}
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className={`text-[11px] px-2 py-0.5 rounded-md border ${statusColor(t.status)}`}>
                    {t.status.replaceAll('_', ' ')}
                  </span>
                  <span className={`text-[11px] px-2 py-0.5 rounded-md border ${priorityColor(t.priority)}`}>
                    {t.priority}
                  </span>
                </div>
              </div>
            </button>
          ))}
          {ticketsQuery.isLoading ? (
            <div className="p-4 text-sm text-muted-foreground">Loading…</div>
          ) : null}
          {ticketsQuery.isError ? (
            <div className="p-4 text-sm text-destructive">
              Failed to load tickets
              <div className="mt-1 text-xs text-muted-foreground">
                {(ticketsQuery.error as any)?.message
                  ? String((ticketsQuery.error as any).message)
                  : 'Unknown error'}
              </div>
            </div>
          ) : null}
        </div>
      </aside>

      <section className="flex-1 min-w-0 flex flex-col">
        <div className="flex items-center justify-between border-b border-border/60 px-5 py-4">
          <div className="min-w-0">
            <div className="text-base font-semibold truncate">
              {ticket ? `${ticket.ticketId} • ${ticket.title}` : 'Select a ticket'}
            </div>
            <div className="text-sm text-muted-foreground truncate">
              {ticket ? ticket.channelName : 'Pick one from the left'}
            </div>
          </div>
          {ticket ? (
            <div className="flex items-center gap-2">
              <span className={`text-xs px-2 py-0.5 rounded-md border ${statusColor(ticket.status)}`}>
                {ticket.status.replaceAll('_', ' ')}
              </span>
              <span className={`text-xs px-2 py-0.5 rounded-md border ${priorityColor(ticket.priority)}`}>
                {ticket.priority}
              </span>
            </div>
          ) : null}
        </div>

        <div className="flex-1 overflow-auto p-5 space-y-3">
          {!ticket ? (
            <div className="text-sm text-muted-foreground">No ticket selected.</div>
          ) : (
            ticket.messages.map((m: any) => (
              <div key={m.id} className="rounded-xl border border-border/50 bg-muted/20 p-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">{m.senderRole}</span> •{' '}
                    {new Date(m.createdAt).toLocaleString()}
                  </div>
                </div>
                <div className="mt-2 whitespace-pre-wrap text-sm">{m.content}</div>
              </div>
            ))
          )}
        </div>

        <div className="border-t border-border/60 p-4">
          {ticket && typingUsers.size > 0 ? (
            <div className="mb-2 text-xs text-muted-foreground">
              {typingUsers.size === 1 ? 'Someone is typing…' : 'Multiple people are typing…'}
            </div>
          ) : null}
          <div className="flex gap-2 items-end">
            <Textarea
              value={draft}
              onChange={(e) => {
                setDraft(e.target.value)
                emitTyping()
              }}
              placeholder={ticket ? 'Write a message…' : 'Select a ticket to chat…'}
              className="min-h-[44px] max-h-[180px]"
              disabled={!ticket || sending}
              onBlur={() => emitStopTyping()}
            />
            <Button onClick={handleSendMessage} disabled={!ticket || sending}>
              Send
            </Button>
          </div>
        </div>
      </section>

      <aside className="w-[360px] shrink-0 border-l border-border/60 bg-background/40 backdrop-blur">
        <div className="p-5">
          <div className="text-base font-semibold">Details</div>
          <div className="text-sm text-muted-foreground">Metadata & actions</div>
        </div>

        <Separator />

        <div className="p-5 space-y-5">
          {!ticket ? (
            <div className="text-sm text-muted-foreground">Select a ticket.</div>
          ) : (
            <>
              <div className="space-y-2">
                <div className="text-sm font-medium">Status</div>
                <Select value={ticket.status} onValueChange={(v) => staffUpdate({ status: v })}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="OPEN">Open</SelectItem>
                    <SelectItem value="PENDING">Pending</SelectItem>
                    <SelectItem value="IN_PROGRESS">In progress</SelectItem>
                    <SelectItem value="RESOLVED">Resolved</SelectItem>
                    <SelectItem value="CLOSED">Closed</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <div className="text-sm font-medium">Priority</div>
                <Select value={ticket.priority} onValueChange={(v) => staffUpdate({ priority: v })}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="LOW">Low</SelectItem>
                    <SelectItem value="MEDIUM">Medium</SelectItem>
                    <SelectItem value="HIGH">High</SelectItem>
                    <SelectItem value="URGENT">Urgent</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1">
                <div className="text-sm font-medium">Channel</div>
                <div className="text-sm text-muted-foreground">{ticket.channelName}</div>
              </div>

              <div className="space-y-1">
                <div className="text-sm font-medium">Creator</div>
                <div className="text-sm text-muted-foreground">
                  {ticket.user?.name ?? 'Unknown'} • {ticket.user?.email ?? ''}
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-sm font-medium">Assign to</div>
                <Select
                  value={ticket.assignedToId ?? 'UNASSIGNED'}
                  onValueChange={(v) =>
                    staffUpdate({ assignedToId: v === 'UNASSIGNED' ? null : v })
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Unassigned" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="UNASSIGNED">Unassigned</SelectItem>
                    {(agentsQuery.data ?? []).map((u: any) => (
                      <SelectItem key={u.id} value={u.id}>
                        {u.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {ticket.tags?.length ? (
                <div className="space-y-2">
                  <div className="text-sm font-medium">Tags</div>
                  <div className="flex flex-wrap gap-2">
                    {ticket.tags.map((t: string) => (
                      <Badge key={t} variant="outline" className="text-xs">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
              ) : null}
            </>
          )}
        </div>
      </aside>
    </div>
  )
}
