import * as z from 'zod';
export declare const CartItemInputSchema: z.ZodObject<{
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
    configuration: z.ZodNullable<z.ZodOptional<z.ZodUnknown>>;
    cart: z.ZodUnknown;
    product: z.ZodUnknown;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strict>;
export type CartItemInputType = z.infer<typeof CartItemInputSchema>;
//# sourceMappingURL=CartItem.input.d.ts.map