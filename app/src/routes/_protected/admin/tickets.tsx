import { createFileRoute } from '@tanstack/react-router'
import { ThemeSwitch } from '@/components/theme/ThemeSwitch'
import { TicketSidebar } from '@/components/tickets/TicketSidebar'
import { ChatPanel } from '@/components/tickets/ChatPanel'
import { TicketContextPanel } from '@/components/tickets/TicketContextPanel'
import { useState } from 'react'
import { ticketDetails } from '@/data/tickets/ticketDetails'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export const Route = createFileRoute('/_protected/admin/tickets')({
  component: AdminTicketsPage,
})

function AdminTicketsPage() {
  const [selectedTicketId, setSelectedTicketId] = useState('1')
  const [showRightPanel, setShowRightPanel] = useState(false)
  const selectedTicket = ticketDetails[selectedTicketId]

  return (
    <div className="flex h-full flex-col bg-background">
      
      <div className="flex flex-1 overflow-hidden">
        <div className="hidden w-80 lg:block xl:w-[360px]">
          <TicketSidebar 
            selectedTicketId={selectedTicketId}
            onSelectTicket={setSelectedTicketId}
          />
        </div>
        
        <div className="flex-1">
          {selectedTicket && <ChatPanel ticket={selectedTicket} />}
        </div>

        {showRightPanel && (
          <div className="absolute right-0 top-[57px] bottom-0 w-80 border-l bg-card xl:hidden z-10">
            {selectedTicket && <TicketContextPanel ticket={selectedTicket} />}
          </div>
        )}

        <div className="hidden w-[300px] xl:block xl:w-[340px]">
          {selectedTicket && <TicketContextPanel ticket={selectedTicket} />}
        </div>
      </div>
    </div>
  )
}
