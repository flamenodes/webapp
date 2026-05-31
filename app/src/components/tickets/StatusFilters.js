import { Button } from '@/components/ui/button';
const filters = [
    { label: 'All', value: 'all' },
    { label: 'Open', value: 'open' },
    { label: 'Closed', value: 'closed' },
    { label: 'Pending', value: 'pending' }
];
export function StatusFilters({ activeFilter, onFilterChange }) {
    return (<div className="flex gap-2 px-4 pb-3">
      {filters.map((filter) => (<Button key={filter.value} variant={activeFilter === filter.value ? 'default' : 'ghost'} size="sm" onClick={() => onFilterChange(filter.value)} className={`rounded-full text-xs ${activeFilter === filter.value
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground'}`}>
          {filter.label}
        </Button>))}
    </div>);
}
//# sourceMappingURL=StatusFilters.js.map