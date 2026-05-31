import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useSuspenseQuery } from '@tanstack/react-query';
import { StatCard } from '#/components/dashboard/StatCard';
import { DonutChart } from '#/components/dashboard/DonutChart';
import { ResourceGauges } from '#/components/dashboard/ResourceGauges';
import { AlertPanel } from '#/components/dashboard/AlertPanel';
import { ActivityFeed } from '#/components/dashboard/ActivityFeed';
import { NodeTable } from '#/components/dashboard/NodeTable';
import { OrdersDataTable } from '#/components/admin/orders/OrdersDataTable';
import { AdminServersCard } from '#/components/admin/dashboard/AdminServersCard';
import { getDashboardStats, getAllOrders } from '#/serverActions/admin/dashboard.api';
import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card';
export const Route = createFileRoute('/_protected/admin/dashboard')({
    head: () => ({ meta: [{ title: 'Dashboard | Flame Nodes Admin' }] }),
    component: Dashboard,
});
function Dashboard() {
    const navigate = useNavigate();
    const { data: stats } = useSuspenseQuery({
        queryKey: ['dashboard-stats'],
        queryFn: getDashboardStats,
        refetchInterval: 60_000,
    });
    const { data: orders } = useSuspenseQuery({
        queryKey: ['all-orders'],
        queryFn: getAllOrders,
    });
    const revChangeLabel = stats.revenue.change != null
        ? `${Number(stats.revenue.change) >= 0 ? '+' : ''}${stats.revenue.change}% vs last month`
        : 'No prior month data';
    const statCards = [
        {
            icon: 'DollarSign',
            label: 'Total Revenue',
            value: `₹${stats.revenue.total.toLocaleString()}`,
            change: revChangeLabel,
            trend: (stats.revenue.change != null && Number(stats.revenue.change) >= 0 ? 'up' : 'down'),
            sparkline: null, progress: null, action: null,
        },
        {
            icon: 'Server',
            label: 'Active Servers',
            value: String(stats.activeServers),
            change: 'Deployed servers',
            trend: 'stable',
            sparkline: null, progress: null, action: null,
        },
        {
            icon: 'Users',
            label: 'Customers',
            value: String(stats.totalCustomers),
            change: 'Total registered',
            trend: 'up',
            sparkline: null, progress: null,
            action: 'View Customers',
            onAction: () => navigate({ to: '/admin/customers' }),
        },
        {
            icon: 'ShoppingCart',
            label: 'Pending Orders',
            value: String(stats.pendingOrders),
            change: stats.pendingOrders > 0 ? 'Requires attention' : 'All clear',
            trend: (stats.pendingOrders > 0 ? 'warning' : 'stable'),
            sparkline: null, progress: null,
            action: stats.pendingOrders > 0 ? 'View Orders' : null,
            onAction: () => navigate({ to: '/admin/orders' }),
        },
        {
            icon: 'LifeBuoy',
            label: 'Open Tickets',
            value: String(stats.openTickets),
            change: stats.openTickets > 0 ? 'Waiting on staff' : 'No open tickets',
            trend: (stats.openTickets > 0 ? 'warning' : 'stable'),
            sparkline: null, progress: null,
            action: stats.openTickets > 0 ? 'View Tickets' : null,
            onAction: () => navigate({ to: '/admin/tickets' }),
        },
    ];
    return (<main className="flex-1 overflow-y-auto">
      <div className="px-5 py-6 max-w-screen-2xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Welcome back — here's what's happening across your infrastructure.
          </p>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4">
          {statCards.map((stat) => (<StatCard key={stat.label} {...stat}/>))}
        </div>

        {/* Alerts — only show if there are any */}
        {stats.alerts.length > 0 && (<AlertPanel alerts={stats.alerts}/>)}

        {/* Charts row */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <DonutChart data={stats.serverStatus}/>
          <ResourceGauges data={stats.resourceGauges}/>
          {stats.alerts.length === 0 && <AlertPanel alerts={[]}/>}
        </div>

        {/* Node table + activity */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          <div className="xl:col-span-2">
            <NodeTable nodes={stats.statusNodes}/>
          </div>
          <ActivityFeed activities={stats.activities}/>
        </div>

        {/* Servers table */}
        <AdminServersCard />

        {/* Orders table */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base font-semibold">Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <OrdersDataTable data={orders}/>
          </CardContent>
        </Card>
      </div>
    </main>);
}
//# sourceMappingURL=dashboard.js.map