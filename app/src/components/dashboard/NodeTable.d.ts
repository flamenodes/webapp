type UnifiedNode = {
    id: string;
    name: string;
    ip: string;
    location: string;
    type: string;
    port: number;
    protocol: string;
    status: string;
    latency: number | null;
    lastChecked: Date | string | null;
    cpu: number | null;
    memory: number | null;
    disk: number | null;
};
interface NodeTableProps {
    nodes?: UnifiedNode[];
    onNodesChanged?: () => void;
}
export declare function NodeTable({ nodes, onNodesChanged }: NodeTableProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=NodeTable.d.ts.map