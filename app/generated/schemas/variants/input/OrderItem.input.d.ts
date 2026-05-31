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
    specsSnapshot: z.ZodNullable<z.ZodOptional<z.ZodUnknown>>;
    configuration: z.ZodNullable<z.ZodOptional<z.ZodUnknown>>;
    expiresAt: z.ZodNullable<z.ZodOptional<z.ZodDate>>;
    order: z.ZodUnknown;
    product: z.ZodUnknown;
    server: z.ZodNullable<z.ZodOptional<z.ZodUnknown>>;
    createdAt: z.ZodDate;
}, z.core.$strict>;
export type OrderItemInputType = z.infer<typeof OrderItemInputSchema>;
//# sourceMappingURL=OrderItem.input.d.ts.map