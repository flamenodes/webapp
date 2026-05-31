type FilterStatus = 'all' | 'open' | 'closed' | 'pending';
interface StatusFiltersProps {
    activeFilter: FilterStatus;
    onFilterChange: (filter: FilterStatus) => void;
}
export declare function StatusFilters({ activeFilter, onFilterChange }: StatusFiltersProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=StatusFilters.d.ts.map