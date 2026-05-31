import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { DualAvatar } from '@/components/tickets/DualAvatar'
import type { Ticket } from '@/data/tickets/ticketData'

interface TicketItemProps {
  ticket: Ticket & { 
    avatarImage?: string | null
    assignedToImage?: string | null
    assignedToName?: string
  }
  isSelected: boolean
  onSelect: () => void
}

export function TicketItem({ ticket, isSelected, onSelect }: TicketItemProps) {
  const getStatusColor = () => {
    switch (ticket.status) {
      case 'open':
        return 'border-primary'
      case 'pending':
        return 'border-orange-500'
      case 'closed':
        return 'border-border'
      default:
        return 'border-transparent'
    }
  }

  return (
    <button
      onClick={onSelect}
      className={`flex w-full gap-3 border-b border-r-2 p-3 text-left transition-colors ${
        isSelected
          ? `bg-accent ${getStatusColor()}`
          : 'border-r-transparent hover:bg-accent/50'
      }`}
    >
      <div className="relative shrink-0">
        {ticket.assignedToImage || ticket.assignedToName ? (
          <DualAvatar
            primary={{
              name: ticket.avatar || ticket.title,
              image: ticket.avatarImage,
            }}
            secondary={{
              name: ticket.assignedToName || 'A',
              image: ticket.assignedToImage,
            }}
          />
        ) : (
          <Avatar size="sm">
            {ticket.avatarImage && (
              <AvatarImage src={ticket.avatarImage} alt={ticket.title} />
            )}
            <AvatarFallback className="bg-muted text-xs font-medium">
              {ticket.avatar}
            </AvatarFallback>
          </Avatar>
        )}
        {ticket.unread && (
          <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-primary ring-2 ring-card" />
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className={`truncate text-sm ${ticket.unread ? 'font-semibold' : 'font-medium'}`}>
            {ticket.title}
          </h3>
          <span className="shrink-0 text-xs text-muted-foreground">
            {ticket.timestamp}
          </span>
        </div>
        
        <p className={`truncate text-xs ${ticket.unread ? 'text-foreground' : 'text-muted-foreground'}`}>
          {ticket.lastMessage}
        </p>
      </div>
    </button>
  )
}
