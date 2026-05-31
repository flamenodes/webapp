import * as z from 'zod';
export declare const OrderItemCreateSchema: z.ZodObject<{
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
    specsSnapshot: z.ZodNullable<z.ZodAny>;
    expiresAt: z.ZodNullable<z.ZodString>;
    order: z.ZodAny;
    product: z.ZodAny;
    server: z.ZodNullable<z.ZodAny>;
    createdAt: z.ZodString;
}, z.core.$strict>;
export type OrderItemCreateType = z.infer<typeof OrderItemCreateSchema>;
//# sourceMappingURL=OrderItem.create.d.ts.map