type PteroNode = {
    id: number;
    name: string;
    description: string | null;
    fqdn: string;
    scheme: string;
    maintenance_mode: boolean;
    memory: number;
    memory_overallocate: number;
    disk: number;
    disk_overallocate: number;
    daemon_listen: number;
    daemon_sftp: number;
};
interface PteroNodeTableProps {
    nodes: PteroNode[];
}
export declare function PteroNodeTable({ nodes }: PteroNodeTableProps): import("react").JSX.Element | null;
export {};
//# sourceMappingURL=PteroNodeTable.d.ts.map