import * as z from 'zod';
export const CouponFindFirstResultSchema = z.nullable(z.object({
    id: z.string(),
    code: z.string(),
    type: z.any(),
    amount: z.number().int(),
    description: z.string().optional(),
    active: z.boolean(),
    expiresAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").optional(),
    maxUses: z.number().int().optional(),
    usedCount: z.number().int(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime")
}));
//# sourceMappingURL=CouponFindFirstResult.schema.js.map