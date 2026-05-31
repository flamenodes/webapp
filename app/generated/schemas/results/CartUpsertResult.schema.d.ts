import * as z from 'zod';
export declare const CartUpsertResultSchema: z.ZodObject<{
    id: z.ZodString;
    userId: z.ZodString;
    user: z.ZodUnknown;
    items: z.ZodArray<z.ZodUnknown>;
    couponCode: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strip>;
//# sourceMappingURL=CartUpsertResult.schema.d.ts.map