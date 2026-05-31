import * as z from 'zod';
export declare const CartItemUpsertResultSchema: z.ZodObject<{
    id: z.ZodString;
    cartId: z.ZodString;
    productId: z.ZodString;
    quantity: z.ZodNumber;
    billingPeriod: z.ZodAny;
    cart: z.ZodAny;
    product: z.ZodAny;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=CartItemUpsertResult.schema.d.ts.map