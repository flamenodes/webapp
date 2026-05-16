import * as LucideIcons from 'lucide-react'
import { activeServers } from '#/data/dashboard/dashboardData'
import { ExternalLink, Server } from 'lucide-react'

const statusConfig = {
  online:      { dot: 'bg-success shadow-[0_0_6px_var(--success)]',        text: 'text-success',     label: 'Online'      },
  maintenance: { dot: 'bg-warning shadow-[0_0_6px_var(--warning)]',        text: 'text-warning',     label: 'Maintenance' },
  offline:     { dot: 'bg-destructive shadow-[0_0_6px_var(--destructive)]', text: 'text-destructive', label: 'Offline'     },
}

export function ActiveServersCard() {
  const onlineCount = activeServers.filter((s) => s.status === 'online').length

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
              <span className="text-xl font-bold text-foreground">{onlineCount}</span>
              <span className="text-sm font-medium text-muted-foreground"> / {activeServers.length}</span>
            </p>
          </div>
        </div>
        <button className="flex items-center gap-1.5 h-8 px-3 rounded-lg border border-border text-xs font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 hover:shadow-[0_0_10px_var(--primary)/10] hover:-translate-y-px transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          Manage
          <ExternalLink size={12} strokeWidth={1.75} />
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              <th className="px-5 py-2.5 text-left text-[10px] font-bold uppercase tracking-wider text-muted-foreground w-[50%]">
                Server
              </th>
              <th className="px-4 py-2.5 text-left text-[10px] font-bold uppercase tracking-wider text-muted-foreground w-[30%] hidden md:table-cell">
                Location
              </th>
              <th className="px-4 py-2.5 text-left text-[10px] font-bold uppercase tracking-wider text-muted-foreground w-[20%]">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {activeServers.map((server, i) => {
              const sc = statusConfig[server.status]
              const Icon = (LucideIcons as any)[server.icon] ?? LucideIcons.Server
              return (
                <tr
                  key={server.id}
                  className={`transition-colors hover:bg-muted/30 ${i < activeServers.length - 1 ? 'border-b border-border' : ''}`}
                >
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center shrink-0">
                        <Icon size={16} className="text-primary" strokeWidth={1.75} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold leading-tight truncate">{server.name}</p>
                        <p className="text-xs text-muted-foreground truncate font-mono">{server.hostname}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 hidden md:table-cell">
                    <span className="text-xs text-muted-foreground">{server.location}</span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full shrink-0 ${sc.dot}`} />
                      <span className={`text-xs font-medium ${sc.text}`}>{sc.label}</span>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
