import * as z from 'zod';
export declare const CartModelSchema: z.ZodObject<{
    id: z.ZodString;
    userId: z.ZodString;
    user: z.ZodAny;
    items: z.ZodArray<z.ZodAny>;
    couponCode: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strict>;
export type CartPureType = z.infer<typeof CartModelSchema>;
//# sourceMappingURL=Cart.pure.d.ts.map