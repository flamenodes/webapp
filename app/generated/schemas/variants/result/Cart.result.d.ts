import * as z from 'zod';
export declare const CartResultSchema: z.ZodObject<{
    id: z.ZodString;
    userId: z.ZodString;
    user: z.ZodUnknown;
    items: z.ZodArray<z.ZodUnknown>;
    couponCode: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strict>;
export type CartResultType = z.infer<typeof CartResultSchema>;
//# sourceMappingURL=Cart.result.d.ts.map