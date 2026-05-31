import { useState } from 'react';
import { Checkbox } from '#/components/ui/checkbox';
import { Badge } from '#/components/ui/badge';
export function AddonCard({ addon, onToggle }) {
    const [selected, setSelected] = useState(false);
    const handleToggle = () => {
        const newState = !selected;
        setSelected(newState);
        onToggle?.(addon.id, newState);
    };
    return (<div className="rounded-2xl border border-border bg-card p-5 shadow-sm dark:border-dark-border">
      <div className="flex items-start gap-4">
        <Checkbox checked={selected} onCheckedChange={handleToggle} className="mt-1"/>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-foreground">{addon.name}</h3>
            {addon.recommended && (<Badge variant="secondary" className="bg-primary-100 text-primary-700 dark:bg-primary-950 dark:text-primary-300">
                Recommended
              </Badge>)}
          </div>
          <p className="mt-1 text-sm text-muted-foreground">{addon.description}</p>
        </div>
        <div className="text-right">
          <div className="font-semibold text-foreground">
            {addon.currency}
            {addon.price}
          </div>
          <p className="text-xs text-muted-foreground">{addon.period}</p>
        </div>
      </div>
    </div>);
}
//# sourceMappingURL=AddonCard.js.map