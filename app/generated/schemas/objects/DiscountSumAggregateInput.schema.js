import * as z from 'zod';
const makeSchema = () => z.object({
    percentage: z.literal(true).optional()
}).strict();
export const DiscountSumAggregateInputObjectSchema = makeSchema();
export const DiscountSumAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=DiscountSumAggregateInput.schema.js.map