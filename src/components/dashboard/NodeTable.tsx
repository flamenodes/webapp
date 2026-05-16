import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '#/components/ui/table'
import { Button } from '#/components/ui/button'
import { MoreHorizontal } from 'lucide-react'
import { nodeData } from '#/data/dashboard/mockData'

const statusConfig = {
  online: { label: 'Online', class: 'bg-success/15 text-success border-success/20' },
  offline: { label: 'Offline', class: 'bg-destructive/15 text-destructive border-destructive/20' },
  maintenance: { label: 'Maintenance', class: 'bg-warning/15 text-warning border-warning/20' },
}

function ProgressBar({ value }: { value: number }) {
  const color = value > 80 ? 'bg-destructive' : value > 60 ? 'bg-warning' : 'bg-primary'
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
        <div className={`h-full rounded-full ${color} transition-all`} style={{ width: `${value}%` }} />
      </div>
      <span className="text-xs text-muted-foreground w-8 text-right">{value}%</span>
    </div>
  )
}

export function NodeTable() {
  return (
    <Card className="border-border bg-card">
      <CardHeader className="pb-2 px-5 pt-5">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-semibold text-foreground">Node Overview</CardTitle>
          <Button variant="outline" size="xs" className="border-border text-muted-foreground">
            View All
          </Button>
        </div>
      </CardHeader>
      <CardContent className="px-0 pb-0">
        <Table>
          <TableHeader>
            <TableRow className="border-border hover:bg-transparent">
              <TableHead className="px-5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Node</TableHead>
              <TableHead className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Location</TableHead>
              <TableHead className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Status</TableHead>
              <TableHead className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Servers</TableHead>
              <TableHead className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">CPU</TableHead>
              <TableHead className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Memory</TableHead>
              <TableHead className="w-10" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {nodeData.map((node) => {
              const sc = statusConfig[node.status as keyof typeof statusConfig]
              return (
                <TableRow key={node.name} className="border-border hover:bg-muted/30 transition-colors">
                  <TableCell className="px-5 py-3.5 font-mono text-sm font-medium">{node.name}</TableCell>
                  <TableCell className="py-3.5 text-sm text-muted-foreground">{node.location}</TableCell>
                  <TableCell className="py-3.5">
                    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${sc.class}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current" />
                      {sc.label}
                    </span>
                  </TableCell>
                  <TableCell className="py-3.5 text-sm font-semibold">{node.servers}</TableCell>
                  <TableCell className="py-3.5 min-w-28"><ProgressBar value={node.cpu} /></TableCell>
                  <TableCell className="py-3.5 min-w-28"><ProgressBar value={node.memory} /></TableCell>
                  <TableCell className="py-3.5 pr-5">
                    <Button variant="ghost" size="icon-xs" className="text-muted-foreground hover:text-foreground">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
