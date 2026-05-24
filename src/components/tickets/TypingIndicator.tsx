import { Avatar, AvatarFallback } from '@/components/ui/avatar'

export function TypingIndicator() {
  return (
    <div className="flex gap-3 justify-start">
      <Avatar size="sm">
        <AvatarFallback className="text-xs font-medium">SA</AvatarFallback>
      </Avatar>
      <div className="flex items-center gap-1 rounded-2xl bg-muted px-4 py-3">
        <span className="h-2 w-2 rounded-full bg-muted-foreground/40 animate-bounce [animation-delay:-0.3s]" />
        <span className="h-2 w-2 rounded-full bg-muted-foreground/40 animate-bounce [animation-delay:-0.15s]" />
        <span className="h-2 w-2 rounded-full bg-muted-foreground/40 animate-bounce" />
      </div>
    </div>
  )
}
