import { createFileRoute } from '@tanstack/react-router';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getPublicStatusNodes, pingAllNodes, } from '@/serverActions/status/status.api';
import { useEffect } from 'react';
import { seo } from '#/utils/seo';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import PixelBlast from '@/components/PixelBlast';
export const Route = createFileRoute('/status')({
    head: () => ({
        meta: seo({
            title: 'Status | Flame Nodes',
            description: 'Live uptime and latency for all Flame Nodes infrastructure — VPS, game servers, and web nodes.',
            image: '/flamenodes.png',
        }),
    }),
    component: StatusPage,
});
const STATUS_DOT = {
    up: 'bg-emerald-500 shadow-[0_0_6px_2px_rgba(16,185,129,0.4)]',
    down: 'bg-red-500 shadow-[0_0_6px_2px_rgba(239,68,68,0.4)]',
    degraded: 'bg-yellow-400 shadow-[0_0_6px_2px_rgba(234,179,8,0.4)]',
    maintenance: 'bg-blue-500 shadow-[0_0_6px_2px_rgba(59,130,246,0.4)]',
    unknown: 'bg-zinc-500',
};
const STATUS_LABEL = {
    up: 'Operational',
    down: 'Down',
    degraded: 'Degraded',
    maintenance: 'Maintenance',
    unknown: 'Checking...',
};
function StatusPage() {
    const { data: nodes = [], refetch } = useQuery({
        queryKey: ['status-nodes-public'],
        queryFn: () => getPublicStatusNodes(),
    });
    const pingMutation = useMutation({
        mutationFn: () => pingAllNodes(),
        onSuccess: () => refetch(),
    });
    useEffect(() => {
        pingMutation.mutate();
    }, []);
    const allUp = nodes.length > 0 && nodes.every((n) => n.status === 'up');
    const anyDown = nodes.some((n) => n.status === 'down');
    const pinging = pingMutation.isPending;
    return (<main className="relative min-h-screen w-full pt-28 pb-16 px-4 mx-auto flex flex-col items-center">
      <div className="absolute w-full h-full">
        <PixelBlast color="pink"/>
      </div>
      <div>
        <div className="text-center mb-12 max-w-4xl">
          <h1 className="text-4xl font-bold font-angkor mb-3">
            System <span className="gradient">Status</span>
          </h1>
          <p className="text-muted-foreground text-sm mb-6">
            Live status for all Flame Nodes infrastructure.
          </p>

          <div className={`inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-medium border ${pinging
            ? 'bg-muted/50 border-border text-muted-foreground'
            : allUp
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                : anyDown
                    ? 'bg-red-500/10 border-red-500/30 text-red-400'
                    : 'bg-yellow-400/10 border-yellow-400/30 text-yellow-400'}`}>
            <span className={`w-2 h-2 rounded-full ${pinging ? 'bg-muted-foreground animate-pulse' : allUp ? 'bg-emerald-500' : anyDown ? 'bg-red-500' : 'bg-yellow-400'}`}/>
            {pinging
            ? 'Checking systems...'
            : allUp
                ? 'All Systems Operational'
                : anyDown
                    ? 'Some Services Disrupted'
                    : 'Partial Degradation'}
          </div>
        </div>

        <div className="space-y-3">
          {pinging && nodes.length === 0
            ? Array.from({ length: 3 }).map((_, i) => (<Skeleton key={i} className="h-20 w-full rounded-xl"/>))
            : nodes.map((node) => (<div key={node.id} className="flex items-center justify-between px-5 py-4 rounded-xl border bg-card hover:bg-card/80 transition-colors  backdrop-blur">
                  <div className="flex items-center gap-3.5">
                    <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${STATUS_DOT[node.status]}`}/>
                    <div>
                      <p className="font-medium text-sm">{node.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {node.location} · {node.type}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-right">
                    {node.latency != null && (<span className="text-xs text-muted-foreground font-mono">
                        {node.latency}ms
                      </span>)}
                    <Badge variant={node.status === 'up'
                    ? 'default'
                    : node.status === 'down'
                        ? 'destructive'
                        : node.status === 'maintenance'
                            ? 'outline'
                            : 'secondary'} className="text-xs">
                      {STATUS_LABEL[node.status]}
                    </Badge>
                  </div>
                </div>))}

          {!pinging && nodes.length === 0 && (<div className="text-center py-16 text-muted-foreground text-sm">
              No nodes configured yet.
            </div>)}
        </div>

        {nodes.length > 0 && !pinging && (<p className="text-center text-xs text-muted-foreground mt-8">
            Last checked{' '}
            {nodes[0]?.lastChecked
                ? new Date(nodes[0].lastChecked).toLocaleTimeString()
                : 'just now'}
          </p>)}
      </div>
    </main>);
}
//# sourceMappingURL=status.js.map