import { Copy, Star, Clock, Check } from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface ChatTopBarProps {
  ticketId: string
  userName: string
  userAvatar: string
  status: 'open' | 'closed' | 'pending'
  onStatusChange?: (status: 'open' | 'closed' | 'pending') => void
  onResolve?: () => void
}

export function ChatTopBar({ ticketId, userName, userAvatar, status, onResolve }: ChatTopBarProps) {
  const handleCopyId = () => {
    navigator.clipboard.writeText(ticketId)
  }

  const getStatusStyles = () => {
    switch (status) {
      case 'open':
        return 'bg-primary/10 text-primary border-primary/20'
      case 'pending':
        return 'bg-orange-500/10 text-orange-500 border-orange-500/20 dark:bg-orange-500/10 dark:text-orange-500'
      case 'closed':
        return 'bg-muted text-muted-foreground border-border'
    }
  }

  return (
    <div className="flex items-center justify-between border-b bg-card px-4 py-3 md:px-6">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarFallback className="bg-primary/10 text-primary font-semibold">
            {userAvatar}
          </AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-sm font-semibold">{userName}</h2>
          <button
            onClick={handleCopyId}
            className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            {ticketId}
            <Copy className="h-3 w-3" />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Badge variant="outline" className={getStatusStyles()}>
          {status}
        </Badge>
        <Button variant="ghost" size="icon-sm">
          <Star className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon-sm">
          <Clock className="h-4 w-4" />
        </Button>
        <Button onClick={onResolve} size="sm" className="gap-1">
          <Check className="h-4 w-4" />
          Resolve
        </Button>
      </div>
    </div>
  )
}
