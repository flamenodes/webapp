import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Bubble, BubbleContent } from '@/components/ui/bubble'
import { Marker, MarkerContent } from '@/components/ui/marker'
import { Message, MessageAvatar, MessageContent, MessageFooter } from '@/components/ui/message'
import type { Message as MessageType } from '@/data/tickets/ticketDetails'

interface ChatMessageProps {
  message: MessageType
}

export function ChatMessage({ message }: ChatMessageProps) {
  if (message.type === 'system') {
    return (
      <Marker role="status">
        <MarkerContent>{message.content}</MarkerContent>
      </Marker>
    )
  }

  const isOutgoing = message.type === 'outgoing'

  return (
    <Message align={isOutgoing ? 'end' : 'start'}>
      <MessageAvatar>
        <Avatar>
          {message.sender?.avatar && message.sender.avatar.startsWith('http') ? (
            <AvatarImage src={message.sender.avatar} alt={message.sender.name} />
          ) : null}
          <AvatarFallback className="bg-primary/10 text-primary text-sm font-semibold">
            {message.sender?.name.substring(0, 2).toUpperCase() ?? '??'}
          </AvatarFallback>
        </Avatar>
      </MessageAvatar>
      <MessageContent>
        <Bubble variant={isOutgoing ? 'default' : 'muted'}>
          <BubbleContent>{message.content}</BubbleContent>
        </Bubble>
        <MessageFooter>{message.timestamp}</MessageFooter>
      </MessageContent>
    </Message>
  )
}
