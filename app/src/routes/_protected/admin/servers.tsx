import { createFileRoute } from '@tanstack/react-router'
import { useSuspenseQuery, useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { getAdminServers, fetchPteroServerData, pingAdminServer, updateAdminServer, deleteAdminServer } from '@/serverActions/admin/servers.api'
import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { Field, FieldLabel, FieldDescription } from '@/components/ui/field'
import {
  Server, RefreshCw, Loader2, Wifi, WifiOff, Activity,
  Cpu, HardDrive, MemoryStick, ExternalLink, Settings, Search,
  Ban, Play, Trash2,
} from 'lucide-react'
import { toast } from 'sonner'

export const Route = createFileRoute('/_protected/admin/servers')({
  head: () => ({ meta: [{ title: 'Servers | Flame Nodes Admin' }] }),
  component: ServersPage,
})

const statusConfig: Record<string, { label: string; dot: string; badge: 'default' | 'destructive' | 'secondary' | 'outline' }> = {
  ACTIVE: { label: 'Active', dot: 'bg-emerald-500', badge: 'default' },
  PROCESSING: { label: 'Deploying', dot: 'bg-blue-500', badge: 'secondary' },
  PENDING_MANUAL: { label: 'Pending', dot: 'bg-orange-500', badge: 'outline' },
  SUSPENDED: { label: 'Suspended', dot: 'bg-destructive', badge: 'destructive' },
  TERMINATED: { label: 'Terminated', dot: 'bg-muted-foreground', badge: 'outline' },
}

function formatBytes(bytes: number) {
  if (!bytes) return '0 B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return `${(bytes / Math.pow(k, i)).toFixed(1)} ${sizes[i]}`
}

type AdminServer = Awaited<ReturnType<typeof getAdminServers>>[number]

function PteroDetails({ serverId }: { serverId: string }) {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['ptero-detail', serverId],
    queryFn: () => fetchPteroServerData({ data: { serverId } }),
    retry: false,
  })

  if (isLoading) {
    return (
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Loader2 className="w-3.5 h-3.5 animate-spin" /> Fetching Pterodactyl data…
      </div>
    )
  }
  if (error || !data) {
    return <p className="text-sm text-destructive">Could not fetch Pterodactyl data.</p>
  }

  const stateColor: Record<string, string> = {
    running: 'text-emerald-500',
    starting: 'text-blue-500',
    stopping: 'text-orange-500',
    offline: 'text-muted-foreground',
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-muted-foreground">Panel State</p>
          <p className={`text-sm font-semibold capitalize ${stateColor[data.state ?? ''] ?? 'text-muted-foreground'}`}>
            {data.state ?? 'Unknown'}
          </p>
        </div>
        <Button size="icon" variant="ghost" className="h-7 w-7" onClick={() => refetch()}>
          <RefreshCw className="w-3.5 h-3.5" />
        </Button>
      </div>

      {data.usage && (
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg border border-border bg-muted/30 p-3">
            <div className="flex items-center gap-1.5 mb-1">
              <Cpu className="w-3.5 h-3.5 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">CPU</span>
            </div>
            <p className="text-sm font-semibold">{data.usage.cpu.toFixed(1)}%</p>
            {data.limits?.cpu ? <p className="text-xs text-muted-foreground">/ {data.limits.cpu}%</p> : null}
          </div>
          <div className="rounded-lg border border-border bg-muted/30 p-3">
            <div className="flex items-center gap-1.5 mb-1">
              <MemoryStick className="w-3.5 h-3.5 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">RAM</span>
            </div>
            <p className="text-sm font-semibold">{formatBytes(data.usage.memory)}</p>
            {data.limits?.memory ? <p className="text-xs text-muted-foreground">/ {data.limits.memory} MB</p> : null}
          </div>
          <div className="rounded-lg border border-border bg-muted/30 p-3">
            <div className="flex items-center gap-1.5 mb-1">
              <HardDrive className="w-3.5 h-3.5 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">Disk</span>
            </div>
            <p className="text-sm font-semibold">{formatBytes(data.usage.disk)}</p>
            {data.limits?.disk ? <p className="text-xs text-muted-foreground">/ {data.limits.disk} MB</p> : null}
          </div>
          <div className="rounded-lg border border-border bg-muted/30 p-3">
            <div className="flex items-center gap-1.5 mb-1">
              <Activity className="w-3.5 h-3.5 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">Network</span>
            </div>
            <p className="text-sm font-semibold">↓ {formatBytes(data.usage.network_rx)}</p>
            <p className="text-xs text-muted-foreground">↑ {formatBytes(data.usage.network_tx)}</p>
          </div>
        </div>
      )}

      {data.identifier && (
        <a
          href={`${(import.meta as any).env?.VITE_PTERO_URL ?? ''}/server/${data.identifier}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-primary hover:underline"
        >
          <ExternalLink className="w-3 h-3" />
          Open in Pterodactyl Panel
        </a>
      )}
    </div>
  )
}

function ServerSheet({ server, onClose }: { server: AdminServer; onClose: () => void }) {
  const qc = useQueryClient()
  const isPtero = server.deployMode === 'PTERODACTYL'
  const resources = (server.resources as any) ?? {}
  const isSuspended = server.status === 'SUSPENDED'

  const [form, setForm] = useState({
    ip: server.ip ?? '',
    port: server.port?.toString() ?? '',
    label: resources.label ?? '',
    cpu: resources.cpu?.toString() ?? '',
    memory: resources.memory?.toString() ?? '',
    swap: resources.swap?.toString() ?? '0',
    disk: resources.disk?.toString() ?? '',
    databases: resources.databases?.toString() ?? '0',
    backups: resources.backups?.toString() ?? '0',
    allocations: resources.allocations?.toString() ?? '1',
  })

  const [pingResult, setPingResult] = useState<{ online: boolean } | null>(null)

  const pingMutation = useMutation({
    mutationFn: () => pingAdminServer({ data: { serverId: server.id } }),
    onSuccess: (res) => setPingResult({ online: res.online }),
    onError: () => toast.error('Ping failed'),
  })

  const saveMutation = useMutation({
    mutationFn: () =>
      updateAdminServer({
        data: {
          serverId: server.id,
          ip: !isPtero ? (form.ip || undefined) : undefined,
          port: !isPtero && form.port ? Number(form.port) : undefined,
          label: form.label || undefined,
          resources: {
            cpu: form.cpu ? Number(form.cpu) : undefined,
            memory: form.memory ? Number(form.memory) : undefined,
            swap: form.swap !== '' ? Number(form.swap) : undefined,
            disk: form.disk ? Number(form.disk) : undefined,
            databases: form.databases !== '' ? Number(form.databases) : undefined,
            backups: form.backups !== '' ? Number(form.backups) : undefined,
            allocations: form.allocations !== '' ? Number(form.allocations) : undefined,
          },
        },
      }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['admin-servers'] })
      qc.invalidateQueries({ queryKey: ['ptero-detail', server.id] })
      toast.success(isPtero ? 'Server updated and synced to Pterodactyl' : 'Server updated')
      onClose()
    },
    onError: () => toast.error('Failed to update server'),
  })

  const statusMutation = useMutation({
    mutationFn: (newStatus: 'SUSPENDED' | 'ACTIVE') =>
      updateAdminServer({ data: { serverId: server.id, status: newStatus } }),
    onSuccess: (_, newStatus) => {
      qc.invalidateQueries({ queryKey: ['admin-servers'] })
      toast.success(newStatus === 'SUSPENDED' ? 'Server suspended' : 'Server unsuspended')
      onClose()
    },
    onError: () => toast.error('Failed to update server status'),
  })

  const deleteMutation = useMutation({
    mutationFn: () => deleteAdminServer({ data: { serverId: server.id } }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['admin-servers'] })
      toast.success('Server deleted successfully')
      onClose()
    },
    onError: () => toast.error('Failed to delete server'),
  })

  const sc = statusConfig[server.status] ?? { label: server.status, dot: 'bg-muted-foreground', badge: 'outline' as const }

  return (
    <Sheet open onOpenChange={(o) => !o && onClose()}>
      <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <Server className="w-4 h-4" />
            {server.name}
          </SheetTitle>
        </SheetHeader>

        <div className="space-y-6 mt-6">
          {/* Meta + status controls */}
          <div className="rounded-lg border border-border p-3 space-y-3">
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">Status</p>
                <div className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${sc.dot}`} />
                  <Badge variant={sc.badge} className="text-xs">{sc.label}</Badge>
                </div>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">Type</p>
                <Badge variant="outline" className="text-xs">{server.deployMode}</Badge>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">Product</p>
                <p className="text-sm font-medium truncate">{server.productName}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">Owner</p>
                <p className="text-sm font-medium truncate">{server.user?.name ?? server.user?.email ?? '—'}</p>
              </div>
            </div>

            {/* Suspend / Unsuspend */}
            {server.status !== 'TERMINATED' && (
              <div className="pt-1 border-t border-border">
                {isSuspended ? (
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-7 text-xs text-emerald-600 border-emerald-500/30 hover:bg-emerald-500/10"
                    onClick={() => statusMutation.mutate('ACTIVE')}
                    disabled={statusMutation.isPending}
                  >
                    {statusMutation.isPending ? <Loader2 className="w-3 h-3 mr-1.5 animate-spin" /> : <Play className="w-3 h-3 mr-1.5" />}
                    Unsuspend{isPtero ? ' (syncs to Pterodactyl)' : ''}
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-7 text-xs text-destructive border-destructive/30 hover:bg-destructive/10"
                    onClick={() => statusMutation.mutate('SUSPENDED')}
                    disabled={statusMutation.isPending}
                  >
                    {statusMutation.isPending ? <Loader2 className="w-3 h-3 mr-1.5 animate-spin" /> : <Ban className="w-3 h-3 mr-1.5" />}
                    Suspend{isPtero ? ' (syncs to Pterodactyl)' : ''}
                  </Button>
                )}
              </div>
            )}
          </div>

          {/* Pterodactyl live data */}
          {isPtero && (
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Live Panel Data</p>
              <PteroDetails serverId={server.id} />
            </div>
          )}

          {/* Ping (custom only) */}
          {!isPtero && server.ip && (
            <div className="flex items-center gap-3 pt-1">
              <Button size="sm" variant="outline" onClick={() => pingMutation.mutate()} disabled={pingMutation.isPending}>
                {pingMutation.isPending ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Activity className="w-4 h-4 mr-2" />}
                Ping Server
              </Button>
              {pingResult !== null && (
                pingResult.online
                  ? <span className="flex items-center gap-1.5 text-sm text-emerald-500"><Wifi className="w-4 h-4" /> Online</span>
                  : <span className="flex items-center gap-1.5 text-sm text-destructive"><WifiOff className="w-4 h-4" /> Offline</span>
              )}
            </div>
          )}

          {/* Label */}
          <Field>
            <FieldLabel>Label / Display Name</FieldLabel>
            <Input placeholder="e.g. Production MC Server" value={form.label} onChange={(e) => setForm((f) => ({ ...f, label: e.target.value }))} />
            <FieldDescription>Custom display name for this server</FieldDescription>
          </Field>

          {/* IP / Port for custom servers */}
          {!isPtero && (
            <div className="grid grid-cols-2 gap-4">
              <Field>
                <FieldLabel>IP Address</FieldLabel>
                <Input className="font-mono" placeholder="0.0.0.0" value={form.ip} onChange={(e) => setForm((f) => ({ ...f, ip: e.target.value }))} />
              </Field>
              <Field>
                <FieldLabel>Port</FieldLabel>
                <Input className="font-mono" placeholder="25565" type="number" value={form.port} onChange={(e) => setForm((f) => ({ ...f, port: e.target.value }))} />
              </Field>
            </div>
          )}

          {/* Resource specs — shown for all, synced to Pterodactyl if applicable */}
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold text-foreground mb-1">
                Resource Specifications
              </p>
              {isPtero && (
                <p className="text-xs text-muted-foreground">Changes will sync to Pterodactyl panel</p>
              )}
            </div>
            <div className="grid grid-cols-3 gap-4">
              <Field>
                <FieldLabel>CPU (%)</FieldLabel>
                <Input placeholder="100" type="number" value={form.cpu} onChange={(e) => setForm((f) => ({ ...f, cpu: e.target.value }))} />
              </Field>
              <Field>
                <FieldLabel>RAM (MB)</FieldLabel>
                <Input placeholder="1024" type="number" value={form.memory} onChange={(e) => setForm((f) => ({ ...f, memory: e.target.value }))} />
              </Field>
              <Field>
                <FieldLabel>Swap (MB)</FieldLabel>
                <Input placeholder="0" type="number" value={form.swap} onChange={(e) => setForm((f) => ({ ...f, swap: e.target.value }))} />
              </Field>
              <Field>
                <FieldLabel>Disk (MB)</FieldLabel>
                <Input placeholder="10240" type="number" value={form.disk} onChange={(e) => setForm((f) => ({ ...f, disk: e.target.value }))} />
              </Field>
              <Field>
                <FieldLabel>Databases</FieldLabel>
                <Input placeholder="0" type="number" value={form.databases} onChange={(e) => setForm((f) => ({ ...f, databases: e.target.value }))} />
              </Field>
              <Field>
                <FieldLabel>Backups</FieldLabel>
                <Input placeholder="0" type="number" value={form.backups} onChange={(e) => setForm((f) => ({ ...f, backups: e.target.value }))} />
              </Field>
              {isPtero && (
                <Field>
                  <FieldLabel>Allocations</FieldLabel>
                  <Input placeholder="1" type="number" value={form.allocations} onChange={(e) => setForm((f) => ({ ...f, allocations: e.target.value }))} />
                </Field>
              )}
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <Button className="flex-1" onClick={() => saveMutation.mutate()} disabled={saveMutation.isPending}>
              {saveMutation.isPending && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
              Save Changes
            </Button>

            <Button
              variant="destructive"
              className="flex-1"
              onClick={() => {
                if (confirm(`Are you sure you want to delete this server? ${isPtero ? 'It will also be deleted from Pterodactyl.' : ''}`)) {
                  deleteMutation.mutate()
                }
              }}
              disabled={deleteMutation.isPending}
            >
              {deleteMutation.isPending ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Trash2 className="w-4 h-4 mr-2" />}
              Delete
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

function ServersPage() {
  const qc = useQueryClient()
  const { data: servers } = useSuspenseQuery({
    queryKey: ['admin-servers'],
    queryFn: () => getAdminServers(),
  })

  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState<AdminServer | null>(null)

  const filtered = servers.filter((s) => {
    const q = search.toLowerCase()
    return (
      s.name.toLowerCase().includes(q) ||
      s.user?.email?.toLowerCase().includes(q) ||
      s.user?.name?.toLowerCase().includes(q) ||
      s.ip?.includes(q) ||
      s.status.toLowerCase().includes(q)
    )
  })

  const counts = {
    total: servers.length,
    active: servers.filter((s) => s.status === 'ACTIVE').length,
    ptero: servers.filter((s) => s.deployMode === 'PTERODACTYL').length,
    custom: servers.filter((s) => s.deployMode === 'CUSTOM').length,
  }

  return (
    <main className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Servers</h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            {counts.total} total · {counts.active} active · {counts.ptero} Pterodactyl · {counts.custom} custom
          </p>
        </div>
        <Button
          size="sm"
          variant="outline"
          onClick={() => qc.invalidateQueries({ queryKey: ['admin-servers'] })}
        >
          <RefreshCw className="w-3.5 h-3.5 mr-1.5" />
          Refresh
        </Button>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
        <Input
          className="pl-9 h-8 text-sm"
          placeholder="Search by name, user, IP…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="rounded-xl border border-border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted/40 border-b border-border text-left text-muted-foreground text-xs">
            <tr>
              {['Status', 'Name', 'Owner', 'Type', 'IP / Port', 'Product', 'Expires', ''].map((h) => (
                <th key={h} className="px-4 py-3 font-medium">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={8} className="text-center py-12 text-muted-foreground">
                  {search ? 'No servers match your search.' : 'No servers yet.'}
                </td>
              </tr>
            ) : (
              filtered.map((server) => {
                const sc = statusConfig[server.status] ?? { label: server.status, dot: 'bg-muted-foreground', badge: 'outline' as const }
                return (
                  <tr key={server.id} className="hover:bg-muted/30 transition-colors">
                    <td className="px-4 py-3">
                      <span className={`inline-block w-2.5 h-2.5 rounded-full ${sc.dot}`} />
                    </td>
                    <td className="px-4 py-3 font-medium max-w-[160px] truncate">
                      {(server.resources as any)?.label
                        ? <span title={server.name}>{(server.resources as any).label}</span>
                        : server.name}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground text-xs max-w-[140px] truncate">
                      {server.user?.name ?? server.user?.email ?? '—'}
                    </td>
                    <td className="px-4 py-3">
                      <Badge variant="outline" className="text-xs">{server.deployMode}</Badge>
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                      {server.ip ? `${server.ip}:${server.port}` : '—'}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground text-xs max-w-[120px] truncate">
                      {server.productName}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground text-xs">
                      {server.expiresAt ? new Date(server.expiresAt).toLocaleDateString() : '—'}
                    </td>
                    <td className="px-4 py-3">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-7 w-7"
                        onClick={() => setSelected(server)}
                      >
                        <Settings className="w-3.5 h-3.5" />
                      </Button>
                    </td>
                  </tr>
                )
              })
            )}
          </tbody>
        </table>
      </div>

      {selected && (
        <ServerSheet server={selected} onClose={() => setSelected(null)} />
      )}
    </main>
  )
}
