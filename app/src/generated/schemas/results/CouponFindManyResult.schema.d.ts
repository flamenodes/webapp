import * as z from 'zod';
export declare const CouponFindManyResultSchema: z.ZodObject<{
    data: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        code: z.ZodString;
        type: z.ZodAny;
        amount: z.ZodNumber;
        description: z.ZodOptional<z.ZodString>;
        active: z.ZodBoolean;
        expiresAt: z.ZodOptional<z.ZodString>;
        maxUses: z.ZodOptional<z.ZodNumber>;
        usedCount: z.ZodNumber;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>>;
    pagination: z.ZodObject<{
        page: z.ZodNumber;
        pageSize: z.ZodNumber;
        total: z.ZodNumber;
        totalPages: z.ZodNumber;
        hasNext: z.ZodBoolean;
        hasPrev: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>;
//# sourceMappingURL=CouponFindManyResult.schema.d.ts.map