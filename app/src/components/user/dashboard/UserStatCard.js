import * as LucideIcons from 'lucide-react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { Card, CardContent } from '#/components/ui/card';
const trendConfig = {
    up: { text: 'text-success', Icon: TrendingUp },
    down: { text: 'text-destructive', Icon: TrendingDown },
    stable: { text: 'text-muted-foreground', Icon: Minus },
    warning: { text: 'text-warning', Icon: Minus },
};
export function UserStatCard({ icon, label, value, change, trend }) {
    const Icon = LucideIcons[icon] ?? LucideIcons.Activity;
    const { text, Icon: TrendIcon } = trendConfig[trend];
    return (<Card className="relative overflow-hidden gap-0 py-0 border-border bg-card hover:border-primary/25 hover:-translate-y-1 transition-all duration-300 group">
      {/* Hover glow */}
      <div className="pointer-events-none absolute -top-6 -left-6 w-24 h-24 rounded-full bg-primary/8 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
      <CardContent className="p-5 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="rounded-xl bg-primary/10 p-2 shadow-[0_0_12px_var(--primary)/15]">
              <Icon className="w-4 h-4 text-primary"/>
            </div>
            <span className="text-xs font-medium text-muted-foreground">{label}</span>
          </div>
          <TrendIcon className={`w-3.5 h-3.5 shrink-0 ${text}`}/>
        </div>
        <p className="text-2xl md:text-3xl font-extrabold tracking-tight leading-none">{value}</p>
        <span className={`text-xs font-medium ${text}`}>{change}</span>
      </CardContent>
    </Card>);
}
//# sourceMappingURL=UserStatCard.js.map