import * as z from 'zod';
const makeSchema = () => z.object({
    amount: z.literal(true).optional(),
    maxUses: z.literal(true).optional(),
    usedCount: z.literal(true).optional()
}).strict();
export const CouponAvgAggregateInputObjectSchema = makeSchema();
export const CouponAvgAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=CouponAvgAggregateInput.schema.js.map