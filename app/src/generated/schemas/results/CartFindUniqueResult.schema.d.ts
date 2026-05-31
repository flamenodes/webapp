import * as z from 'zod';
export declare const CartFindUniqueResultSchema: z.ZodNullable<z.ZodObject<{
    id: z.ZodString;
    userId: z.ZodString;
    user: z.ZodAny;
    items: z.ZodArray<z.ZodAny>;
    couponCode: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strip>>;
//# sourceMappingURL=CartFindUniqueResult.schema.d.ts.map