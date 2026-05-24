import { createFileRoute } from '@tanstack/react-router'
import { ThemeSwitch } from '@/components/theme/ThemeSwitch'
import { TicketSidebar } from '@/components/tickets/TicketSidebar'
import { SupportChat } from '@/components/tickets/SupportChat'
import { useState } from 'react'

export const Route = createFileRoute('/_protected/user/tickets')({
  component: TicketsPage,
})

function TicketsPage() {
  const [selectedTicketId, setSelectedTicketId] = useState('1')

  return (
    <div className="flex h-[100%] flex-col bg-background">

      
      <div className="flex flex-1 overflow-hidden">
        <div className="hidden w-80 lg:w-[340px] xl:w-[360px] lg:block">
          <TicketSidebar 
            selectedTicketId={selectedTicketId}
            onSelectTicket={setSelectedTicketId}
          />
        </div>
        
        <div className="flex-1">
          <SupportChat />
        </div>
      </div>
    </div>
  )
}
