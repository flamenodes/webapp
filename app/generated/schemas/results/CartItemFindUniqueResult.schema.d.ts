import * as z from 'zod';
export declare const CartItemFindUniqueResultSchema: z.ZodNullable<z.ZodObject<{
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
//# sourceMappingURL=CartItemFindUniqueResult.schema.d.ts.map