import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card';
import { resourceUsage as mockData } from '#/data/dashboard/mockData';
function Gauge({ label, value }) {
    const r = 36;
    const circ = 2 * Math.PI * r;
    const dash = (value / 100) * circ;
    const color = value < 40 ? 'var(--destructive)' : value < 70 ? 'var(--warning)' : 'var(--primary)';
    return (<div className="flex flex-col items-center gap-2">
      <div className="relative w-24 h-24">
        <svg viewBox="0 0 88 88" className="w-full h-full -rotate-90">
          <circle cx="44" cy="44" r={r} fill="none" stroke="var(--muted)" strokeWidth="8"/>
          <circle cx="44" cy="44" r={r} fill="none" stroke={color} strokeWidth="8" strokeLinecap="round" strokeDasharray={`${dash} ${circ}`} className="transition-all duration-700"/>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-lg font-bold">{value}%</span>
        </div>
      </div>
      <span className="text-xs font-medium text-muted-foreground text-center">{label}</span>
    </div>);
}
export function ResourceGauges({ data }) {
    const gauges = data && data.length > 0 ? data : mockData;
    return (<Card className="border-border bg-card gap-0 py-0">
      <CardHeader className="pb-2 px-5 pt-5">
        <CardTitle className="text-sm font-semibold text-foreground">Resource Usage</CardTitle>
      </CardHeader>
      <CardContent className="px-5 pb-5 pt-0">
        <div className="flex justify-around">
          {gauges.map((r) => (<Gauge key={r.label} label={r.label} value={r.value}/>))}
        </div>
      </CardContent>
    </Card>);
}
//# sourceMappingURL=ResourceGauges.js.map