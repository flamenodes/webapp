import { createFileRoute } from '@tanstack/react-router'
import { useSuspenseQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import { Button } from '#/components/ui/button'
import { Badge } from '#/components/ui/badge'
import { getStuckServers, getDeploymentQueueLogs, retryServerDeployment } from '#/serverActions/admin/deployment.api'
import { Loader2, RefreshCw, CheckCircle, XCircle, Clock, Zap, Server, RotateCw } from 'lucide-react'
import { toast } from 'sonner'

export const Route = createFileRoute('/_protected/admin/deploy')({
  head: () => ({ meta: [{ title: 'Deployment Management | Admin' }] }),
  component: DeployPage,
})

function formatDuration(ms: number) {
  const totalSeconds = Math.round(ms / 1000)
  if (totalSeconds < 60) return `${totalSeconds}s`
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  if (minutes < 60) {
    return seconds ? `${minutes}m ${seconds}s` : `${minutes}m`
  }
  const hours = Math.floor(minutes / 60)
  return `${hours}h ${minutes % 60}m`
}

function DeployPage() {
  const qc = useQueryClient()
  const { data: stuckServers, refetch } = useSuspenseQuery({
    queryKey: ['stuck-servers'],
    queryFn: getStuckServers,
    refetchInterval: 10000,
  })

  const { data: queueLogs } = useSuspenseQuery({
    queryKey: ['deployment-queue-logs'],
    queryFn: getDeploymentQueueLogs,
    refetchInterval: 10000,
  })

  const retryMutation = useMutation({
    mutationFn: (serverId: string) => retryServerDeployment({ data: { serverId } }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['stuck-servers'] })
      qc.invalidateQueries({ queryKey: ['admin-servers'] })
      toast.success('Deployment triggered successfully')
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to retry deployment')
    },
  })

  const processingServers = stuckServers.filter(s => s.status === 'PROCESSING')
  const failedServers = stuckServers.filter(s => s.status === 'FAILED')

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="px-5 py-6 max-w-screen-2xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Deployment Management</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Monitor and manually trigger server deployments
            </p>
          </div>
          <Button onClick={() => refetch()} variant="outline" size="sm">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
        </div>

        {/* Status Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Stuck in Processing</p>
                  <p className="text-3xl font-bold mt-1">{processingServers.length}</p>
                </div>
                <Loader2 className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Failed Deployments</p>
                  <p className="text-3xl font-bold mt-1">{failedServers.length}</p>
                </div>
                <XCircle className="w-8 h-8 text-red-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Stuck Servers</p>
                  <p className="text-3xl font-bold mt-1">{stuckServers.length}</p>
                </div>
                <Clock className="w-8 h-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {stuckServers.length === 0 ? (
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center justify-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">All Clear!</h3>
                <p className="text-sm text-muted-foreground text-center">
                  No servers are stuck in deployment. All systems operational.
                </p>
              </div>
            </CardContent>
          </Card>
        ) : (
          <>
            {/* Processing Servers */}
            {processingServers.length > 0 && (
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-5 h-5 text-blue-500 animate-spin" />
                    <CardTitle>Stuck in Processing ({processingServers.length})</CardTitle>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Servers that have been processing for more than 10 minutes
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {processingServers.map((server) => (
                      <div
                        key={server.id}
                        className="flex items-center justify-between p-4 rounded-lg border bg-card"
                      >
                        <div className="flex items-center gap-4 flex-1">
                          <Server className="w-5 h-5 text-muted-foreground" />
                          <div className="flex-1">
                            <p className="font-medium">{server.name}</p>
                            <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                              <span>User: {server.user?.email}</span>
                              <span>•</span>
                              <span>Created: {new Date(server.createdAt).toLocaleString()}</span>
                              <span>•</span>
                              <span>Order: {server.orderItem?.order?.id.slice(0, 8)}</span>
                            </div>
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            <Loader2 className="w-3 h-3 mr-1 animate-spin" />
                            Processing
                          </Badge>
                        </div>
                        <Button
                          size="sm"
                          onClick={() => retryMutation.mutate(server.id)}
                          disabled={retryMutation.isPending}
                        >
                          {retryMutation.isPending ? (
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          ) : (
                            <RotateCw className="w-4 h-4 mr-2" />
                          )}
                          Retry
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Failed Servers */}
            {failedServers.length > 0 && (
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-500" />
                    <CardTitle>Failed Deployments ({failedServers.length})</CardTitle>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Servers that failed to deploy successfully
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {failedServers.map((server) => (
                      <div
                        key={server.id}
                        className="flex items-center justify-between p-4 rounded-lg border bg-card"
                      >
                        <div className="flex items-center gap-4 flex-1">
                          <Server className="w-5 h-5 text-muted-foreground" />
                          <div className="flex-1">
                            <p className="font-medium">{server.name}</p>
                            <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                              <span>User: {server.user?.email}</span>
                              <span>•</span>
                              <span>Created: {new Date(server.createdAt).toLocaleString()}</span>
                              <span>•</span>
                              <span>Order: {server.orderItem?.order?.id.slice(0, 8)}</span>
                            </div>
                          </div>
                          <Badge variant="destructive" className="text-xs">
                            <XCircle className="w-3 h-3 mr-1" />
                            Failed
                          </Badge>
                        </div>
                        <Button
                          size="sm"
                          onClick={() => retryMutation.mutate(server.id)}
                          disabled={retryMutation.isPending}
                          variant="default"
                        >
                          {retryMutation.isPending ? (
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          ) : (
                            <RotateCw className="w-4 h-4 mr-2" />
                          )}
                          Retry Deployment
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </>
        )}

        {/* Completed Deployments */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-500" />
              <CardTitle>
                Completed Deployments
                {queueLogs.available && queueLogs.logs.length > 0
                  ? ` (${queueLogs.logs.length})`
                  : ''}
              </CardTitle>
            </div>
            <p className="text-sm text-muted-foreground">
              Recently finished server deployments from the queue
            </p>
          </CardHeader>
          <CardContent>
            {!queueLogs.available ? (
              <p className="text-sm text-muted-foreground">
                BullMQ queue is unavailable (Redis not configured) — completed deployment logs
                cannot be shown.
              </p>
            ) : queueLogs.logs.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                No completed deployments yet.
              </p>
            ) : (
              <div className="space-y-3">
                {queueLogs.logs.map((log) => (
                  <div
                    key={log.id}
                    className="flex items-center justify-between p-4 rounded-lg border bg-card"
                  >
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{log.serverName || 'Unnamed server'}</p>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                          <span className="truncate">User: {log.userEmail || '—'}</span>
                          <span>•</span>
                          <span>
                            Completed:{' '}
                            {log.completedAt
                              ? new Date(log.completedAt).toLocaleString()
                              : '—'}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0 ml-2">
                      {log.ip && log.port !== null && (
                        <Badge variant="secondary" className="text-xs font-mono">
                          {log.ip}:{log.port}
                        </Badge>
                      )}
                      <Badge variant="outline" className="text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        {log.durationMs !== null
                          ? formatDuration(log.durationMs)
                          : '—'}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* System Info */}
        <Card>
          <CardHeader>
            <CardTitle>System Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-muted/50">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold">Deployment Method</p>
                  <Badge variant="default">Server Functions</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Using TanStack Start server functions for deployments
                </p>
              </div>
              <div className="p-4 rounded-lg bg-muted/50">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold">Background Processing</p>
                  <Badge variant="default">Active</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Deployments run asynchronously without blocking requests
                </p>
              </div>
              <div className="p-4 rounded-lg bg-muted/50">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold">Email Notifications</p>
                  <Badge variant={process.env.RESEND_API_KEY ? 'default' : 'secondary'}>
                    {process.env.RESEND_API_KEY ? 'Enabled' : 'Disabled'}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {process.env.RESEND_API_KEY ? 'Automated emails via Resend' : 'Configure RESEND_API_KEY to enable'}
                </p>
              </div>
              <div className="p-4 rounded-lg bg-muted/50">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold">Pterodactyl Integration</p>
                  <Badge variant={process.env.PTERODACTYL_URL ? 'default' : 'secondary'}>
                    {process.env.PTERODACTYL_URL ? 'Connected' : 'Not Configured'}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {process.env.PTERODACTYL_URL ? 'Ready for server provisioning' : 'Configure PTERODACTYL_URL to enable'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
