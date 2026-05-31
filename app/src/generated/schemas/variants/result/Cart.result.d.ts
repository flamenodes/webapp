import * as z from 'zod';
export declare const CartResultSchema: z.ZodObject<{
    id: z.ZodString;
    userId: z.ZodString;
    user: z.ZodAny;
    items: z.ZodArray<z.ZodAny>;
    couponCode: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strict>;
export type CartResultType = z.infer<typeof CartResultSchema>;
//# sourceMappingURL=Cart.result.d.ts.map