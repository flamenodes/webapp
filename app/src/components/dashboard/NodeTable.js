import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '#/components/ui/table';
import { Button } from '#/components/ui/button';
import { Input } from '#/components/ui/input';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '#/components/ui/sheet';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '#/components/ui/select';
import { Field, FieldLabel, FieldDescription } from '#/components/ui/field';
import { Plus, Loader2, ExternalLink, RefreshCw } from 'lucide-react';
import { toast } from 'sonner';
import { addStatusNode, pingAllNodes } from '#/serverActions/status/status.api';
import { nodeData } from '#/data/dashboard/mockData';
const statusConfig = {
    up: { label: 'Online', class: 'bg-success/15 text-success border-success/20' },
    down: { label: 'Offline', class: 'bg-destructive/15 text-destructive border-destructive/20' },
    degraded: { label: 'Degraded', class: 'bg-warning/15 text-warning border-warning/20' },
    unknown: { label: 'Unknown', class: 'bg-muted text-muted-foreground border-border' },
    online: { label: 'Online', class: 'bg-success/15 text-success border-success/20' },
    offline: { label: 'Offline', class: 'bg-destructive/15 text-destructive border-destructive/20' },
    maintenance: { label: 'Maintenance', class: 'bg-warning/15 text-warning border-warning/20' },
};
function ProgressBar({ value }) {
    const color = value > 80 ? 'bg-destructive' : value > 60 ? 'bg-warning' : 'bg-primary';
    return (<div className="flex items-center gap-2">
      <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
        <div className={`h-full rounded-full ${color} transition-all`} style={{ width: `${value}%` }}/>
      </div>
      <span className="text-xs text-muted-foreground w-8 text-right">{value}%</span>
    </div>);
}
export function NodeTable({ nodes, onNodesChanged }) {
    const navigate = useNavigate();
    const qc = useQueryClient();
    const [open, setOpen] = useState(false);
    const [pinging, setPinging] = useState(false);
    const [form, setForm] = useState({ name: '', ip: '', location: '', type: 'VPS', port: '80', protocol: 'http', cpu: '', memory: '', disk: '' });
    const addMutation = useMutation({
        mutationFn: () => addStatusNode({ data: { ...form, port: Number(form.port), cpu: form.cpu ? Number(form.cpu) : null, memory: form.memory ? Number(form.memory) : null, disk: form.disk ? Number(form.disk) : null } }),
        onSuccess: () => {
            setOpen(false);
            setForm({ name: '', ip: '', location: '', type: 'VPS', port: '80', protocol: 'http', cpu: '', memory: '', disk: '' });
            toast.success('Node added');
            qc.invalidateQueries({ queryKey: ['dashboard-stats'] });
            onNodesChanged?.();
        },
        onError: () => toast.error('Failed to add node'),
    });
    async function handlePingAll() {
        setPinging(true);
        try {
            await pingAllNodes();
            qc.invalidateQueries({ queryKey: ['dashboard-stats'] });
            toast.success('Nodes pinged');
            onNodesChanged?.();
        }
        catch {
            toast.error('Ping failed');
        }
        finally {
            setPinging(false);
        }
    }
    const isReal = nodes !== undefined;
    return (<Card className="border-border bg-card">
      <CardHeader className="pb-2 px-5 pt-5">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <CardTitle className="text-sm font-semibold text-foreground">Node Overview</CardTitle>
          <div className="flex gap-2">
            <Button variant="outline" size="xs" className="border-border text-muted-foreground gap-1" onClick={handlePingAll} disabled={pinging || !isReal}>
              {pinging ? <Loader2 className="w-3 h-3 animate-spin"/> : <RefreshCw className="w-3 h-3"/>}
              Ping
            </Button>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button size="xs" className="gap-1">
                  <Plus className="w-3 h-3"/>
                  Add Node
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader><SheetTitle>Add Node</SheetTitle></SheetHeader>
                <div className="space-y-4 mt-6">
                  <Field>
                    <FieldLabel>Name <span className="text-destructive">*</span></FieldLabel>
                    <Input placeholder="e.g. SG Node 1" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}/>
                    <FieldDescription>Display name shown in the node table.</FieldDescription>
                  </Field>
                  <Field>
                    <FieldLabel>IP Address <span className="text-destructive">*</span></FieldLabel>
                    <Input placeholder="e.g. 192.168.1.1" value={form.ip} onChange={e => setForm(f => ({ ...f, ip: e.target.value }))}/>
                    <FieldDescription>IPv4, IPv6, or hostname used for pinging.</FieldDescription>
                  </Field>
                  <Field>
                    <FieldLabel>Location <span className="text-destructive">*</span></FieldLabel>
                    <Input placeholder="e.g. Singapore" value={form.location} onChange={e => setForm(f => ({ ...f, location: e.target.value }))}/>
                    <FieldDescription>Datacenter or region label.</FieldDescription>
                  </Field>
                  <Field>
                    <FieldLabel>Type</FieldLabel>
                    <Select value={form.type} onValueChange={v => setForm(f => ({ ...f, type: v }))}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        {['VPS', 'Node', 'Game Server', 'Web Server', 'Other'].map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </Field>
                  <div className="grid grid-cols-2 gap-3">
                    <Field>
                      <FieldLabel>Port</FieldLabel>
                      <Input type="number" value={form.port} onChange={e => setForm(f => ({ ...f, port: e.target.value }))}/>
                    </Field>
                    <Field>
                      <FieldLabel>Protocol</FieldLabel>
                      <Select value={form.protocol} onValueChange={v => setForm(f => ({ ...f, protocol: v }))}>
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="http">HTTP</SelectItem>
                          <SelectItem value="https">HTTPS</SelectItem>
                          <SelectItem value="tcp">TCP</SelectItem>
                        </SelectContent>
                      </Select>
                    </Field>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <Field>
                      <FieldLabel>CPU Cores</FieldLabel>
                      <Input type="number" placeholder="e.g. 4" value={form.cpu} onChange={e => setForm(f => ({ ...f, cpu: e.target.value }))}/>
                    </Field>
                    <Field>
                      <FieldLabel>Memory (MB)</FieldLabel>
                      <Input type="number" placeholder="e.g. 8192" value={form.memory} onChange={e => setForm(f => ({ ...f, memory: e.target.value }))}/>
                    </Field>
                    <Field>
                      <FieldLabel>Disk (MB)</FieldLabel>
                      <Input type="number" placeholder="e.g. 51200" value={form.disk} onChange={e => setForm(f => ({ ...f, disk: e.target.value }))}/>
                    </Field>
                  </div>
                  <Button className="w-full mt-2" onClick={() => addMutation.mutate()} disabled={addMutation.isPending || !form.name || !form.ip || !form.location}>
                    {addMutation.isPending ? <Loader2 className="w-4 h-4 mr-2 animate-spin"/> : null}
                    Add Node
                  </Button>
                  <Button variant="ghost" className="w-full gap-2 text-muted-foreground" onClick={() => navigate({ to: '/admin/status' })}>
                    <ExternalLink className="w-3.5 h-3.5"/>
                    Manage all nodes
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-0 pb-0">
        {isReal && nodes.length === 0 ? (<div className="px-5 py-8 text-center text-sm text-muted-foreground">
            No nodes configured. Click "Add Node" to get started.
          </div>) : (<Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                {['Node', 'Location', 'Type', 'Status', 'CPU', 'Memory', 'Disk', 'Latency'].map(h => (<TableHead key={h} className="px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">{h}</TableHead>))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {(isReal ? nodes : nodeData.map(n => ({ ...n, id: n.name, ip: '', cpu: n.cpu, memory: null, disk: null, port: 80, protocol: 'http', lastChecked: null, latency: null }))).map((node) => {
                const sc = statusConfig[node.status] ?? statusConfig.unknown;
                const isPtero = node.type === 'Pterodactyl';
                return (<TableRow key={node.id} className="border-border hover:bg-muted/30 transition-colors">
                    <TableCell className="px-4 py-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium text-sm">{node.name}</p>
                          {isPtero && <span className="text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full px-1.5 py-0.5">Pterodactyl</span>}
                        </div>
                        <p className="text-xs text-muted-foreground">{node.location}</p>
                      </div>
                    </TableCell>
                    <TableCell className="px-4 py-3 text-sm text-muted-foreground">{node.location}</TableCell>
                    <TableCell className="px-4 py-3 text-sm text-muted-foreground">{node.type}</TableCell>
                    <TableCell className="px-4 py-3">
                      <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${sc.class}`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-current"/>
                        {sc.label}
                      </span>
                    </TableCell>
                    <TableCell className="px-4 py-3 text-sm text-muted-foreground">
                      {node.cpu != null ? `${node.cpu} cores` : '—'}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-sm text-muted-foreground">
                      {node.memory != null ? `${Math.round(node.memory / 1024)} GB` : '—'}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-sm text-muted-foreground">
                      {node.disk != null ? `${Math.round(node.disk / 1024)} GB` : '—'}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-sm">
                      {node.latency != null ? `${node.latency}ms` : '—'}
                    </TableCell>
                  </TableRow>);
            })}
            </TableBody>
          </Table>)}
      </CardContent>
    </Card>);
}
//# sourceMappingURL=NodeTable.js.map