import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    couponCode: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    _all: z.literal(true).optional()
}).strict();
export const CartCountAggregateInputObjectSchema = makeSchema();
export const CartCountAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=CartCountAggregateInput.schema.js.map