interface StatCardProps {
    icon: string;
    label: string;
    value: string;
    change: string;
    trend: 'up' | 'down' | 'stable' | 'warning';
    sparkline?: number[] | null;
    progress?: number | null;
    action?: string | null;
    onAction?: () => void;
}
export declare function StatCard({ icon, label, value, change, trend, sparkline, progress, action, onAction }: StatCardProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=StatCard.d.ts.map