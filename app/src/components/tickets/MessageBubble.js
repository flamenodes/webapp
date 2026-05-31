import { Avatar, AvatarFallback } from '@/components/ui/avatar';
export function MessageBubble({ message }) {
    const isIncoming = message.type === 'incoming';
    return (<div className={`flex gap-3 ${isIncoming ? 'justify-start' : 'justify-end'}`}>
      {isIncoming && (<Avatar size="sm">
          <AvatarFallback className="text-xs font-medium">{message.sender?.avatar}</AvatarFallback>
        </Avatar>)}
      <div className={`flex flex-col gap-1 ${isIncoming ? 'items-start' : 'items-end'} max-w-[85%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[65%] xl:max-w-[60%]`}>
        <div className={`rounded-2xl px-4 py-3 ${isIncoming
            ? 'bg-muted text-foreground'
            : 'bg-primary text-primary-foreground'}`}>
          <p className="text-sm leading-relaxed">{message.content}</p>
        </div>
        <span className="text-[10px] text-muted-foreground px-1">{message.timestamp}</span>
      </div>
    </div>);
}
//# sourceMappingURL=MessageBubble.js.map