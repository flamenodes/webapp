import { Badge } from '#/components/ui/badge'
import { Button } from '#/components/ui/button'
import { Input } from '#/components/ui/input'
import { Label } from '#/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '#/components/ui/select'
import { Separator } from '#/components/ui/separator'
import { Textarea } from '#/components/ui/textarea'
import {
  createTicket,
  getTicket,
  listSupportAgents,
  listTickets,
  sendTicketMessage,
  updateTicket,
} from '#/serverActions/tickets/tickets.api'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { io, type Socket } from 'socket.io-client'
import { useEffect, useMemo, useRef, useState } from 'react'
import { toast } from 'sonner'

type Mode = 'user' | 'staff'

type TicketListItem = Awaited<ReturnType<typeof listTickets>>['tickets'][number]
type TicketDetail = Awaited<ReturnType<typeof getTicket>>['ticket']

function statusColor(status: string) {
  switch (status) {
    case 'OPEN':
      return 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
    case 'IN_PROGRESS':
      return 'bg-sky-500/15 text-sky-300 border-sky-500/30'
    case 'PENDING':
      return 'bg-amber-500/15 text-amber-300 border-amber-500/30'
    case 'RESOLVED':
      return 'bg-violet-500/15 text-violet-300 border-violet-500/30'
    case 'CLOSED':
      return 'bg-zinc-500/15 text-zinc-300 border-zinc-500/30'
    default:
      return 'bg-zinc-500/15 text-zinc-300 border-zinc-500/30'
  }
}

function priorityColor(priority: string) {
  switch (priority) {
    case 'LOW':
      return 'bg-zinc-500/15 text-zinc-300 border-zinc-500/30'
    case 'MEDIUM':
      return 'bg-sky-500/15 text-sky-300 border-sky-500/30'
    case 'HIGH':
      return 'bg-amber-500/15 text-amber-300 border-amber-500/30'
    case 'URGENT':
      return 'bg-rose-500/15 text-rose-300 border-rose-500/30'
    default:
      return 'bg-zinc-500/15 text-zinc-300 border-zinc-500/30'
  }
}

