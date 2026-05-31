import { useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { TicketSidebarHeader } from '@/components/tickets/TicketSidebarHeader';
import { SearchRow } from '@/components/tickets/SearchRow';
import { TicketItem } from '@/components/tickets/TicketItem';
import { listTickets } from '@/serverActions/tickets/tickets.api';
import { useSuspenseQuery } from '@tanstack/react-query';
export function TicketSidebar({ selectedTicketId, onSelectTicket, onCreateTicket, showCreateButton = false }) {
    const [activeTab, setActiveTab] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const { data } = useSuspenseQuery({
        queryKey: ['tickets', activeTab, searchQuery],
        queryFn: () => listTickets({
            data: {
                status: activeTab !== 'all' ? activeTab.toUpperCase() : undefined,
                search: searchQuery || undefined,
            }
        }),
    });
    const tickets = data?.tickets || [];
    const counts = {
        all: tickets.length,
        open: tickets.filter(t => t.status === 'OPEN').length,
        pending: tickets.filter(t => t.status === 'PENDING').length,
        closed: tickets.filter(t => t.status === 'CLOSED').length
    };
    return (<div className="flex h-full flex-col border-r bg-card">
      <TicketSidebarHeader activeTab={activeTab} onTabChange={setActiveTab} counts={counts} onCreateTicket={onCreateTicket} showCreateButton={showCreateButton}/>
      
      <SearchRow searchQuery={searchQuery} onSearchChange={setSearchQuery}/>

      <ScrollArea className="flex-1">
        {tickets.length === 0 ? (<div className="flex items-center justify-center p-8">
            <p className="text-sm text-muted-foreground">No tickets found</p>
          </div>) : (<div className="flex flex-col">
            {tickets.map((ticket) => (<TicketItem key={ticket.id} ticket={{
                    id: ticket.ticketId,
                    title: ticket.title,
                    status: ticket.status.toLowerCase(),
                    lastMessage: ticket.messages[0]?.content || ticket.description,
                    timestamp: new Date(ticket.updatedAt).toLocaleString(),
                    priority: ticket.priority.toLowerCase(),
                    avatar: ticket.user.image || ticket.user.name.substring(0, 2).toUpperCase(),
                    avatarImage: ticket.user.image,
                    assignedToName: ticket.assignedTo?.name,
                    assignedToImage: ticket.assignedTo?.image,
                }} isSelected={selectedTicketId === ticket.ticketId} onSelect={() => onSelectTicket?.(ticket.ticketId)}/>))}
          </div>)}
      </ScrollArea>
    </div>);
}
//# sourceMappingURL=TicketSidebar.js.map