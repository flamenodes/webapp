import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.literal(true).optional(),
    label: z.literal(true).optional(),
    percentage: z.literal(true).optional()
}).strict();
export const DiscountMaxAggregateInputObjectSchema = makeSchema();
export const DiscountMaxAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=DiscountMaxAggregateInput.schema.js.map