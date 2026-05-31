import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
export function DualAvatar({ primary, secondary }) {
    if (!primary && !secondary) {
        return (<Avatar size="sm">
        <AvatarFallback>?</AvatarFallback>
      </Avatar>);
    }
    // If only one avatar, show it normally
    if (!secondary) {
        return (<Avatar size="sm">
        {primary?.image && <AvatarImage src={primary.image} alt={primary?.name}/>}
        <AvatarFallback className="bg-muted text-xs font-medium">
          {primary?.name.substring(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>);
    }
    // If two avatars, show them in a group effect
    const getPrimaryInitials = () => primary?.name.substring(0, 1).toUpperCase() || '?';
    const getSecondaryInitials = () => secondary?.name.substring(0, 1).toUpperCase() || '?';
    return (<div className="relative h-10 w-10">
      {/* Primary avatar (larger, background) */}
      <div className="absolute inset-0">
        <Avatar size="sm" className="h-full w-full">
          {primary?.image && <AvatarImage src={primary.image} alt={primary?.name}/>}
          <AvatarFallback className="bg-primary text-xs font-medium text-primary-foreground">
            {getPrimaryInitials()}
          </AvatarFallback>
        </Avatar>
      </div>

      {/* Secondary avatar (smaller, overlapping bottom-right) */}
      <div className="absolute bottom-0 right-0 h-6 w-6 rounded-full border-2 border-card">
        <Avatar className="h-full w-full">
          {secondary?.image && <AvatarImage src={secondary.image} alt={secondary?.name}/>}
          <AvatarFallback className="text-xs font-bold bg-secondary text-secondary-foreground">
            {getSecondaryInitials()}
          </AvatarFallback>
        </Avatar>
      </div>
    </div>);
}
//# sourceMappingURL=DualAvatar.js.map