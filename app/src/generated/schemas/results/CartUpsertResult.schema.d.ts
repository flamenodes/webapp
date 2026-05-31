import * as z from 'zod';
export declare const CartUpsertResultSchema: z.ZodObject<{
    id: z.ZodString;
    userId: z.ZodString;
    user: z.ZodAny;
    items: z.ZodArray<z.ZodAny>;
    couponCode: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=CartUpsertResult.schema.d.ts.map