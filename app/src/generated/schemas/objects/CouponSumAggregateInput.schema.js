import * as z from 'zod';
const makeSchema = () => z.object({
    amount: z.literal(true).optional(),
    maxUses: z.literal(true).optional(),
    usedCount: z.literal(true).optional()
}).strict();
export const CouponSumAggregateInputObjectSchema = makeSchema();
export const CouponSumAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=CouponSumAggregateInput.schema.js.map