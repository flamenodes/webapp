import * as z from 'zod';
export declare const OrderItemSchema: z.ZodObject<{
    id: z.ZodString;
    orderId: z.ZodString;
    productId: z.ZodString;
    productName: z.ZodString;
    quantity: z.ZodDefault<z.ZodNumber>;
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
    specsSnapshot: z.ZodOptional<z.ZodNullable<z.ZodAny>>;
    expiresAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    createdAt: z.ZodString;
}, z.core.$strip>;
export type OrderItemType = z.infer<typeof OrderItemSchema>;
//# sourceMappingURL=OrderItem.schema.d.ts.map