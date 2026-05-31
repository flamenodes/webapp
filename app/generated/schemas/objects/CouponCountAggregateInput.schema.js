import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.literal(true).optional(),
    code: z.literal(true).optional(),
    type: z.literal(true).optional(),
    amount: z.literal(true).optional(),
    description: z.literal(true).optional(),
    active: z.literal(true).optional(),
    expiresAt: z.literal(true).optional(),
    maxUses: z.literal(true).optional(),
    usedCount: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    _all: z.literal(true).optional()
}).strict();
export const CouponCountAggregateInputObjectSchema = makeSchema();
export const CouponCountAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=CouponCountAggregateInput.schema.js.map