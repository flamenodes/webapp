import * as z from 'zod';
export declare const OrderItemFindManyResultSchema: z.ZodObject<{
    data: z.ZodArray<z.ZodObject<{
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
    pagination: z.ZodObject<{
        page: z.ZodNumber;
        pageSize: z.ZodNumber;
        total: z.ZodNumber;
        totalPages: z.ZodNumber;
        hasNext: z.ZodBoolean;
        hasPrev: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>;
//# sourceMappingURL=OrderItemFindManyResult.schema.d.ts.map