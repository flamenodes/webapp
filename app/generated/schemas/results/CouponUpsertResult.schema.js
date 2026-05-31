import * as z from 'zod';
export const CouponUpsertResultSchema = z.object({
    id: z.string(),
    code: z.string(),
    type: z.unknown(),
    amount: z.number().int(),
    description: z.string().optional(),
    active: z.boolean(),
    expiresAt: z.date().optional(),
    maxUses: z.number().int().optional(),
    usedCount: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date()
});
//# sourceMappingURL=CouponUpsertResult.schema.js.map