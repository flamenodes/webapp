import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.literal(true).optional(),
    label: z.literal(true).optional(),
    percentage: z.literal(true).optional(),
    _all: z.literal(true).optional()
}).strict();
export const DiscountCountAggregateInputObjectSchema = makeSchema();
export const DiscountCountAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=DiscountCountAggregateInput.schema.js.map