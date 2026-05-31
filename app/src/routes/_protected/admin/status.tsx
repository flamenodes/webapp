import { createFileRoute } from '@tanstack/react-router'
import { useSuspenseQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getStatusNodes, addStatusNode, deleteStatusNode, pingAllNodes, pingOneNode } from '@/serverActions/status/status.api'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Plus, Trash2, RefreshCw, Loader2 } from 'lucide-react'
import { Field, FieldLabel, FieldDescription } from '@/components/ui/field'
import { toast } from 'sonner'

export const Route = createFileRoute('/_protected/admin/status')({
  head: () => ({ meta: [{ title: 'Status Monitor | Flame Nodes Admin' }] }),
  component: StatusPage,
})

const STATUS_COLORS = {
  up: 'bg-emerald-500',
  down: 'bg-red-500',
  degraded: 'bg-yellow-500',
  maintenance: 'bg-blue-500',
  unknown: 'bg-zinc-400',
}

const STATUS_BADGE: Record<string, 'default' | 'destructive' | 'secondary' | 'outline'> = {
  up: 'default',
  down: 'destructive',
  degraded: 'secondary',
  maintenance: 'outline',
  unknown: 'outline',
}

function StatusPage() {
  const qc = useQueryClient()
  const { data: nodes } = useSuspenseQuery({ queryKey: ['status-nodes'], queryFn: () => getStatusNodes() })

  const [open, setOpen] = useState(false)
  const [pingingAll, setPingingAll] = useState(false)
  const [pingingId, setPingingId] = useState<string | null>(null)

  const [form, setForm] = useState({ name: '', ip: '', location: '', type: 'VPS', port: '80', protocol: 'http', cpu: '', memory: '', disk: '' })

  const addMutation = useMutation({
    mutationFn: () => addStatusNode({ data: { ...form, port: Number(form.port), cpu: form.cpu ? Number(form.cpu) : null, memory: form.memory ? Number(form.memory) : null, disk: form.disk ? Number(form.disk) : null } }),
    onSuccess: () => { qc.invalidateQueries({ queryKey: ['status-nodes'] }); setOpen(false); setForm({ name: '', ip: '', location: '', type: 'VPS', port: '80', protocol: 'http', cpu: '', memory: '', disk: '' }); toast.success('Node added') },
    onError: () => toast.error('Failed to add node'),
  })

  const deleteMutation = useMutation({
    mutationFn: (id: string) => deleteStatusNode({ data: { id } }),
    onSuccess: () => { qc.invalidateQueries({ queryKey: ['status-nodes'] }); toast.success('Node removed') },
    onError: () => toast.error('Failed to remove node'),
  })

  async function handlePingAll() {
    setPingingAll(true)
    try {
      await pingAllNodes()
      qc.invalidateQueries({ queryKey: ['status-nodes'] })
      toast.success('All nodes pinged')
    } catch {
      toast.error('Ping failed')
    } finally {
      setPingingAll(false)
    }
  }

  async function handlePingOne(id: string) {
    setPingingId(id)
    try {
      await pingOneNode({ data: { id } })
      qc.invalidateQueries({ queryKey: ['status-nodes'] })
    } catch {
      toast.error('Ping failed')
    } finally {
      setPingingId(null)
    }
  }

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="px-5 py-6 max-w-screen-xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Status Monitor</h1>
            <p className="text-sm text-muted-foreground mt-1">Manage and monitor your nodes and servers.</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={handlePingAll} disabled={pingingAll}>
              {pingingAll ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <RefreshCw className="w-4 h-4 mr-2" />}
              Ping All
            </Button>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button size="sm"><Plus className="w-4 h-4 mr-2" />Add Node</Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader><SheetTitle>Add Node</SheetTitle></SheetHeader>
                <div className="space-y-4 mt-6">
                  <Field>
                    <FieldLabel>Name <span className="text-destructive">*</span></FieldLabel>
                    <Input placeholder="e.g. SG Node 1" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                    <FieldDescription>Display name shown in the status table.</FieldDescription>
                  </Field>
                  <Field>
                    <FieldLabel>IP Address <span className="text-destructive">*</span></FieldLabel>
                    <Input placeholder="e.g. 192.168.1.1" value={form.ip} onChange={e => setForm(f => ({ ...f, ip: e.target.value }))} />
                    <FieldDescription>IPv4, IPv6, or hostname used for pinging.</FieldDescription>
                  </Field>
                  <Field>
                    <FieldLabel>Location <span className="text-destructive">*</span></FieldLabel>
                    <Input placeholder="e.g. Singapore" value={form.location} onChange={e => setForm(f => ({ ...f, location: e.target.value }))} />
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
                      <Input type="number" value={form.port} onChange={e => setForm(f => ({ ...f, port: e.target.value }))} />
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
                      <Input type="number" placeholder="4" value={form.cpu} onChange={e => setForm(f => ({ ...f, cpu: e.target.value }))} />
                    </Field>
                    <Field>
                      <FieldLabel>Memory (MB)</FieldLabel>
                      <Input type="number" placeholder="8192" value={form.memory} onChange={e => setForm(f => ({ ...f, memory: e.target.value }))} />
                    </Field>
                    <Field>
                      <FieldLabel>Disk (MB)</FieldLabel>
                      <Input type="number" placeholder="51200" value={form.disk} onChange={e => setForm(f => ({ ...f, disk: e.target.value }))} />
                    </Field>
                  </div>
                  <Button className="w-full mt-2" onClick={() => addMutation.mutate()} disabled={addMutation.isPending || !form.name || !form.ip || !form.location}>
                    {addMutation.isPending ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
                    Add Node
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <div className="rounded-xl border bg-card overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted/50 border-b">
              <tr className="text-left text-muted-foreground">
                {['Status', 'Name', 'IP', 'Location', 'Type', 'Protocol', 'Latency', 'Last Checked', ''].map(h => (
                  <th key={h} className="px-4 py-3 font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {nodes.length === 0 ? (
                <tr><td colSpan={9} className="text-center py-12 text-muted-foreground">No nodes added yet. Click "Add Node" to get started.</td></tr>
              ) : nodes.map(node => (
                <tr key={node.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-4 py-3">
                    <span className={`inline-block w-2.5 h-2.5 rounded-full ${STATUS_COLORS[node.status as keyof typeof STATUS_COLORS] ?? STATUS_COLORS.unknown}`} />
                  </td>
                  <td className="px-4 py-3 font-medium">{node.name}</td>
                  <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{node.ip}</td>
                  <td className="px-4 py-3 text-muted-foreground">{node.location}</td>
                  <td className="px-4 py-3"><Badge variant="outline" className="text-xs">{node.type}</Badge></td>
                  <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{node.protocol}:{node.port}</td>
                  <td className="px-4 py-3">{node.latency != null ? `${node.latency}ms` : '—'}</td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">{node.lastChecked ? new Date(node.lastChecked).toLocaleString() : 'Never'}</td>
                  <td className="px-4 py-3">
                    <div className="flex gap-1">
                      <Button size="icon" variant="ghost" className="h-7 w-7" onClick={() => handlePingOne(node.id)} disabled={pingingId === node.id}>
                        {pingingId === node.id ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <RefreshCw className="w-3.5 h-3.5" />}
                      </Button>
                      <Button size="icon" variant="ghost" className="h-7 w-7 text-destructive hover:text-destructive" onClick={() => deleteMutation.mutate(node.id)} disabled={deleteMutation.isPending}>
                        <Trash2 className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}
