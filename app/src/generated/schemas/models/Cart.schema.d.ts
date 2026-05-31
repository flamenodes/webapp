import * as z from 'zod';
export declare const CartSchema: z.ZodObject<{
    id: z.ZodString;
    userId: z.ZodString;
    couponCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strip>;
export type CartType = z.infer<typeof CartSchema>;
//# sourceMappingURL=Cart.schema.d.ts.map