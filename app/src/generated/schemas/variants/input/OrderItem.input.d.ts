import * as z from 'zod';
export declare const OrderItemInputSchema: z.ZodObject<{
    id: z.ZodString;
    orderId: z.ZodString;
    productId: z.ZodString;
    productName: z.ZodString;
    quantity: z.ZodNumber;
    billingPeriod: z.ZodEnum<{
        HOURLY: "HOURLY";
        DAILY: "DAILY";
        MONTHLY: "MONTHLY";
        QUARTERLY: "QUARTERLY";
        SEMIANNUALLY: "SEMIANNUALLY";
        YEARLY: "YEARLY";
    }>;
    unitPrice: z.ZodNumber;
    totalPrice: z.ZodNumber;
    specsSnapshot: z.ZodNullable<z.ZodOptional<z.ZodAny>>;
    expiresAt: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    order: z.ZodAny;
    product: z.ZodAny;
    server: z.ZodNullable<z.ZodOptional<z.ZodAny>>;
    createdAt: z.ZodString;
}, z.core.$strict>;
export type OrderItemInputType = z.infer<typeof OrderItemInputSchema>;
//# sourceMappingURL=OrderItem.input.d.ts.map