import * as z from 'zod';
const makeSchema = () => z.object({
    percentage: z.literal(true).optional()
}).strict();
export const DiscountAvgAggregateInputObjectSchema = makeSchema();
export const DiscountAvgAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=DiscountAvgAggregateInput.schema.js.map