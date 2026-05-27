import { systemUpdates } from '#/data/dashboard/dashboardData'

export function UpdatesCard() {
  return (
    <div className="flex flex-col rounded-2xl border border-border bg-card overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-border">
        <h2 className="text-sm font-semibold">Updates</h2>
        <button className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded">
          View all
        </button>
      </div>

      <div className="flex flex-col px-4 py-1">
        {systemUpdates.slice(0, 4).map((item, i) => (
          <div
            key={item.id}
            className={`flex items-center justify-between py-2.5 ${i < 3 ? 'border-b border-border' : ''}`}
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              <span className="text-xs text-foreground truncate">{item.title}</span>
            </div>
            <span className="text-[10px] text-muted-foreground shrink-0 ml-3">{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