export function SupportDesk({ mode }: { mode: Mode }) {
  const isStaff = mode === 'staff'
  const queryClient = useQueryClient()

  const [search, setSearch] = useState('')
  const [status, setStatus] = useState<string | undefined>()
  const [priority, setPriority] = useState<string | undefined>()
  const [channelName, setChannelName] = useState<string | undefined>()
  const [selectedTicketId, setSelectedTicketId] = useState<string | null>(null)

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
    queryKey: ['tickets', mode, listInput],
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
    enabled: isStaff,
    queryFn: async () => {
      const res = await listSupportAgents()
      return res.users
    },
  })

  const socketRef = useRef<Socket | null>(null)
  const typingStopTimerRef = useRef<number | null>(null)
  const isTypingRef = useRef(false)
  const [typingUsers, setTypingUsers] = useState<Set<string>>(() => new Set())

  useEffect(() => {
    if (!selectedTicketId) return

    if (!socketRef.current) {
      const url = (import.meta as any).env?.VITE_SOCKET_SERVER_URL as
        | string
        | undefined
      socketRef.current = io(url, { withCredentials: true })
    }

    const socket = socketRef.current
    socket.emit('join-ticket', { ticketId: selectedTicketId })

    const onNewMessage = () => {
      queryClient.invalidateQueries({ queryKey: ['ticket', selectedTicketId] })
      queryClient.invalidateQueries({ queryKey: ['tickets'] })
    }
    const onTicketUpdated = () => {
      queryClient.invalidateQueries({ queryKey: ['ticket', selectedTicketId] })
      queryClient.invalidateQueries({ queryKey: ['tickets'] })
    }
    const onTyping = (payload: { ticketId?: string; userId?: string }) => {
      if (!payload?.userId) return
      setTypingUsers((prev) => new Set(prev).add(payload.userId!))
    }
    const onStopTyping = (payload: { ticketId?: string; userId?: string }) => {
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

  const [newTitle, setNewTitle] = useState('')
  const [newDescription, setNewDescription] = useState('')
  const [newPriority, setNewPriority] = useState<'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT'>('MEDIUM')
  const [newChannelName, setNewChannelName] = useState('General Support')
  const [newTags, setNewTags] = useState('')
  const [creating, setCreating] = useState(false)
  const [createOpen, setCreateOpen] = useState(false)
  const newTitleRef = useRef<HTMLInputElement | null>(null)

  async function handleCreateTicket() {
    if (creating) return
    const title = newTitle.trim()
    const description = newDescription.trim()
    if (title.length < 3) {
      toast.error('Title must be at least 3 characters.')
      newTitleRef.current?.focus()
      return
    }
    if (description.length < 1) {
      toast.error('Description is required.')
      return
    }
    setCreating(true)
    try {
      const tags = newTags
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean)

      const res = await createTicket({
        data: {
          title,
          description,
          priority: newPriority,
          channelName: newChannelName,
          tags,
        },
      })

      toast.success(`Created ${res.ticket.ticketId}`)
      setSelectedTicketId(res.ticket.ticketId)
      setNewTitle('')
      setNewDescription('')
      setNewTags('')
      setCreateOpen(false)
      await queryClient.invalidateQueries({ queryKey: ['tickets'] })
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to create ticket'
      toast.error(message)
    } finally {
      setCreating(false)
    }
  }

  const ticket = ticketQuery.data as TicketDetail | undefined
  const tickets = (ticketsQuery.data ?? []) as TicketListItem[]

  const [draft, setDraft] = useState('')
  const [sending, setSending] = useState(false)

  function emitTyping() {
    if (!selectedTicketId) return
    const socket = socketRef.current
    if (!socket) return

    if (!isTypingRef.current) {
      isTypingRef.current = true
      socket.emit('typing', { ticketId: selectedTicketId })
    }

    if (typingStopTimerRef.current) {
      window.clearTimeout(typingStopTimerRef.current)
    }
    typingStopTimerRef.current = window.setTimeout(() => {
      isTypingRef.current = false
      socket.emit('stop-typing', { ticketId: selectedTicketId })
      typingStopTimerRef.current = null
    }, 1000)
  }

  function emitStopTyping() {
    if (!selectedTicketId) return
    const socket = socketRef.current
    if (!socket) return
    if (typingStopTimerRef.current) {
      window.clearTimeout(typingStopTimerRef.current)
      typingStopTimerRef.current = null
    }
    if (isTypingRef.current) {
      isTypingRef.current = false
      socket.emit('stop-typing', { ticketId: selectedTicketId })
    }
  }

  async function handleSendMessage() {
    if (!selectedTicketId) return
    const content = draft.trim()
    if (!content) return

    setSending(true)
    try {
      emitStopTyping()
      await sendTicketMessage({
        data: { ticketId: selectedTicketId, content },
      })
      setDraft('')
      await queryClient.invalidateQueries({ queryKey: ['ticket', selectedTicketId] })
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Failed to send message')
    } finally {
      setSending(false)
    }
  }

  async function staffUpdate(patch: {
    status?: string
    priority?: string
    channelName?: string
    tags?: string[]
    assignedToId?: string | null
  }) {
    if (!selectedTicketId) return
    try {
      await updateTicket({ data: { ticketId: selectedTicketId, ...patch } as any })
      await queryClient.invalidateQueries({ queryKey: ['ticket', selectedTicketId] })
      await queryClient.invalidateQueries({ queryKey: ['tickets'] })
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Failed to update ticket')
    }
  }

  return (
    <div className="flex h-full w-full">
      <aside className="w-[340px] shrink-0 border-r border-border/60 bg-background/40 backdrop-blur">
        <div className="p-4 space-y-3">
          <div className="flex items-center justify-between gap-2">
            <div>
              <div className="text-lg font-semibold">Support</div>
              <div className="text-sm text-muted-foreground">
                {isStaff ? 'All tickets' : 'Your tickets'}
              </div>
            </div>
            {!isStaff ? (
              <Button
                size="sm"
                onClick={() => {
                  setCreateOpen(true)
                  setTimeout(() => newTitleRef.current?.focus(), 0)
                }}
              >
                New
              </Button>
            ) : null}
          </div>

          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search ticketId / title…"
          />

          <div className="grid grid-cols-2 gap-2">
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
          </div>

          <Input
            value={channelName ?? ''}
            onChange={(e) => setChannelName(e.target.value || undefined)}
            placeholder="Channel (optional)"
          />
        </div>

        <Separator />

        <div className="h-[calc(100%-170px)] overflow-auto">
          {tickets.map((t) => (
            <button
              key={t.ticketId}
              onClick={() => setSelectedTicketId(t.ticketId)}
              className={[
                'w-full text-left px-4 py-3 border-b border-border/40 hover:bg-muted/30 transition',
                selectedTicketId === t.ticketId ? 'bg-muted/30' : '',
              ].join(' ')}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="text-sm font-medium truncate">
                    {t.ticketId} • {t.title}
                  </div>
                  <div className="text-xs text-muted-foreground truncate">
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

        {!isStaff && createOpen ? (
          <div className="border-t border-border/60 p-4 space-y-2">
            <div className="flex items-center justify-between gap-2">
              <div className="text-sm font-medium">Create ticket</div>
              <Button size="sm" variant="ghost" onClick={() => setCreateOpen(false)}>
                Close
              </Button>
            </div>
            <div className="space-y-2">
              <Input
                ref={newTitleRef as any}
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="Title"
              />
              <Textarea
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                placeholder="Describe your issue…"
                className="min-h-[90px]"
              />
              <div className="grid grid-cols-2 gap-2">
                <Select value={newPriority} onValueChange={(v) => setNewPriority(v as any)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="LOW">Low</SelectItem>
                    <SelectItem value="MEDIUM">Medium</SelectItem>
                    <SelectItem value="HIGH">High</SelectItem>
                    <SelectItem value="URGENT">Urgent</SelectItem>
                  </SelectContent>
                </Select>
                <Input value={newChannelName} onChange={(e) => setNewChannelName(e.target.value)} placeholder="Channel" />
              </div>
              <Input value={newTags} onChange={(e) => setNewTags(e.target.value)} placeholder="Tags (comma separated)" />
              <Button onClick={handleCreateTicket} disabled={creating} className="w-full">
                {creating ? 'Creating…' : 'Create'}
              </Button>
            </div>
          </div>
        ) : null}
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
                {isStaff ? (
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
                ) : (
                  <Badge variant="outline" className={`border ${statusColor(ticket.status)}`}>
                    {ticket.status}
                  </Badge>
                )}
              </div>

              <div className="space-y-2">
                <div className="text-sm font-medium">Priority</div>
                {isStaff ? (
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
                ) : (
                  <Badge variant="outline" className={`border ${priorityColor(ticket.priority)}`}>
                    {ticket.priority}
                  </Badge>
                )}
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

              {isStaff ? (
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
              ) : null}
            </>
          )}
        </div>
      </aside>
    </div>
  )
}
