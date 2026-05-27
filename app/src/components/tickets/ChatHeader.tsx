import { Search, MoreVertical } from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

export function ChatHeader() {
  return (
    <div className="sticky top-0 z-10 flex items-center justify-between border-b bg-card px-4 py-3">
      <div className="flex items-center gap-3">
        <div className="relative">
          <Avatar size="lg">
            <AvatarFallback className="bg-primary/10 text-primary font-semibold">SA</AvatarFallback>
          </Avatar>
          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-card bg-green-500" />
        </div>
        <div>
          <h3 className="text-sm font-semibold">Support Agent</h3>
          <p className="text-xs text-muted-foreground">Typically replies in minutes</p>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Search className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
