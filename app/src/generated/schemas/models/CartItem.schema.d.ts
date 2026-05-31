import * as z from 'zod';
export declare const CartItemSchema: z.ZodObject<{
    id: z.ZodString;
    cartId: z.ZodString;
    productId: z.ZodString;
    quantity: z.ZodDefault<z.ZodNumber>;
    billingPeriod: z.ZodDefault<z.ZodEnum<{
        HOURLY: "HOURLY";
        DAILY: "DAILY";
        MONTHLY: "MONTHLY";
        QUARTERLY: "QUARTERLY";
        SEMIANNUALLY: "SEMIANNUALLY";
        YEARLY: "YEARLY";
    }>>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strip>;
export type CartItemType = z.infer<typeof CartItemSchema>;
//# sourceMappingURL=CartItem.schema.d.ts.map