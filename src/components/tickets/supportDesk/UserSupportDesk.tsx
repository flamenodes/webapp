import { Badge } from '#/components/ui/badge'
import { Button } from '#/components/ui/button'
import { Input } from '#/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '#/components/ui/select'
import { Separator } from '#/components/ui/separator'
import { Textarea } from '#/components/ui/textarea'
import {
  createTicket,
  getTicket,
  listTicketTagPresets,
  listTickets,
  sendTicketMessage,
} from '#/serverActions/tickets/tickets.api'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { io, type Socket } from 'socket.io-client'
import { useEffect, useMemo, useRef, useState } from 'react'
import { toast } from 'sonner'
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '#/components/ui/alert-dialog'
import { Message, MessageContent } from '#/components/ui/message'
import { authClient } from '#/lib/auth-client'
import { priorityColor, statusColor } from './supportDeskColors'

type TicketListItem = Awaited<ReturnType<typeof listTickets>>['tickets'][number]
type TicketDetail = Awaited<ReturnType<typeof getTicket>>['ticket']

const LIVE_CHAT_CHANNEL = 'Live Chat'

export function UserSupportDesk() {
  const queryClient = useQueryClient()

  const { data: sessionData } = authClient.useSession()
  const currentUserId = (sessionData as any)?.user?.id ?? (sessionData as any)?.session?.userId ?? null

  const [search, setSearch] = useState('')
  const [selectedTicketId, setSelectedTicketId] = useState<string | null>(null)

  const listInput = useMemo(
    () => ({
      search: search.trim() || undefined,
      take: 50,
      skip: 0,
    }),
    [search],
  )

  const ticketsQuery = useQuery({
    queryKey: ['tickets', 'user', listInput],
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

  const tagPresetsQuery = useQuery({
    queryKey: ['ticket-tag-presets'],
    queryFn: async () => {
      const res = await listTicketTagPresets({ data: { take: 50 } })
      return res.tags
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

  const [createOpen, setCreateOpen] = useState(false)
  const [creating, setCreating] = useState(false)
  const [newTitle, setNewTitle] = useState('')
  const [newDescription, setNewDescription] = useState('')
  const [newPriority, setNewPriority] = useState<'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT'>('MEDIUM')
  const [newTags, setNewTags] = useState<string[]>([])

  async function handleCreateTicket() {
    if (creating) return
    const title = newTitle.trim()
    const description = newDescription.trim()
    if (title.length < 3) {
      toast.error('Title must be at least 3 characters.')
      return
    }
    if (!description) {
      toast.error('Description is required.')
      return
    }
    setCreating(true)
    try {
      const res = await createTicket({
        data: {
          title,
          description,
          priority: newPriority,
          channelName: LIVE_CHAT_CHANNEL,
          tags: newTags,
        } as any,
      })
      toast.success('Ticket submitted')
      setCreateOpen(false)
      setNewTitle('')
      setNewDescription('')
      setNewPriority('MEDIUM')
      setNewTags([])
      setSelectedTicketId(res.ticket.ticketId)
      queryClient.invalidateQueries({ queryKey: ['tickets'] })
    } catch (err: any) {
      toast.error(err?.message ? String(err.message) : 'Failed to create ticket')
    } finally {
      setCreating(false)
    }
  }

  return (
    <div className="flex h-[calc(100vh-5rem)] min-h-[640px] w-full overflow-hidden rounded-2xl border border-border/60 bg-background/40 backdrop-blur">
      <aside className="w-[340px] shrink-0 border-r border-border/60 bg-background/40 backdrop-blur flex flex-col">
        <div className="p-4 space-y-3">
          <div className="flex items-center justify-between gap-2">
            <div className="min-w-0">
              <div className="text-sm font-semibold">Support</div>
              <div className="text-xs text-muted-foreground">Live chat tickets</div>
            </div>
            <AlertDialog open={createOpen} onOpenChange={setCreateOpen}>
              <AlertDialogTrigger asChild>
                <Button size="sm">Submit ticket</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="sm:max-w-[520px]">
                <AlertDialogHeader>
                  <AlertDialogTitle>Submit Ticket</AlertDialogTitle>
                </AlertDialogHeader>

                <div className="space-y-3">
                  <div className="space-y-2">
                    <div className="text-xs font-medium">Title</div>
                    <Input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder="Short summary" />
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs font-medium">Description</div>
                    <Textarea
                      value={newDescription}
                      onChange={(e) => setNewDescription(e.target.value)}
                      placeholder="Describe your issue…"
                      className="min-h-[110px]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <div className="text-xs font-medium">Priority</div>
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
                    </div>

                    <div className="space-y-2">
                      <div className="text-xs font-medium">Channel</div>
                      <div className="h-10 rounded-md border border-border/60 px-3 flex items-center text-sm">
                        <span className="inline-flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-emerald-500" />
                          {LIVE_CHAT_CHANNEL}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-medium">Tags</div>
                      <div className="text-[11px] text-muted-foreground">
                        Choose up to 10
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {(tagPresetsQuery.data ?? []).map((t: any) => {
                        const active = newTags.includes(t.name)
                        return (
                          <Button
                            key={t.id}
                            type="button"
                            variant={active ? 'default' : 'outline'}
                            size="sm"
                            className="h-7 px-2 text-xs"
                            onClick={() => {
                              setNewTags((prev) => {
                                const next = new Set(prev)
                                if (next.has(t.name)) next.delete(t.name)
                                else next.add(t.name)
                                return Array.from(next).slice(0, 10)
                              })
                            }}
                          >
                            {t.name}
                          </Button>
                        )
                      })}
                      {tagPresetsQuery.isLoading ? (
                        <div className="text-xs text-muted-foreground">Loading tags…</div>
                      ) : null}
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-2 pt-1">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setCreateOpen(false)}
                      disabled={creating}
                    >
                      Cancel
                    </Button>
                    <Button type="button" onClick={handleCreateTicket} disabled={creating}>
                      {creating ? 'Submitting…' : 'Submit'}
                    </Button>
                  </div>
                </div>
              </AlertDialogContent>
            </AlertDialog>
          </div>

          <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search tickets…" />
        </div>

        <Separator />

        <div className="flex-1 overflow-auto">
          {tickets.map((t) => (
            <button
              key={t.ticketId}
              className={[
                'w-full text-left px-4 py-3 border-b border-border/40 hover:bg-muted/30 transition-colors',
                selectedTicketId === t.ticketId ? 'bg-muted/40' : '',
              ].join(' ')}
              onClick={() => setSelectedTicketId(t.ticketId)}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="text-sm font-medium truncate">{t.title}</div>
                  <div className="mt-0.5 text-xs text-muted-foreground truncate">
                    {t.description}
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <Badge variant="outline" className="text-[11px] border-emerald-500/30 bg-emerald-500/10 text-emerald-300">
                      <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      {LIVE_CHAT_CHANNEL}
                    </Badge>
                    {(t.tags ?? []).slice(0, 2).map((tag: string) => (
                      <Badge key={tag} variant="outline" className="text-[11px]">
                        {tag}
                      </Badge>
                    ))}
                    {t.tags?.length > 2 ? (
                      <div className="text-[11px] text-muted-foreground">+{t.tags.length - 2}</div>
                    ) : null}
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1 shrink-0">
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
        <div className="flex items-center justify-between border-b border-border/60 px-4 py-3">
          <div className="min-w-0">
            <div className="text-sm font-semibold truncate">
              {ticket ? ticket.title : 'Select a ticket'}
            </div>
            <div className="text-xs text-muted-foreground truncate">
              {ticket ? (
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  {LIVE_CHAT_CHANNEL}
                  {ticket.tags?.length ? (
                    <span className="truncate">• {ticket.tags.join(', ')}</span>
                  ) : null}
                </span>
              ) : (
                'Pick one from the left'
              )}
            </div>
          </div>
          {ticket ? (
            <div className="flex items-center gap-2">
              <span className={`text-xs px-2 py-0.5 rounded-md border ${priorityColor(ticket.priority)}`}>
                {ticket.priority}
              </span>
            </div>
          ) : null}
        </div>

        <div className="flex-1 overflow-auto p-4 space-y-3">
          {!ticket ? (
            <div className="text-sm text-muted-foreground">No ticket selected.</div>
          ) : (
            ticket.messages.map((m: any) => {
              const isMine = currentUserId ? m.senderId === currentUserId : m.senderRole === 'USER'
              // Per request: my messages on the LEFT, others on the RIGHT.
              const alignRight = !isMine
              return (
                <div key={m.id} className={alignRight ? 'flex justify-end' : 'flex justify-start'}>
                  <Message className={alignRight ? 'max-w-[85%] justify-end' : 'max-w-[85%]'}>
                    <MessageContent
                      markdown
                      className={alignRight ? 'bg-muted/40 border border-border/50' : 'bg-secondary'}
                    >
                      {m.content}
                    </MessageContent>
                  </Message>
                </div>
              )
            })
          )}
        </div>

        <div className="border-t border-border/60 p-3">
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
              className="min-h-[44px] max-h-[160px]"
              disabled={!ticket || sending}
              onBlur={() => emitStopTyping()}
            />
            <Button size="sm" onClick={handleSendMessage} disabled={!ticket || sending}>
              Send
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

