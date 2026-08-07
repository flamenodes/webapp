import { createFileRoute } from '@tanstack/react-router'
import { useSuspenseQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getUserServersWithDetails, pingServer, updateCustomServer, renewServer, reinstallServer } from '@/serverActions/user/servers.api'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import {
  Server, ExternalLink, RefreshCw, Cpu, HardDrive,
  Wifi, WifiOff, Settings, Activity, Network, Database, Clock, ExternalLinkIcon
} from 'lucide-react'
import { formatDistanceToNow } from '@/lib/date-utils'
import { useState } from 'react'
import { toast } from 'sonner'
import { differenceInDays, isPast } from 'date-fns'
import { useNavigate } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/user/servers')({
  head: () => ({ meta: [{ title: 'My Servers | Flame Nodes' }] }),
  component: ServersPage,
})

const statusConfig: Record<string, { label: string; class: string; dot: string }> = {
  ACTIVE: { label: 'Active', class: 'bg-emerald-500/15 text-emerald-500 border-emerald-500/20', dot: 'bg-emerald-500' },
  PROCESSING: { label: 'Deploying', class: 'bg-blue-500/15 text-blue-500 border-blue-500/20', dot: 'bg-blue-500' },
  PENDING_MANUAL: { label: 'Pending', class: 'bg-orange-500/15 text-orange-500 border-orange-500/20', dot: 'bg-orange-500' },
  SUSPENDED: { label: 'Suspended', class: 'bg-destructive/15 text-destructive border-destructive/20', dot: 'bg-destructive' },
  TERMINATED: { label: 'Terminated', class: 'bg-muted text-muted-foreground border-border', dot: 'bg-muted-foreground' },
}

const pteroStateConfig: Record<string, { label: string; color: string }> = {
  running: { label: 'Running', color: 'text-emerald-500' },
  starting: { label: 'Starting', color: 'text-blue-500' },
  stopping: { label: 'Stopping', color: 'text-orange-500' },
  offline: { label: 'Offline', color: 'text-muted-foreground' },
}

function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return `${(bytes / Math.pow(k, i)).toFixed(1)} ${sizes[i]}`
}

function PingButton({ serverId }: { serverId: string }) {
  const [pingResult, setPingResult] = useState<{ online: boolean } | null>(null)

  const pingMutation = useMutation({
    mutationFn: () => pingServer({ data: { serverId } }),
    onSuccess: (res) => {
      if (res.success) {
        setPingResult({ online: res.success })
      }
    },
  })

  return (
    <div className="flex items-center gap-2">
      <Button
        size="sm"
        variant="outline"
        className="h-7 text-xs"
        onClick={() => pingMutation.mutate()}
        disabled={pingMutation.isPending}
      >
        {pingMutation.isPending ? (
          <RefreshCw className="w-3 h-3 mr-1 animate-spin" />
        ) : (
          <Activity className="w-3 h-3 mr-1" />
        )}
        Ping
      </Button>
      {pingResult !== null && (
        pingResult.online ? (
          <span className="flex items-center gap-1 text-xs text-emerald-500">
            <Wifi className="w-3 h-3" /> Online
          </span>
        ) : (
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <WifiOff className="w-3 h-3" /> Offline
          </span>
        )
      )}
    </div>
  )
}

