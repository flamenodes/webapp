import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { Suspense, useState } from 'react'
import { z } from 'zod'
import { useSuspenseQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { listTickets, createTicket } from '@/serverActions/tickets/tickets.api'
import { ChatPanel } from '@/components/tickets/ChatPanel'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Plus, ArrowLeft, MessageSquare, Clock } from 'lucide-react'
import { toast } from 'sonner'

export const Route = createFileRoute('/_protected/user/tickets')({
  head: () => ({ meta: [{ title: 'Support | Flame Nodes' }] }),
  validateSearch: z.object({ ticket: z.string().optional() }),
  component: TicketsPage,
})

const STATUS_STYLES: Record<string, string> = {
  OPEN: 'bg-primary/10 text-primary border-primary/20',
  PENDING: 'bg-orange-500/10 text-orange-500 border-orange-500/20',
  IN_PROGRESS: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
  RESOLVED: 'bg-green-500/10 text-green-500 border-green-500/20',
  CLOSED: 'bg-muted text-muted-foreground border-border',
}

function TicketHistory({ selectedId, onSelect }: { selectedId?: string; onSelect: (id: string) => void }) {
  const { data } = useSuspenseQuery({
    queryKey: ['tickets'],
    queryFn: () => listTickets({ data: {} }),
  })
  const tickets = data?.tickets ?? []

  if (!tickets.length) {
    return (
      <div className="flex flex-col items-center justify-center h-32 text-center px-4">
        <MessageSquare className="w-8 h-8 text-muted-foreground/40 mb-2" />
        <p className="text-xs text-muted-foreground">No tickets yet</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col divide-y divide-border">
      {tickets.map((t) => {
        const isActive = t.ticketId === selectedId
        const lastMsg = t.messages[0]?.content || t.description
        return (
          <button
            key={t.id}
            onClick={() => onSelect(t.ticketId)}
            className={[
              'flex items-start gap-3 px-3 py-3 text-left transition-colors hover:bg-accent/50 w-full',
              isActive ? 'bg-accent' : '',
            ].join(' ')}
          >
            <Avatar className="w-8 h-8 shrink-0 mt-0.5">
              {t.user.image && <AvatarImage src={t.user.image} />}
              <AvatarFallback className="text-xs bg-primary/10 text-primary">
                {t.user.name.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-1 mb-0.5">
                <span className="text-xs font-semibold truncate">{t.title}</span>
                <Badge variant="outline" className={`text-[10px] h-4 px-1.5 shrink-0 ${STATUS_STYLES[t.status] ?? ''}`}>
                  {t.status.toLowerCase()}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground truncate">{lastMsg}</p>
              <div className="flex items-center gap-1 mt-1">
                <Clock className="w-3 h-3 text-muted-foreground/50" />
                <span className="text-[10px] text-muted-foreground/60">
                  {new Date(t.updatedAt).toLocaleDateString()}
                </span>
                <span className="text-[10px] text-muted-foreground/40 ml-1">{t.ticketId}</span>
              </div>
            </div>
          </button>
        )
      })}
    </div>
  )
}

function TicketsPage() {
  const { ticket: selectedTicketId } = Route.useSearch()
  const navigate = useNavigate({ from: Route.fullPath })
  const qc = useQueryClient()
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const setSelected = (id: string | null) =>
    navigate({ search: id ? { ticket: id } : {} })

  const createMutation = useMutation({
    mutationFn: () => createTicket({ data: { title, description, priority: 'MEDIUM', channelName: 'general', tags: [] } }),
    onSuccess: (data) => {
      qc.invalidateQueries({ queryKey: ['tickets'] })
      setOpen(false)
      setTitle('')
      setDescription('')
      toast.success('Ticket created')
      if (data?.ticket) setSelected(data.ticket.ticketId)
    },
    onError: () => toast.error('Failed to create ticket'),
  })

  return (
    <div className="flex h-full overflow-hidden bg-background">
      {/* Left: history panel */}
      <div className={`flex flex-col w-full lg:w-[280px] shrink-0 border-r bg-card ${selectedTicketId ? 'hidden lg:flex' : 'flex'}`}>
        {/* Header */}
        <div className="flex items-center justify-between px-3 py-3 border-b">
          <span className="text-sm font-semibold">Support</span>
          <Button size="icon" variant="ghost" className="h-7 w-7" onClick={() => setOpen(true)}>
            <Plus className="w-4 h-4" />
          </Button>
        </div>

        <ScrollArea className="flex-1">
          <Suspense fallback={<div className="p-4 text-xs text-muted-foreground">Loading…</div>}>
            <TicketHistory selectedId={selectedTicketId} onSelect={setSelected} />
          </Suspense>
        </ScrollArea>
      </div>

      {/* Right: active chat */}
      <div className={`flex-1 min-w-0 flex flex-col ${selectedTicketId ? 'flex' : 'hidden lg:flex'}`}>
        {selectedTicketId ? (
          <>
            {/* Mobile back */}
            <div className="lg:hidden flex items-center gap-2 px-3 py-2 border-b bg-card shrink-0">
              <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => setSelected(null)}>
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <span className="text-sm font-medium">Back</span>
            </div>
            <Suspense fallback={<div className="flex-1 flex items-center justify-center text-sm text-muted-foreground">Loading…</div>}>
              <ChatPanel ticketId={selectedTicketId} isStaffView={false} />
            </Suspense>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center gap-3 text-center px-6">
            <MessageSquare className="w-10 h-10 text-muted-foreground/30" />
            <p className="text-sm text-muted-foreground">Select a ticket or create a new one</p>
            <Button size="sm" onClick={() => setOpen(true)}>
              <Plus className="w-4 h-4 mr-1.5" />
              New Ticket
            </Button>
          </div>
        )}
      </div>

      {/* Create dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>New Support Ticket</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="title">Title</Label>
              <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Brief description of your issue" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="desc">Description</Label>
              <Textarea id="desc" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Provide more details…" rows={4} />
            </div>
            <Button
              className="w-full"
              onClick={() => createMutation.mutate()}
              disabled={!title.trim() || !description.trim() || createMutation.isPending}
            >
              {createMutation.isPending ? 'Creating…' : 'Create Ticket'}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
