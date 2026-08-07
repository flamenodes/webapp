import { useState, Suspense } from 'react'
import { useSuspenseQuery } from '@tanstack/react-query'
import { listTickets } from '@/serverActions/tickets/tickets.api'
import { ChatPanel } from '@/components/tickets/ChatPanel'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MessageSquare, X, ChevronDown, ArrowLeft } from 'lucide-react'
import { useNavigate } from '@tanstack/react-router'

const STATUS_STYLES: Record<string, string> = {
  OPEN: 'bg-primary/10 text-primary border-primary/20',
  PENDING: 'bg-orange-500/10 text-orange-500 border-orange-500/20',
  IN_PROGRESS: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
  RESOLVED: 'bg-green-500/10 text-green-500 border-green-500/20',
  CLOSED: 'bg-muted text-muted-foreground border-border',
}

function TicketList({ onSelect }: { onSelect: (id: string) => void }) {
  const { data } = useSuspenseQuery({
    queryKey: ['tickets'],
    queryFn: () => listTickets({ data: {} }),
  })
  const tickets = data?.tickets ?? []
  const open = tickets.filter((t) => !['CLOSED', 'RESOLVED'].includes(t.status))

  if (!open.length)
    return (
      <div className="flex flex-col items-center justify-center h-24 gap-2">
        <p className="text-xs text-muted-foreground">No open tickets</p>
      </div>
    )

  return (
    <div className="flex flex-col divide-y divide-border">
      {open.map((t) => (
        <button
          key={t.id}
          onClick={() => onSelect(t.ticketId)}
          className="flex items-start gap-2.5 px-3 py-2.5 text-left hover:bg-accent/50 transition-colors w-full"
        >
          <Avatar className="w-7 h-7 shrink-0 mt-0.5">
            {t.user.image && <AvatarImage src={t.user.image} />}
            <AvatarFallback className="text-[10px] bg-primary/10 text-primary">
              {t.user.name.substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-1">
              <span className="text-xs font-medium truncate">{t.title}</span>
              <Badge variant="outline" className={`text-[10px] h-4 px-1 shrink-0 ${STATUS_STYLES[t.status] ?? ''}`}>
                {t.status.toLowerCase()}
              </Badge>
            </div>
            <p className="text-[11px] text-muted-foreground truncate mt-0.5">
              {t.messages[0]?.content || t.description}
            </p>
          </div>
        </button>
      ))}
    </div>
  )
}

export function TicketFloatingWidget() {
  const [open, setOpen] = useState(false)
  const [activeTicketId, setActiveTicketId] = useState<string | null>(null)
  const navigate = useNavigate()

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
      {/* Panel */}
      {open && (
        <div className="w-[340px] h-[480px] rounded-2xl border border-border bg-card shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-3 py-2.5 border-b bg-card shrink-0">
            {activeTicketId ? (
              <button
                onClick={() => setActiveTicketId(null)}
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back
              </button>
            ) : (
              <span className="text-sm font-semibold">Support</span>
            )}
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                className="h-6 text-[11px] px-2 text-muted-foreground"
                onClick={() => { setOpen(false); navigate({ to: '/user/tickets' }) }}
              >
                Open full
              </Button>
              <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setOpen(false)}>
                <ChevronDown className="w-3.5 h-3.5" />
              </Button>
            </div>
          </div>

          {/* Body */}
          {activeTicketId ? (
            <Suspense fallback={<div className="flex-1 flex items-center justify-center text-xs text-muted-foreground">Loading…</div>}>
              <ChatPanel ticketId={activeTicketId} isStaffView={false} />
            </Suspense>
          ) : (
            <ScrollArea className="flex-1">
              <Suspense fallback={<div className="p-4 text-xs text-muted-foreground">Loading…</div>}>
                <TicketList onSelect={setActiveTicketId} />
              </Suspense>
            </ScrollArea>
          )}
        </div>
      )}

      {/* FAB */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
        aria-label="Support"
      >
        {open ? <X className="w-5 h-5" /> : <MessageSquare className="w-5 h-5" />}
      </button>
    </div>
  )
}
