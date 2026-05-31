import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    couponCode: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional()
}).strict();
export const CartMaxAggregateInputObjectSchema = makeSchema();
export const CartMaxAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=CartMaxAggregateInput.schema.js.map