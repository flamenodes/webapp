import * as z from 'zod';
export declare const CartInputSchema: z.ZodObject<{
    id: z.ZodString;
    userId: z.ZodString;
    user: z.ZodUnknown;
    items: z.ZodArray<z.ZodUnknown>;
    couponCode: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strict>;
export type CartInputType = z.infer<typeof CartInputSchema>;
//# sourceMappingURL=Cart.input.d.ts.map