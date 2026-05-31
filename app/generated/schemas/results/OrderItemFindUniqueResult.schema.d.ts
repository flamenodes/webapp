import * as z from 'zod';
export declare const OrderItemFindUniqueResultSchema: z.ZodNullable<z.ZodObject<{
    id: z.ZodString;
    orderId: z.ZodString;
    productId: z.ZodString;
    productName: z.ZodString;
    quantity: z.ZodNumber;
    billingPeriod: z.ZodUnknown;
    unitPrice: z.ZodNumber;
    totalPrice: z.ZodNumber;
    specsSnapshot: z.ZodOptional<z.ZodUnknown>;
    configuration: z.ZodOptional<z.ZodUnknown>;
    expiresAt: z.ZodOptional<z.ZodDate>;
    order: z.ZodUnknown;
    product: z.ZodUnknown;
    server: z.ZodOptional<z.ZodUnknown>;
    createdAt: z.ZodDate;
}, z.core.$strip>>;
//# sourceMappingURL=OrderItemFindUniqueResult.schema.d.ts.map