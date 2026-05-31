export declare const activeServers: ({
    id: string;
    name: string;
    hostname: string;
    location: string;
    status: "online";
    icon: string;
} | {
    id: string;
    name: string;
    hostname: string;
    location: string;
    status: "maintenance";
    icon: string;
})[];
export declare const systemUpdates: {
    id: number;
    title: string;
    description: string;
    time: string;
}[];
export declare const notifications: {
    id: number;
    title: string;
    description: string;
    time: string;
    unread: boolean;
}[];
export declare const heroMeta: {
    icon: string;
    label: string;
    value: string;
}[];
export declare const userStats: ({
    icon: string;
    label: string;
    value: string;
    change: string;
    trend: "up";
} | {
    icon: string;
    label: string;
    value: string;
    change: string;
    trend: "warning";
} | {
    icon: string;
    label: string;
    value: string;
    change: string;
    trend: "stable";
})[];
//# sourceMappingURL=dashboardData.d.ts.map