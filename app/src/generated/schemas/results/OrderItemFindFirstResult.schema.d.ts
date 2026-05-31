import * as z from 'zod';
export declare const OrderItemFindFirstResultSchema: z.ZodNullable<z.ZodObject<{
    id: z.ZodString;
    orderId: z.ZodString;
    productId: z.ZodString;
    productName: z.ZodString;
    quantity: z.ZodNumber;
    billingPeriod: z.ZodAny;
    unitPrice: z.ZodNumber;
    totalPrice: z.ZodNumber;
    specsSnapshot: z.ZodOptional<z.ZodAny>;
    expiresAt: z.ZodOptional<z.ZodString>;
    order: z.ZodAny;
    product: z.ZodAny;
    server: z.ZodOptional<z.ZodAny>;
    createdAt: z.ZodString;
}, z.core.$strip>>;
//# sourceMappingURL=OrderItemFindFirstResult.schema.d.ts.map