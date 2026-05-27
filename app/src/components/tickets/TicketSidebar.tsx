import { useState } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { TicketSidebarHeader } from '@/components/tickets/TicketSidebarHeader'
import { SearchRow } from '@/components/tickets/SearchRow'
import { TicketItem } from '@/components/tickets/TicketItem'
import { mockTickets } from '@/data/tickets/ticketData'

interface TicketSidebarProps {
  selectedTicketId?: string
  onSelectTicket?: (ticketId: string) => void
}

export function TicketSidebar({ selectedTicketId, onSelectTicket }: TicketSidebarProps) {
  const [activeTab, setActiveTab] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const counts = {
    all: mockTickets.length,
    open: mockTickets.filter(t => t.status === 'open').length,
    pending: mockTickets.filter(t => t.status === 'pending').length,
    closed: mockTickets.filter(t => t.status === 'closed').length
  }

  const filteredTickets = mockTickets.filter((ticket) => {
    const matchesTab = activeTab === 'all' || ticket.status === activeTab
    const matchesSearch = 
      ticket.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesTab && matchesSearch
  })

  return (
    <div className="flex h-full flex-col border-r bg-card">
      <TicketSidebarHeader 
        activeTab={activeTab} 
        onTabChange={setActiveTab}
        counts={counts}
      />
      
      <SearchRow searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <ScrollArea className="flex-1">
        <div className="flex flex-col">
          {filteredTickets.map((ticket) => (
            <TicketItem
              key={ticket.id}
              ticket={ticket}
              isSelected={selectedTicketId === ticket.id}
              onSelect={() => onSelectTicket?.(ticket.id)}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
