import { z } from 'zod';
export declare const createOrderSchema: z.ZodObject<{
    amount: z.ZodNumber;
    currency: z.ZodLiteral<"INR">;
    receipt: z.ZodString;
    notes: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, z.core.$strip>;
export declare const createRazorOrderFn: import("@tanstack/react-start").RequiredFetcher<undefined, z.ZodObject<{
    amount: z.ZodNumber;
    currency: z.ZodLiteral<"INR">;
    receipt: z.ZodString;
    notes: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, z.core.$strip>, Promise<import("razorpay/dist/types/orders").Orders.RazorpayOrder>>;
export declare const getAllRazorOrderFn: import("@tanstack/react-start").OptionalFetcher<undefined, undefined, Promise<any>>;
export declare const getRazorOrderByID: import("@tanstack/react-start").RequiredFetcher<undefined, z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>, Promise<any>>;
//# sourceMappingURL=order.d.ts.map