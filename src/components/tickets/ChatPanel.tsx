import { ScrollArea } from '@/components/ui/scroll-area'
import { ChatTopBar } from '@/components/tickets/ChatTopBar'
import { ChatMessage } from '@/components/tickets/ChatMessage'
import { ChatComposer } from '@/components/tickets/ChatComposer'
import type { TicketDetail } from '@/data/tickets/ticketDetails'

interface ChatPanelProps {
  ticket: TicketDetail
}

export function ChatPanel({ ticket }: ChatPanelProps) {
  return (
    <div className="flex h-full flex-col bg-background">
      <ChatTopBar
        ticketId={ticket.ticketId}
        userName={ticket.user.name}
        userAvatar={ticket.user.avatar}
        status={ticket.status}
      />
      
      <ScrollArea className="flex-1 px-4 py-6 md:px-6">
        <div className="flex flex-col gap-6">
          <div className="flex justify-center">
            <span className="text-xs text-muted-foreground">May 30, 2025</span>
          </div>
          
          {ticket.messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
        </div>
      </ScrollArea>
      
      <ChatComposer />
    </div>
  )
}
