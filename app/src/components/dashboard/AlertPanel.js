import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';
import { alerts as mockAlerts } from '#/data/dashboard/mockData';
export function AlertPanel({ alerts }) {
    const items = alerts ?? mockAlerts;
    return (<Card className={items.length > 0 ? 'border-destructive/20 bg-destructive/5 dark:bg-destructive/10' : 'border-border bg-card'}>
      <CardHeader className="pb-2 px-5 pt-5">
        <CardTitle className="text-sm font-semibold text-foreground flex items-center gap-2">
          {items.length > 0
            ? <AlertTriangle className="w-4 h-4 text-destructive"/>
            : <CheckCircle2 className="w-4 h-4 text-emerald-500"/>}
          {items.length > 0 ? `${items.length} Active Alert${items.length > 1 ? 's' : ''}` : 'All Clear'}
        </CardTitle>
      </CardHeader>
      <CardContent className="px-5 pb-5 pt-0">
        {items.length === 0 ? (<p className="text-sm text-muted-foreground">No alerts at this time.</p>) : (<div className="flex flex-col gap-3">
            {items.map((alert) => (<div key={alert.id} className="flex items-start gap-3">
                <AlertTriangle className={`w-4 h-4 mt-0.5 shrink-0 ${alert.severity === 'critical' ? 'text-destructive' : 'text-warning'}`}/>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium leading-snug">{alert.message}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{alert.time}</p>
                </div>
              </div>))}
          </div>)}
      </CardContent>
    </Card>);
}
//# sourceMappingURL=AlertPanel.js.map