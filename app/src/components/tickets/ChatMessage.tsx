import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import type { Message } from '@/data/tickets/ticketDetails'

interface ChatMessageProps {
  message: Message
}

export function ChatMessage({ message }: ChatMessageProps) {
  if (message.type === 'system') {
    return (
      <div className="flex justify-center py-2">
        <div className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
          {message.content}
        </div>
      </div>
    )
  }

  const isIncoming = message.type === 'incoming'

  return (
    <div className={`flex gap-3 ${isIncoming ? 'justify-end' : 'justify-start'}`}>
      {!isIncoming && (
        <Avatar size="sm">
          <AvatarFallback className="text-xs font-medium">
            {message.sender?.avatar}
          </AvatarFallback>
        </Avatar>
      )}
      
      <div className={`flex flex-col gap-1 ${isIncoming ? 'items-end' : 'items-start'} max-w-[85%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[65%]`}>
        <div
          className={`rounded-2xl px-4 py-3 ${
            isIncoming
              ? 'bg-gradient-to-br from-primary to-primary/80 text-primary-foreground'
              : 'bg-secondary text-secondary-foreground'
          }`}
        >
          <p className="text-sm leading-relaxed">{message.content}</p>
        </div>
        <span className="text-[10px] text-muted-foreground px-1">{message.timestamp}</span>
      </div>

      {isIncoming && (
        <Avatar size="sm">
          <AvatarFallback className="bg-primary/10 text-primary text-xs font-medium">
            {message.sender?.avatar}
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  )
}
