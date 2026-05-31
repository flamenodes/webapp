import * as z from 'zod';
export declare const CouponFindFirstResultSchema: z.ZodNullable<z.ZodObject<{
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
//# sourceMappingURL=CouponFindFirstResult.schema.d.ts.map