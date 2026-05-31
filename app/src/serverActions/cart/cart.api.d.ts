export declare const getCart: import("@tanstack/react-start").OptionalFetcher<undefined, undefined, Promise<any>>;
export declare const addToCart: import("@tanstack/react-start").OptionalFetcher<undefined, (data: unknown) => {
    productId: string;
    quantity: number;
    billingPeriod: "MONTHLY" | "QUARTERLY" | "YEARLY";
    configuration?: Record<string, unknown> | undefined;
}, Promise<{
    success: boolean;
    message: string;
}>>;
export declare const updateCartItem: import("@tanstack/react-start").OptionalFetcher<undefined, (data: unknown) => {
    itemId: string;
    quantity: number;
}, Promise<{
    success: boolean;
    message: string;
}>>;
export declare const removeFromCart: import("@tanstack/react-start").OptionalFetcher<undefined, (data: unknown) => {
    itemId: string;
}, Promise<{
    success: boolean;
    message: string;
}>>;
export declare const clearCart: import("@tanstack/react-start").OptionalFetcher<undefined, undefined, Promise<{
    success: boolean;
    message: string;
}>>;
//# sourceMappingURL=cart.api.d.ts.map