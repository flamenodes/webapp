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
    updatedAt: z.literal(true).optional()
}).strict();
export const CouponMinAggregateInputObjectSchema = makeSchema();
export const CouponMinAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=CouponMinAggregateInput.schema.js.map