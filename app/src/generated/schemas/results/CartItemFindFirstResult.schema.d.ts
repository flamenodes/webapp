import * as z from 'zod';
export declare const CartItemFindFirstResultSchema: z.ZodNullable<z.ZodObject<{
    id: z.ZodString;
    cartId: z.ZodString;
    productId: z.ZodString;
    quantity: z.ZodNumber;
    billingPeriod: z.ZodAny;
    cart: z.ZodAny;
    product: z.ZodAny;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strip>>;
//# sourceMappingURL=CartItemFindFirstResult.schema.d.ts.map