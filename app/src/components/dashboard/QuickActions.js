import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card';
import { quickActions } from '#/data/dashboard/mockData';
import * as LucideIcons from 'lucide-react';
export function QuickActions() {
    return (<Card className="border-border bg-card">
      <CardHeader className="pb-2 px-5 pt-5">
        <CardTitle className="text-sm font-semibold text-foreground">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="px-5 pb-5">
        <div className="grid grid-cols-2 gap-3">
          {quickActions.map((action) => {
            const Icon = LucideIcons[action.icon] || LucideIcons.Zap;
            return (<button key={action.label} className="flex flex-col items-center justify-center gap-2 rounded-xl border border-border bg-muted/30 p-4 text-center transition-all duration-200 hover:border-primary/30 hover:bg-primary/5 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <div className="rounded-lg bg-primary/10 p-2.5">
                  <Icon className="w-5 h-5 text-primary"/>
                </div>
                <span className="text-xs font-medium text-foreground">{action.label}</span>
              </button>);
        })}
        </div>
      </CardContent>
    </Card>);
}
//# sourceMappingURL=QuickActions.js.map