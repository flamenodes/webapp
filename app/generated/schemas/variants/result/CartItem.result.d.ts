import * as z from 'zod';
export declare const CartItemResultSchema: z.ZodObject<{
    id: z.ZodString;
    cartId: z.ZodString;
    productId: z.ZodString;
    quantity: z.ZodNumber;
    billingPeriod: z.ZodEnum<{
        HOURLY: "HOURLY";
        DAILY: "DAILY";
        MONTHLY: "MONTHLY";
        QUARTERLY: "QUARTERLY";
        SEMIANNUALLY: "SEMIANNUALLY";
        YEARLY: "YEARLY";
    }>;
    configuration: z.ZodNullable<z.ZodUnknown>;
    cart: z.ZodUnknown;
    product: z.ZodUnknown;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strict>;
export type CartItemResultType = z.infer<typeof CartItemResultSchema>;
//# sourceMappingURL=CartItem.result.d.ts.map