export declare const getRazorpayKeyId: import("@tanstack/react-start").OptionalFetcher<undefined, undefined, Promise<string>>;
export declare const getAllOrders: import("@tanstack/react-start").OptionalFetcher<undefined, undefined, Promise<any>>;
export declare const createManualOrder: import("@tanstack/react-start").OptionalFetcher<undefined, (data: unknown) => {
    userEmail: string;
    productId: string;
    quantity: number;
    billingPeriod: "MONTHLY" | "QUARTERLY" | "YEARLY";
}, Promise<{
    success: boolean;
    message: string;
}>>;
export declare const generatePaymentLink: import("@tanstack/react-start").OptionalFetcher<undefined, (data: unknown) => {
    orderId: string;
}, Promise<{
    success: boolean;
    message: string;
}>>;
export declare const updateOrderStatus: import("@tanstack/react-start").OptionalFetcher<undefined, (data: unknown) => {
    orderId: string;
    status: string;
}, Promise<{
    success: boolean;
    message: string;
}>>;
export declare const getAllProducts: import("@tanstack/react-start").OptionalFetcher<undefined, undefined, Promise<any>>;
export declare const getPendingCustomOrders: import("@tanstack/react-start").OptionalFetcher<undefined, undefined, Promise<{
    success: boolean;
    message: string;
    data: any;
}>>;
export declare const deliverCustomOrder: import("@tanstack/react-start").OptionalFetcher<undefined, (data: unknown) => {
    orderId: string;
    serverName: string;
    ip?: string | undefined;
    port?: number | undefined;
    notes?: string | undefined;
}, Promise<{
    success: boolean;
    message: string;
}>>;
//# sourceMappingURL=orders.api.d.ts.map