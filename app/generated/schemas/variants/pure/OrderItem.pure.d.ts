import * as z from 'zod';
export declare const OrderItemModelSchema: z.ZodObject<{
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
    specsSnapshot: z.ZodNullable<z.ZodUnknown>;
    configuration: z.ZodNullable<z.ZodUnknown>;
    expiresAt: z.ZodNullable<z.ZodDate>;
    order: z.ZodUnknown;
    product: z.ZodUnknown;
    server: z.ZodNullable<z.ZodUnknown>;
    createdAt: z.ZodDate;
}, z.core.$strict>;
export type OrderItemPureType = z.infer<typeof OrderItemModelSchema>;
//# sourceMappingURL=OrderItem.pure.d.ts.map