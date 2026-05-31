type Alert = {
    id: string | number;
    severity: 'critical' | 'warning';
    message: string;
    time: string;
};
interface AlertPanelProps {
    alerts?: Alert[];
}
export declare function AlertPanel({ alerts }: AlertPanelProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=AlertPanel.d.ts.map