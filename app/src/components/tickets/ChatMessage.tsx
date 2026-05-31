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

  const isOutgoing = message.type === 'outgoing'

  return (
    <div className={`flex gap-3 ${isOutgoing ? 'justify-end' : 'justify-start'}`}>
      {!isOutgoing && (
        <Avatar className="h-10 w-10 shrink-0">
          <AvatarFallback className="bg-primary/10 text-primary text-sm font-semibold">
            {message.sender?.avatar
              ? <img src={message.sender.avatar} alt={message.sender.name} />
              : message.sender?.name.substring(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      )}

      <div className={`flex flex-col gap-1 max-w-[85%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[65%] ${isOutgoing ? 'items-end' : 'items-start'}`}>
        <div
          className={`rounded-2xl px-4 py-3 shadow-sm ${
            isOutgoing
              ? 'bg-zinc-900 text-white dark:bg-zinc-800'
              : 'bg-gradient-to-br from-primary to-primary/80 text-primary-foreground'
          }`}
        >
          <p className="text-sm leading-relaxed break-words">
            {message.content}
          </p>
        </div>

        <span className="px-1 text-[10px] text-muted-foreground">
          {message.timestamp}
        </span>
      </div>

      {isOutgoing && (
        <Avatar className="h-10 w-10 shrink-0">
          <AvatarFallback className="bg-primary/10 text-primary text-sm font-semibold">
            {message.sender?.avatar
              ? <img src={message.sender.avatar} alt={message.sender.name} />
              : message.sender?.name.substring(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  )
}
