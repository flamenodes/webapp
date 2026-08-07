import * as LucideIcons from 'lucide-react'
import { ExternalLink, Server, Loader2 } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { getUserServers } from '@/serverActions/user/dashboard.api'
import { Link } from '@tanstack/react-router'

const statusConfig = {
  ACTIVE:      { dot: 'bg-success shadow-[0_0_6px_var(--success)]',        text: 'text-success',     label: 'Active'      },
  PROCESSING:  { dot: 'bg-warning shadow-[0_0_6px_var(--warning)]',        text: 'text-warning',     label: 'Deploying'   },
  PENDING_MANUAL: { dot: 'bg-orange-500 shadow-[0_0_6px_rgb(234,179,8)]', text: 'text-orange-500', label: 'Pending'    },
  SUSPENDED:   { dot: 'bg-destructive shadow-[0_0_6px_var(--destructive)]', text: 'text-destructive', label: 'Suspended'   },
  TERMINATED:  { dot: 'bg-muted shadow-[0_0_6px_var(--muted)]',            text: 'text-muted-foreground', label: 'Terminated'  },
}

export function ActiveServersCard() {
  const { data: servers = [], isLoading } = useQuery({
    queryKey: ['user-servers'],
    queryFn: () => getUserServers(),
  })

  const panelUrl = process.env.PTERO_URL || 'https://gpanel.flamenodes.cloud'

  // Count servers that are not suspended or terminated
  const activeCount = servers.filter((s) => s.status !== 'SUSPENDED' && s.status !== 'TERMINATED').length

  // Function to get display status (same logic as servers page)
  const getDisplayStatus = (server: any) => {
    if (server.status === 'SUSPENDED') return statusConfig.SUSPENDED
    if (server.status === 'TERMINATED') return statusConfig.TERMINATED
    if (server.status === 'PROCESSING') return statusConfig.PROCESSING
    if (server.status === 'PENDING_MANUAL') return statusConfig.PENDING_MANUAL
    return statusConfig.ACTIVE
  }

  return (
    <div className="flex flex-col rounded-2xl border border-border bg-card overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center shrink-0 shadow-[0_0_10px_var(--primary)/15]">
            <Server size={16} className="text-primary" strokeWidth={1.75} />
          </div>
          <div>
            <h2 className="text-sm font-semibold leading-none">Active Servers</h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              <span className="text-xl font-bold text-foreground">{activeCount}</span>
              <span className="text-sm font-medium text-muted-foreground"> / {servers.length}</span>
            </p>
          </div>
        </div>
        <Link
          to="/user/servers"
          className="flex items-center gap-1.5 h-8 px-3 rounded-lg border border-border text-xs font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 hover:shadow-[0_0_10px_var(--primary)/10] hover:-translate-y-px transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Manage
          <ExternalLink size={12} strokeWidth={1.75} />
        </Link>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
          </div>
        ) : servers.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 px-4">
            <Server className="w-12 h-12 text-muted-foreground/50 mb-3" />
            <p className="text-sm font-medium text-muted-foreground mb-1">No servers yet</p>
            <p className="text-xs text-muted-foreground/70 text-center">
              Purchase a server to get started
            </p>
          </div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="px-5 py-2.5 text-left text-[10px] font-bold uppercase tracking-wider text-muted-foreground w-[50%]">
                  Server
                </th>
                <th className="px-4 py-2.5 text-left text-[10px] font-bold uppercase tracking-wider text-muted-foreground w-[30%] hidden md:table-cell">
                  Type
                </th>
                <th className="px-4 py-2.5 text-left text-[10px] font-bold uppercase tracking-wider text-muted-foreground w-[20%]">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {servers.map((server, i) => {
                const displayStatus = getDisplayStatus(server)
                const pteroData = server.pterodactylData as any || {}
                const isPtero = server.deployMode === 'PTERODACTYL'
                const Icon = LucideIcons.Server
                return (
                  <tr
                    key={server.id}
                    className={`transition-colors hover:bg-muted/30 ${i < servers.length - 1 ? 'border-b border-border' : ''}`}
                  >
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-3 justify-between">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center shrink-0">
                            <Icon size={16} className="text-primary" strokeWidth={1.75} />
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-semibold leading-tight truncate">{server.name}</p>
                            <p className="text-xs text-muted-foreground truncate">
                              {server.pterodactylServerId ? `ID: ${server.pterodactylServerId}` : (server.status === 'ACTIVE' ? 'Active' : 'Deploying...')}
                            </p>
                          </div>
                        </div>
                        {isPtero && pteroData.identifier && server.status !== 'SUSPENDED' && server.status !== 'TERMINATED' && (
                          <a
                            href={`${panelUrl}/server/${pteroData.identifier}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 p-1 hover:bg-muted rounded transition-colors"
                          >
                            <ExternalLink size={14} className="text-muted-foreground hover:text-primary" strokeWidth={1.75} />
                          </a>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      <span className="text-xs text-muted-foreground">{server.type}</span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full shrink-0 ${displayStatus.dot}`} />
                        <span className={`text-xs font-medium ${displayStatus.text}`}>{displayStatus.label}</span>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
