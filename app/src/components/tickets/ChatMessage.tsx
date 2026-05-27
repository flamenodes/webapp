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
    <div
      className={`flex gap-3 ${
        isIncoming ? 'justify-start' : 'justify-end'
      }`}
    >
      {/* Incoming Avatar — LEFT */}
      {isIncoming && (
        <Avatar className="h-10 w-10 shrink-0">
          <AvatarFallback className="bg-primary/10 text-primary text-sm font-semibold">
            {message.sender?.avatar}
          </AvatarFallback>
        </Avatar>
      )}

      <div
        className={`flex flex-col gap-1 ${
          isIncoming ? 'items-start' : 'items-end'
        } max-w-[85%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[65%]`}
      >
        <div
          className={`rounded-2xl px-4 py-3 shadow-sm ${
            isIncoming
              ? 'bg-gradient-to-br from-primary to-primary/80 text-primary-foreground'
              : 'bg-secondary text-secondary-foreground'
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

      {/* Outgoing Avatar — RIGHT */}
      {!isIncoming && (
        <Avatar className="h-10 w-10 shrink-0">
          <AvatarFallback className="text-sm font-semibold">
            {message.sender?.avatar}
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  )
}
