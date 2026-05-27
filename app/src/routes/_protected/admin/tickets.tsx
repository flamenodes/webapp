import { createFileRoute } from '@tanstack/react-router'
import { TicketSidebar } from '@/components/tickets/TicketSidebar'
import { ChatPanel } from '@/components/tickets/ChatPanel'
import { TicketContextPanel } from '@/components/tickets/TicketContextPanel'
import { useState } from 'react'
import { getTicket } from '@/serverActions/tickets/tickets.api'
import { useQuery } from '@tanstack/react-query'

export const Route = createFileRoute('/_protected/admin/tickets')({
  component: AdminTicketsPage,
})

function AdminTicketsPage() {
  const [selectedTicketId, setSelectedTicketId] = useState<string | null>(null)
  const [showRightPanel, setShowRightPanel] = useState(false)

  const { data } = useQuery({
    queryKey: ['ticket', selectedTicketId],
    queryFn: () => getTicket({ data: { ticketId: selectedTicketId! } }),
    enabled: !!selectedTicketId,
  })

  const selectedTicket = data?.ticket

  return (
    <div className="flex h-full flex-col bg-background">
      <div className="flex flex-1 overflow-hidden">
        <div className="hidden w-80 lg:block xl:w-[360px]">
          <TicketSidebar 
            selectedTicketId={selectedTicketId || undefined}
            onSelectTicket={setSelectedTicketId}
          />
        </div>
        
        <div className="flex-1">
          {selectedTicketId ? (
            <ChatPanel ticketId={selectedTicketId} isStaffView={true} />
          ) : (
            <div className="flex h-full items-center justify-center">
              <p className="text-sm text-muted-foreground">Select a ticket to view</p>
            </div>
          )}
        </div>

        {showRightPanel && selectedTicket && (
          <div className="absolute right-0 top-[57px] bottom-0 w-80 border-l bg-card xl:hidden z-10">
            <TicketContextPanel ticket={selectedTicket as any} />
          </div>
        )}

        <div className="hidden w-[300px] xl:block xl:w-[340px]">
          {selectedTicket && <TicketContextPanel ticket={selectedTicket as any} />}
        </div>
      </div>
    </div>
  )
}
