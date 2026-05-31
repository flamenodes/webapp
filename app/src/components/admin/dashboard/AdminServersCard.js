import { ExternalLink, Server, Loader2 } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { getAdminServers } from '@/serverActions/admin/servers.api';
import { Link } from '@tanstack/react-router';
const statusConfig = {
    ACTIVE: { dot: 'bg-success shadow-[0_0_6px_var(--success)]', text: 'text-success', label: 'Active' },
    PROCESSING: { dot: 'bg-warning shadow-[0_0_6px_var(--warning)]', text: 'text-warning', label: 'Deploying' },
    PENDING_MANUAL: { dot: 'bg-orange-500 shadow-[0_0_6px_rgb(234,179,8)]', text: 'text-orange-500', label: 'Pending' },
    SUSPENDED: { dot: 'bg-destructive shadow-[0_0_6px_var(--destructive)]', text: 'text-destructive', label: 'Suspended' },
    TERMINATED: { dot: 'bg-muted shadow-[0_0_6px_var(--muted)]', text: 'text-muted-foreground', label: 'Terminated' },
};
export function AdminServersCard() {
    const { data: servers = [], isLoading } = useQuery({
        queryKey: ['admin-servers'],
        queryFn: () => getAdminServers(),
    });
    const activeCount = servers.filter((s) => s.status === 'ACTIVE').length;
    const suspendedCount = servers.filter((s) => s.status === 'SUSPENDED').length;
    return (<div className="flex flex-col rounded-2xl border border-border bg-card overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center shrink-0">
            <Server size={16} className="text-primary" strokeWidth={1.75}/>
          </div>
          <div>
            <h2 className="text-sm font-semibold leading-none">Servers</h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              <span className="text-success font-semibold">{activeCount} active</span>
              {suspendedCount > 0 && <span className="text-destructive font-semibold ml-2">{suspendedCount} suspended</span>}
              <span className="ml-2">/ {servers.length} total</span>
            </p>
          </div>
        </div>
        <Link to="/admin/servers" className="flex items-center gap-1.5 h-8 px-3 rounded-lg border border-border text-xs font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 hover:-translate-y-px transition-all duration-200">
          Manage
          <ExternalLink size={12} strokeWidth={1.75}/>
        </Link>
      </div>

      {/* List */}
      <div>
        {isLoading ? (<div className="flex items-center justify-center py-10">
            <Loader2 className="w-5 h-5 animate-spin text-muted-foreground"/>
          </div>) : servers.length === 0 ? (<div className="flex flex-col items-center justify-center py-10 px-4">
            <Server className="w-10 h-10 text-muted-foreground/40 mb-2"/>
            <p className="text-sm text-muted-foreground">No servers yet</p>
          </div>) : (<div className="divide-y divide-border">
            {servers.slice(0, 8).map((server) => {
                const sc = statusConfig[server.status] ?? statusConfig.ACTIVE;
                return (<div key={server.id} className="flex items-center justify-between px-5 py-2.5 hover:bg-muted/20 transition-colors">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className={`w-2 h-2 rounded-full shrink-0 ${sc.dot}`}/>
                    <div className="min-w-0">
                      <p className="text-sm font-medium truncate leading-tight">
                        {server.resources?.label || server.name}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        {server.user?.name ?? server.user?.email ?? '—'}
                      </p>
                    </div>
                  </div>
                  <span className={`text-xs font-medium shrink-0 ${sc.text}`}>{sc.label}</span>
                </div>);
            })}
            {servers.length > 8 && (<div className="px-5 py-2 text-xs text-muted-foreground">
                +{servers.length - 8} more — <Link to="/admin/servers" className="text-primary hover:underline">view all</Link>
              </div>)}
          </div>)}
      </div>
    </div>);
}
//# sourceMappingURL=AdminServersCard.js.map