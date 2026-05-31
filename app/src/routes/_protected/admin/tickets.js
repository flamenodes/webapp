import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { TicketSidebar } from '@/components/tickets/TicketSidebar';
import { ChatPanel } from '@/components/tickets/ChatPanel';
import { TicketContextPanel } from '@/components/tickets/TicketContextPanel';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { getTicket } from '@/serverActions/tickets/tickets.api';
import { useQuery } from '@tanstack/react-query';
import { z } from 'zod';
export const Route = createFileRoute('/_protected/admin/tickets')({
    head: () => ({
        meta: [{ title: 'Support Tickets | Flame Nodes Admin' }],
    }),
    validateSearch: z.object({ ticket: z.string().optional() }),
    component: AdminTicketsPage,
});
function AdminTicketsPage() {
    const { ticket: selectedTicketId } = Route.useSearch();
    const navigate = useNavigate({ from: Route.fullPath });
    const [showRightPanel, setShowRightPanel] = useState(false);
    const setSelectedTicketId = (id) => {
        navigate({ search: id ? { ticket: id } : {} });
    };
    const { data } = useQuery({
        queryKey: ['ticket', selectedTicketId],
        queryFn: () => getTicket({ data: { ticketId: selectedTicketId } }),
        enabled: !!selectedTicketId,
    });
    const selectedTicket = data?.ticket;
    return (<div className="flex h-full flex-col bg-background">
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar — hidden on mobile when ticket is open */}
        <div className={`w-full lg:w-[340px] xl:w-[360px] shrink-0 lg:block ${selectedTicketId ? 'hidden lg:block' : 'block'}`}>
          <TicketSidebar selectedTicketId={selectedTicketId || undefined} onSelectTicket={setSelectedTicketId}/>
        </div>

        {/* Chat */}
        <div className={`flex-1 min-w-0 ${selectedTicketId ? 'block' : 'hidden lg:flex'}`}>
          {selectedTicketId ? (<div className="flex flex-col h-full">
              {/* Mobile back button */}
              <div className="lg:hidden flex items-center gap-2 px-4 py-2 border-b bg-card">
                <Button variant="ghost" size="icon" onClick={() => setSelectedTicketId(null)}>
                  <ArrowLeft className="h-5 w-5"/>
                </Button>
                <span className="text-sm font-medium">Back to tickets</span>
              </div>
              <ChatPanel ticketId={selectedTicketId} isStaffView={true}/>
            </div>) : (<div className="flex h-full items-center justify-center">
              <p className="text-sm text-muted-foreground">Select a ticket to view</p>
            </div>)}
        </div>

        {showRightPanel && selectedTicket && (<div className="absolute right-0 top-[57px] bottom-0 w-80 border-l bg-card xl:hidden z-10">
            <TicketContextPanel ticket={selectedTicket}/>
          </div>)}

        <div className="hidden xl:block xl:w-[340px]">
          {selectedTicket && <TicketContextPanel ticket={selectedTicket}/>}
        </div>
      </div>
    </div>);
}
//# sourceMappingURL=tickets.js.map