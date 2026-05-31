import { Copy, Star, Clock, Check, UserPlus, X } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
export function ChatTopBar({ ticketId, ticketTitle, userName, userAvatar, userImage, assignedToAvatar, assignedToImage, status, isAssigned, onJoin, onResolve, onClose, showResolveButton = true, showJoinButton = false, showCloseButton = false, }) {
    const handleCopyId = () => {
        navigator.clipboard.writeText(ticketId);
    };
    const getStatusStyles = () => {
        switch (status) {
            case 'open':
                return 'bg-primary/10 text-primary border-primary/20';
            case 'pending':
                return 'bg-orange-500/10 text-orange-500 border-orange-500/20 dark:bg-orange-500/10 dark:text-orange-500';
            case 'closed':
                return 'bg-muted text-muted-foreground border-border';
        }
    };
    return (<div className="flex items-center justify-between border-b bg-card px-4 py-3 md:px-6">
      <div className="flex items-center gap-3">
        <div className="flex -space-x-2">
          <Avatar className="border-2 border-background">
            {userImage && <AvatarImage src={userImage} alt={userName}/>}
            <AvatarFallback className="bg-primary/10 text-primary font-semibold text-xs">
              {userAvatar}
            </AvatarFallback>
          </Avatar>
          {assignedToAvatar && (<Avatar className="border-2 border-background">
              {assignedToImage && <AvatarImage src={assignedToImage} alt="Assigned"/>}
              <AvatarFallback className="bg-muted text-foreground font-semibold text-xs">
                {assignedToAvatar}
              </AvatarFallback>
            </Avatar>)}
        </div>
        <div>
          <h2 className="text-sm font-semibold">{ticketTitle}</h2>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">{userName}</span>
            <span className="text-xs text-muted-foreground">•</span>
            <button onClick={handleCopyId} className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors">
              {ticketId}
              <Copy className="h-3 w-3"/>
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Badge variant="outline" className={getStatusStyles()}>
          {status}
        </Badge>
        <Button variant="ghost" size="icon-sm">
          <Star className="h-4 w-4"/>
        </Button>
        <Button variant="ghost" size="icon-sm">
          <Clock className="h-4 w-4"/>
        </Button>
        {showJoinButton && !isAssigned && (<Button onClick={onJoin} size="sm" className="gap-1" variant="outline">
            <UserPlus className="h-4 w-4"/>
            Join
          </Button>)}
        {showResolveButton && isAssigned && (<Button onClick={onResolve} size="sm" className="gap-1">
            <Check className="h-4 w-4"/>
            Resolve
          </Button>)}
        {showCloseButton && status !== 'closed' && (<Button onClick={onClose} size="sm" variant="outline" className="gap-1 text-muted-foreground hover:text-destructive hover:border-destructive/50">
            <X className="h-4 w-4"/>
            Close
          </Button>)}
      </div>
    </div>);
}
//# sourceMappingURL=ChatTopBar.js.map