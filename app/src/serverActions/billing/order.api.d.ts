export declare const createOrder: import("@tanstack/react-start").OptionalFetcher<undefined, (data: unknown) => {
    cartId?: string | undefined;
}, Promise<{
    success: boolean;
    message: string;
}>>;
export declare const getOrders: import("@tanstack/react-start").OptionalFetcher<undefined, undefined, Promise<any>>;
export declare const getOrder: import("@tanstack/react-start").OptionalFetcher<undefined, (data: unknown) => {
    orderId: string;
}, Promise<any>>;
export declare const updateOrderStatus: import("@tanstack/react-start").OptionalFetcher<undefined, (data: unknown) => {
    orderId: string;
    status: "PENDING" | "PAYMENT_FAILED" | "PAID" | "PROCESSING" | "DELIVERED" | "CANCELLED" | "REFUNDED";
}, Promise<{
    success: boolean;
    message: string;
}>>;
export declare const checkoutProduct: import("@tanstack/react-start").OptionalFetcher<undefined, (data: unknown) => {
    productId: string;
    quantity: number;
    billingPeriod: "MONTHLY" | "QUARTERLY" | "YEARLY";
    billingName: string;
    billingEmail: string;
    configuration?: Record<string, unknown> | undefined;
    billingPhone?: string | undefined;
}, Promise<{
    success: boolean;
    message: string;
}>>;
export declare const cancelOrder: import("@tanstack/react-start").OptionalFetcher<undefined, (data: unknown) => {
    orderId: string;
}, Promise<{
    success: boolean;
    message: string;
}>>;
//# sourceMappingURL=order.api.d.ts.map