import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '#/components/ui/table';
import { Badge } from '#/components/ui/badge';
import { Server } from 'lucide-react';
function MemBar({ used, total, overallocate }) {
    const cap = total * (1 + overallocate / 100);
    const pct = Math.min(Math.round((used / cap) * 100), 100);
    const color = pct > 90 ? 'bg-destructive' : pct > 70 ? 'bg-warning' : 'bg-primary';
    return (<div className="flex items-center gap-2 min-w-28">
      <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
        <div className={`h-full rounded-full ${color} transition-all`} style={{ width: `${pct}%` }}/>
      </div>
      <span className="text-xs text-muted-foreground w-8 text-right">{pct}%</span>
    </div>);
}
export function PteroNodeTable({ nodes }) {
    if (nodes.length === 0)
        return null;
    return (<Card className="border-border bg-card">
      <CardHeader className="pb-2 px-5 pt-5">
        <div className="flex items-center gap-2">
          <Server className="w-4 h-4 text-muted-foreground"/>
          <CardTitle className="text-sm font-semibold text-foreground">
            Pterodactyl Nodes
            <span className="ml-2 text-xs font-normal text-muted-foreground">({nodes.length})</span>
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="px-0 pb-0">
        <Table>
          <TableHeader>
            <TableRow className="border-border hover:bg-transparent">
              {['Node', 'FQDN', 'Status', 'Memory (MB)', 'Disk (MB)', 'Ports'].map(h => (<TableHead key={h} className="px-5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">{h}</TableHead>))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {nodes.map(node => (<TableRow key={node.id} className="border-border hover:bg-muted/30 transition-colors">
                <TableCell className="px-5 py-3.5">
                  <div>
                    <p className="font-medium text-sm">{node.name}</p>
                    {node.description && (<p className="text-xs text-muted-foreground truncate max-w-40">{node.description}</p>)}
                  </div>
                </TableCell>
                <TableCell className="py-3.5 font-mono text-xs text-muted-foreground">
                  {node.scheme}://{node.fqdn}
                </TableCell>
                <TableCell className="py-3.5">
                  {node.maintenance_mode ? (<Badge variant="outline" className="bg-warning/10 text-warning border-warning/20 text-xs">
                      Maintenance
                    </Badge>) : (<Badge variant="outline" className="bg-success/10 text-success border-success/20 text-xs">
                      Online
                    </Badge>)}
                </TableCell>
                <TableCell className="py-3.5">
                  <div className="space-y-0.5">
                    <MemBar used={0} total={node.memory} overallocate={node.memory_overallocate}/>
                    <p className="text-xs text-muted-foreground">{node.memory.toLocaleString()} MB</p>
                  </div>
                </TableCell>
                <TableCell className="py-3.5">
                  <div className="space-y-0.5">
                    <MemBar used={0} total={node.disk} overallocate={node.disk_overallocate}/>
                    <p className="text-xs text-muted-foreground">{(node.disk / 1024).toFixed(0)} GB</p>
                  </div>
                </TableCell>
                <TableCell className="py-3.5">
                  <div className="text-xs text-muted-foreground space-y-0.5">
                    <p>HTTP: {node.daemon_listen}</p>
                    <p>SFTP: {node.daemon_sftp}</p>
                  </div>
                </TableCell>
              </TableRow>))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>);
}
//# sourceMappingURL=PteroNodeTable.js.map