import z from 'zod';
export declare const getDashboardStats: import("@tanstack/react-start").OptionalFetcher<undefined, undefined, Promise<{
    revenue: {
        total: any;
        thisMonth: any;
        change: string | null;
    };
    activeServers: any;
    pendingOrders: any;
    openTickets: any;
    totalCustomers: any;
    statusNodes: any[];
    serverStatus: {
        status: string;
        count: number;
        color: string;
    }[];
    resourceGauges: [{
        label: "Node Uptime";
        value: number;
    }, {
        label: "Ticket Res.";
        value: number;
    }, {
        label: "Order Success";
        value: number;
    }];
    activities: any[];
    alerts: any[];
}>>;
export declare const getAllOrders: import("@tanstack/react-start").OptionalFetcher<undefined, undefined, Promise<any>>;
export declare const deleteOrder: import("@tanstack/react-start").RequiredFetcher<undefined, z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>, Promise<{
    success: true;
    message: "Order deleted successfully";
}>>;
export declare const deleteOrders: import("@tanstack/react-start").RequiredFetcher<undefined, z.ZodObject<{
    ids: z.ZodArray<z.ZodString>;
}, z.core.$strip>, Promise<{
    success: true;
    deleted: any;
    message: `${any} orders deleted successfully`;
}>>;
//# sourceMappingURL=dashboard.api.d.ts.map