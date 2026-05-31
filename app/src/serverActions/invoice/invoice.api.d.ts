export declare const generateInvoice: import("@tanstack/react-start").OptionalFetcher<undefined, (data: unknown) => {
    orderId: string;
    razorpayData?: Record<any, unknown> | undefined;
}, Promise<{
    success: boolean;
    message: string;
}>>;
export declare const getInvoices: import("@tanstack/react-start").OptionalFetcher<undefined, undefined, Promise<{
    success: boolean;
    message: string;
}>>;
export declare const getInvoiceByOrderId: import("@tanstack/react-start").OptionalFetcher<undefined, (data: unknown) => {
    orderId: string;
}, Promise<any>>;
export declare const getAllInvoices: import("@tanstack/react-start").OptionalFetcher<undefined, undefined, Promise<{
    success: boolean;
    message: string;
    data: any;
}>>;
//# sourceMappingURL=invoice.api.d.ts.map