import { Card, CardContent } from '#/components/ui/card'
import { Button } from '#/components/ui/button'
import { AlertTriangle } from 'lucide-react'
import { alerts } from '#/data/dashboard/mockData'

export function AlertPanel() {
  if (!alerts.length) return null

  return (
    <Card className="border-destructive/20 bg-destructive/5 dark:bg-destructive/10">
      <CardContent className="px-5 py-4">
        <div className="flex flex-col gap-3">
          {alerts.map((alert) => (
            <div key={alert.id} className="flex items-center gap-3">
              <AlertTriangle
                className={`w-4 h-4 shrink-0 ${alert.severity === 'critical' ? 'text-destructive' : 'text-warning'}`}
              />
              <p className="flex-1 text-sm font-medium">{alert.message}</p>
              <span className="text-xs text-muted-foreground shrink-0">{alert.time}</span>
              <Button variant="outline" size="xs" className="shrink-0 border-border">
                Resolve
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
