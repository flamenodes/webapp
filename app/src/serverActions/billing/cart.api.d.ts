import { z } from "zod";
export declare const getCart: import("@tanstack/react-start").OptionalFetcher<undefined, undefined, Promise<any>>;
export declare const addToCart: any;
export declare const updateCartItem: import("@tanstack/react-start").RequiredFetcher<undefined, z.ZodObject<{
    itemId: z.ZodString;
    quantity: z.ZodNumber;
    billingPeriod: z.ZodOptional<z.ZodEnum<{
        MONTHLY: "MONTHLY";
        YEARLY: "YEARLY";
    }>>;
}, z.core.$strip>, Promise<any>>;
export declare const removeFromCart: import("@tanstack/react-start").RequiredFetcher<undefined, z.ZodObject<{
    itemId: z.ZodString;
}, z.core.$strip>, Promise<any>>;
export declare const clearCart: import("@tanstack/react-start").OptionalFetcher<undefined, undefined, Promise<{
    success: true;
    message: "Cart already empty.";
} | {
    success: true;
    message: "Cart cleared.";
}>>;
//# sourceMappingURL=cart.api.d.ts.map