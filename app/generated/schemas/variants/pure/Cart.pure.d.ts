import * as z from 'zod';
export declare const CartModelSchema: z.ZodObject<{
    id: z.ZodString;
    userId: z.ZodString;
    user: z.ZodUnknown;
    items: z.ZodArray<z.ZodUnknown>;
    couponCode: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strict>;
export type CartPureType = z.infer<typeof CartModelSchema>;
//# sourceMappingURL=Cart.pure.d.ts.map