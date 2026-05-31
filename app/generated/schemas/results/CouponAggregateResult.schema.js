import * as z from 'zod';
export const CouponAggregateResultSchema = z.object({ _count: z.object({
        id: z.number(),
        code: z.number(),
        type: z.number(),
        amount: z.number(),
        description: z.number(),
        active: z.number(),
        expiresAt: z.number(),
        maxUses: z.number(),
        usedCount: z.number(),
        createdAt: z.number(),
        updatedAt: z.number()
    }).optional(),
    _sum: z.object({
        amount: z.number().nullable(),
        maxUses: z.number().nullable(),
        usedCount: z.number().nullable()
    }).nullable().optional(),
    _avg: z.object({
        amount: z.number().nullable(),
        maxUses: z.number().nullable(),
        usedCount: z.number().nullable()
    }).nullable().optional(),
    _min: z.object({
        id: z.string().nullable(),
        code: z.string().nullable(),
        amount: z.number().int().nullable(),
        description: z.string().nullable(),
        expiresAt: z.date().nullable(),
        maxUses: z.number().int().nullable(),
        usedCount: z.number().int().nullable(),
        createdAt: z.date().nullable(),
        updatedAt: z.date().nullable()
    }).nullable().optional(),
    _max: z.object({
        id: z.string().nullable(),
        code: z.string().nullable(),
        amount: z.number().int().nullable(),
        description: z.string().nullable(),
        expiresAt: z.date().nullable(),
        maxUses: z.number().int().nullable(),
        usedCount: z.number().int().nullable(),
        createdAt: z.date().nullable(),
        updatedAt: z.date().nullable()
    }).nullable().optional() });
//# sourceMappingURL=CouponAggregateResult.schema.js.map