import * as z from 'zod';
export declare const CartCreateSchema: z.ZodObject<{
    id: z.ZodString;
    userId: z.ZodString;
    user: z.ZodAny;
    items: z.ZodArray<z.ZodAny>;
    couponCode: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strict>;
export type CartCreateType = z.infer<typeof CartCreateSchema>;
//# sourceMappingURL=Cart.create.d.ts.map