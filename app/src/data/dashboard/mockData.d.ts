export declare const dashboardStats: ({
    icon: string;
    label: string;
    value: string;
    change: string;
    trend: "up";
    progress: null;
    action: null;
    sparkline: number[];
} | {
    icon: string;
    label: string;
    value: string;
    change: string;
    trend: "up";
    progress: null;
    action: null;
    sparkline: null;
} | {
    icon: string;
    label: string;
    value: string;
    change: string;
    trend: "stable";
    progress: number;
    action: null;
    sparkline: null;
} | {
    icon: string;
    label: string;
    value: string;
    change: string;
    trend: "warning";
    progress: null;
    action: string;
    sparkline: null;
})[];
export declare const serverStatus: {
    status: string;
    count: number;
    color: string;
}[];
export declare const recentActivity: {
    id: number;
    type: string;
    message: string;
    detail: string;
    time: string;
    badge: string;
}[];
export declare const alerts: {
    id: number;
    severity: string;
    message: string;
    time: string;
}[];
export declare const nodeData: {
    name: string;
    location: string;
    status: string;
    servers: number;
    cpu: number;
    memory: number;
}[];
export declare const resourceUsage: {
    label: string;
    value: number;
}[];
export declare const quickActions: {
    icon: string;
    label: string;
}[];
//# sourceMappingURL=mockData.d.ts.map