import { ScrollArea } from '@/components/ui/scroll-area'
import { ChatHeader } from '@/components/tickets/ChatHeader'
import { MessageBubble } from '@/components/tickets/MessageBubble'
import { TypingIndicator } from '@/components/tickets/TypingIndicator'
import { ChatComposer } from '@/components/tickets/ChatComposer'
import { mockMessages } from '@/data/dashboard/chatMessages'

export function SupportChat() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-card shadow-lg">
      <ChatHeader />
      <ScrollArea className="flex-1 px-4 py-6 md:px-6">
        <div className="flex flex-col gap-6">
          <div className="flex justify-center">
            <span className="text-xs text-muted-foreground">Today</span>
          </div>
          {mockMessages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
          <TypingIndicator />
        </div>
      </ScrollArea>
      <ChatComposer />
    </div>
  )
}
