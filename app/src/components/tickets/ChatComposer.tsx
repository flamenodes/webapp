import { useState } from 'react'
import { Paperclip, Smile, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

export function ChatComposer() {
  const [message, setMessage] = useState('')

  const handleSend = () => {
    if (message.trim()) {
      console.log('Sending:', message)
      setMessage('')
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="sticky bottom-0 border-t bg-card p-4">
      <div className="flex items-end gap-2">
        <Button variant="ghost" size="icon" className="h-10 w-10 shrink-0">
          <Paperclip className="h-5 w-5" />
        </Button>
        <div className="relative flex-1">
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            className="min-h-[48px] max-h-32 resize-none rounded-full px-4 py-3 pr-12"
            rows={1}
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8"
          >
            <Smile className="h-5 w-5" />
          </Button>
        </div>
        <Button
          onClick={handleSend}
          size="icon"
          className="h-10 w-10 shrink-0 rounded-full"
        >
          <Send className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
