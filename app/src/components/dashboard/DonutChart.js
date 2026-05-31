import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card';
import { serverStatus as mockData } from '#/data/dashboard/mockData';
const FALLBACK_COLORS = ['var(--chart-1)', 'var(--chart-2)', '#fb7185', 'var(--muted-foreground)'];
export function DonutChart({ data }) {
    // Only fall back to mock when data is not provided at all (undefined)
    const entries = data !== undefined ? data : mockData;
    const total = entries.reduce((sum, s) => sum + s.count, 0);
    return (<Card className="border-border bg-card gap-0 py-0">
      <CardHeader className="pb-2 px-5 pt-5">
        <CardTitle className="text-sm font-semibold text-foreground">Server Status</CardTitle>
      </CardHeader>
      <CardContent className="px-5 pb-5 pt-0">
        <div className="flex items-center gap-6">
          <div className="relative w-32 h-32 shrink-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={entries} cx="50%" cy="50%" innerRadius={42} outerRadius={60} dataKey="count" strokeWidth={0}>
                  {entries.map((entry, i) => (<Cell key={i} fill={entry.color ?? FALLBACK_COLORS[i % FALLBACK_COLORS.length]}/>))}
                </Pie>
                <Tooltip contentStyle={{
            background: 'var(--popover)',
            border: '1px solid var(--border)',
            borderRadius: '0.75rem',
            color: 'var(--foreground)',
            fontSize: '12px',
        }}/>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-2xl font-bold">{total}</span>
              <span className="text-xs text-muted-foreground">Nodes</span>
            </div>
          </div>
          <div className="flex flex-col gap-3 flex-1">
            {entries.map((s, i) => (<div key={s.status} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: s.color ?? FALLBACK_COLORS[i % FALLBACK_COLORS.length] }}/>
                  <span className="text-sm text-muted-foreground">{s.status}</span>
                </div>
                <span className="text-sm font-semibold">{s.count}</span>
              </div>))}
            {total === 0 && (<p className="text-xs text-muted-foreground">No nodes configured</p>)}
          </div>
        </div>
      </CardContent>
    </Card>);
}
//# sourceMappingURL=DonutChart.js.map