function EditCustomServerSheet({
  server,
  open,
  onClose,
}: {
  server: any
  open: boolean
  onClose: () => void
}) {
  const qc = useQueryClient()
  const resources = (server.resources) || {}
  const [form, setForm] = useState({
    ip: server.ip || '',
    port: server.port?.toString() || '',
    label: resources.label || '',
  })

  const mutation = useMutation({
    mutationFn: () =>
      updateCustomServer({
        data: {
          serverId: server.id,
          ip: form.ip || undefined,
          port: form.port ? Number(form.port) : undefined,
          label: form.label || undefined,
        },
      }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['user-servers-detail'] })
      toast.success('Server updated')
      onClose()
    },
    onError: () => toast.error('Failed to update server'),
  })

  return (
    <Sheet open={open} onOpenChange={(o) => !o && onClose()}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Server</SheetTitle>
        </SheetHeader>
        <div className="space-y-4 mt-6">
          <div className="space-y-2">
            <Label>IP Address</Label>
            <Input
              placeholder="e.g. 103.45.67.89"
              value={form.ip}
              onChange={(e) => setForm((f) => ({ ...f, ip: e.target.value }))}
            />
          </div>
          <div className="space-y-2">
            <Label>Port</Label>
            <Input
              type="number"
              placeholder="e.g. 25565"
              value={form.port}
              onChange={(e) => setForm((f) => ({ ...f, port: e.target.value }))}
            />
          </div>
          <div className="space-y-2">
            <Label>Custom Label</Label>
            <Input
              placeholder="e.g. My Survival Server"
              value={form.label}
              onChange={(e) => setForm((f) => ({ ...f, label: e.target.value }))}
            />
          </div>

          {/* Resource display (read-only for custom) */}
          {(resources.cpu || resources.memory || resources.disk) && (
            <div className="border rounded-lg p-3 space-y-2">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Allocated Resources</p>
              <div className="grid grid-cols-3 gap-3 text-sm">
                {resources.cpu && <div><p className="text-xs text-muted-foreground">CPU</p><p className="font-medium">{resources.cpu}%</p></div>}
                {resources.memory && <div><p className="text-xs text-muted-foreground">RAM</p><p className="font-medium">{resources.memory} MB</p></div>}
                {resources.disk && <div><p className="text-xs text-muted-foreground">Disk</p><p className="font-medium">{resources.disk} MB</p></div>}
              </div>
            </div>
          )}

          <Button className="w-full" onClick={() => mutation.mutate()} disabled={mutation.isPending}>
            {mutation.isPending ? <RefreshCw className="w-4 h-4 mr-2 animate-spin" /> : null}
            Save Changes
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

function ServerCard({ server }: { server: any }) {
  const navigate = useNavigate()
  const [editOpen, setEditOpen] = useState(false)
  const resources = server.resources || {}
  const pteroData = server.pterodactylData || {}
  const isPtero = server.deployMode === 'PTERODACTYL'
  const isCustom = server.deployMode === 'CUSTOM'
  const usage = server.liveUsage

  const panelUrl = process.env.PTERO_URL || 'https://gpanel.flamenodes.cloud'

  // Check if billing cycle has ended
  const expiresAt = server.expiresAt ? new Date(server.expiresAt) : null
  const isExpired = expiresAt ? isPast(expiresAt) : false
  const daysUntilExpiry = expiresAt && !isExpired ? differenceInDays(expiresAt, new Date()) : null

  const renewMutation = useMutation({
    mutationFn: () => renewServer({ data: { serverId: server.id } }),
    onSuccess: (res) => {
      if (res.success && res.data?.redirectUrl) {
        toast.success('Redirecting to checkout...')
        navigate({ to: res.data.redirectUrl as any })
      } else {
        toast.error(res.message || 'Failed to create renewal order')
      }
    },
    onError: () => toast.error('Failed to renew server'),
  })

  // Determine display status based on server state
  const getDisplayStatus = () => {
    // If billing cycle expired, show suspended
    if (isExpired && server.status !== 'TERMINATED') return statusConfig.SUSPENDED

    // If server is suspended or terminated, always show that status
    if (server.status === 'SUSPENDED') return statusConfig.SUSPENDED
    if (server.status === 'TERMINATED') return statusConfig.TERMINATED

    // If server is installing/deploying, show Deploying
    if (server.status === 'PROCESSING') return statusConfig.PROCESSING
    if (server.status === 'PENDING_MANUAL') return statusConfig.PENDING_MANUAL

    // Default to Active for all other non-suspended servers
    return statusConfig.ACTIVE
  }

  const displayStatus = getDisplayStatus()
  const pteroState = server.liveState ? pteroStateConfig[server.liveState] : null

  return (
    <>
      <Card className="overflow-hidden hover:shadow-md transition-shadow">
        <CardHeader className="pb-2 pt-4">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <Server className="w-5 h-5 text-primary" />
              </div>
              <div className="min-w-0">
                <CardTitle className="text-sm truncate">
                  {resources.label || server.name}
                </CardTitle>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {server.type} · {isPtero ? 'Pterodactyl' : 'Custom'}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-1 shrink-0">
              <Badge variant="outline" className={`text-xs ${displayStatus.class}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${displayStatus.dot} mr-1.5`} />
                {displayStatus.label}
              </Badge>
              {pteroState && (
                <span className={`text-xs font-medium ${pteroState.color}`}>
                  {pteroState.label}
                </span>
              )}
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-3 pb-4">
          {/* IP/Port for custom or active ptero */}
          {(server.ip || server.port) && (
            <div className="flex items-center gap-2 text-xs bg-muted/50 rounded px-2.5 py-1.5">
              <Network className="w-3 h-3 text-muted-foreground shrink-0" />
              <code className="font-mono">
                {server.ip}{server.port ? `:${server.port}` : ''}
              </code>
            </div>
          )}

          {/* Resources */}
          <div className="grid grid-cols-3 gap-2">
            <div className="text-center p-2 rounded-lg bg-muted/30 border">
              <Cpu className="w-3.5 h-3.5 mx-auto mb-1 text-muted-foreground" />
              <p className="text-xs text-muted-foreground">CPU</p>
              {usage ? (
                <p className="text-xs font-semibold">{usage.cpu.toFixed(1)}%</p>
              ) : (
                <p className="text-xs font-semibold">{resources.cpu ? `${resources.cpu}%` : '—'}</p>
              )}
            </div>
            <div className="text-center p-2 rounded-lg bg-muted/30 border">
              <Database className="w-3.5 h-3.5 mx-auto mb-1 text-muted-foreground" />
              <p className="text-xs text-muted-foreground">RAM</p>
              {usage ? (
                <p className="text-xs font-semibold">{formatBytes(usage.memory)}</p>
              ) : (
                <p className="text-xs font-semibold">{resources.memory ? `${resources.memory} MB` : '—'}</p>
              )}
            </div>
            <div className="text-center p-2 rounded-lg bg-muted/30 border">
              <HardDrive className="w-3.5 h-3.5 mx-auto mb-1 text-muted-foreground" />
              <p className="text-xs text-muted-foreground">Disk</p>
              {usage ? (
                <p className="text-xs font-semibold">{formatBytes(usage.disk)}</p>
              ) : (
                <p className="text-xs font-semibold">{resources.disk ? `${resources.disk} MB` : '—'}</p>
              )}
            </div>
          </div>

          {/* Network stats for ptero */}
          {usage && (usage.network_rx > 0 || usage.network_tx > 0) && (
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <span className="text-emerald-500">↓</span> {formatBytes(usage.network_rx)}/s
              </div>
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <span className="text-blue-500">↑</span> {formatBytes(usage.network_tx)}/s
              </div>
            </div>
          )}

          {/* Pterodactyl ID */}
          {isPtero && pteroData.identifier && (
            <div className="text-xs text-muted-foreground flex items-center gap-1.5">
              <span>ID:</span>
              <code className="font-mono bg-muted px-1.5 py-0.5 rounded">{pteroData.identifier}</code>
            </div>
          )}

          <div className="text-xs text-muted-foreground">
            Created {formatDistanceToNow(new Date(server.createdAt))}
          </div>

          {/* Billing cycle info */}
          {expiresAt && (
            <div className={`flex items-center gap-1.5 text-xs ${isExpired ? 'text-destructive' : daysUntilExpiry !== null && daysUntilExpiry <= 7 ? 'text-orange-500' : 'text-muted-foreground'}`}>
              <Clock className="w-3 h-3" />
              {isExpired ? (
                <span className="font-medium">Expired {formatDistanceToNow(expiresAt)}</span>
              ) : (
                <span>Expires in {daysUntilExpiry} {daysUntilExpiry === 1 ? 'day' : 'days'}</span>
              )}
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center gap-2 pt-1 flex-wrap">
            {isExpired && server.status !== 'TERMINATED' && (
              <Button
                size="sm"
                className="h-7 text-xs flex-1"
                variant="default"
                onClick={() => renewMutation.mutate()}
                disabled={renewMutation.isPending}
              >
                {renewMutation.isPending ? (
                  <RefreshCw className="w-3 h-3 mr-1.5 animate-spin" />
                ) : (
                  <RefreshCw className="w-3 h-3 mr-1.5" />
                )}
                Renew Server
              </Button>
            )}

            {!isExpired && isPtero && pteroData.identifier && server.status !== 'SUSPENDED' && server.status !== 'TERMINATED' && (
              <>
                <Button size="sm" className="h-7 text-xs flex-1" asChild>
                  <a href={`${panelUrl}/server/${pteroData.identifier}`} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-3 h-3 mr-1.5" />
                    Panel
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="h-7 text-xs"
                  onClick={async () => {
                    if (!confirm('Reinstall server? All data will be lost.')) return
                    try {
                      const res = await reinstallServer({ data: { serverId: server.id } })
                      if (res.success) toast.success('Server reinstall initiated')
                      else toast.error(res.message)
                    } catch { toast.error('Failed to reinstall') }
                  }}
                >
                  <RefreshCw className="w-3 h-3 mr-1.5" />
                  Reinstall
                </Button>
              </>
            )}

            {!isExpired && isPtero && server.status === 'PROCESSING' && (
              <Button size="sm" variant="outline" className="h-7 text-xs flex-1" disabled>
                <RefreshCw className="w-3 h-3 mr-1.5 animate-spin" />
                Deploying...
              </Button>
            )}

            {!isExpired && isCustom && server.status === 'ACTIVE' && (
              <PingButton serverId={server.id} />
            )}

            {isCustom && (
              <Button
                size="sm"
                variant="outline"
                className="h-7 text-xs"
                onClick={() => setEditOpen(true)}
              >
                <Settings className="w-3 h-3 mr-1.5" />
                Manage
              </Button>
            )}

            {server.orderItem?.orderId && (
              <Button
                size="sm"
                variant="ghost"
                className="h-7 text-xs"
                onClick={() => navigate({ to: '/billing/success', search: { orderId: server.orderItem.orderId } })}
              >
                <ExternalLinkIcon className="w-3 h-3 mr-1.5" />
                Track Order
              </Button>
            )}

            {server.status === 'PENDING_MANUAL' && (
              <p className="text-xs text-orange-500 flex-1">
                Awaiting manual delivery by admin
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      {isCustom && (
        <EditCustomServerSheet server={server} open={editOpen} onClose={() => setEditOpen(false)} />
      )}
    </>
  )
}

function ServersPage() {
  const qc = useQueryClient()
  const { data: servers } = useSuspenseQuery({
    queryKey: ['user-servers-detail'],
    queryFn: () => getUserServersWithDetails(),
    refetchInterval: 30_000,
  })

  const activeCount = servers.filter((s) => s.status === 'ACTIVE').length

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="px-5 py-6 max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">My Servers</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Manage and monitor your servers
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-xs">{activeCount} Active</Badge>
            <Badge variant="outline" className="text-xs">{servers.length} Total</Badge>
            <Button
              size="sm"
              variant="outline"
              onClick={() => qc.invalidateQueries({ queryKey: ['user-servers-detail'] })}
            >
              <RefreshCw className="w-3.5 h-3.5 mr-1.5" />
              Refresh
            </Button>
          </div>
        </div>

        {servers.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-16">
              <Server className="w-16 h-16 text-muted-foreground/50 mb-4" />
              <h3 className="text-lg font-semibold mb-2">No servers yet</h3>
              <p className="text-sm text-muted-foreground text-center max-w-md mb-4">
                Purchase a plan to get your first server.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {servers.map((server) => (
              <ServerCard key={server.id} server={server} />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
