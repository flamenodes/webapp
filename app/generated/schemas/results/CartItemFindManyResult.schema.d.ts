import * as z from 'zod';
export declare const CartItemFindManyResultSchema: z.ZodObject<{
    data: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        cartId: z.ZodString;
        productId: z.ZodString;
        quantity: z.ZodNumber;
        billingPeriod: z.ZodUnknown;
        configuration: z.ZodOptional<z.ZodUnknown>;
        cart: z.ZodUnknown;
        product: z.ZodUnknown;
        createdAt: z.ZodDate;
        updatedAt: z.ZodDate;
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
//# sourceMappingURL=CartItemFindManyResult.schema.d.ts.map