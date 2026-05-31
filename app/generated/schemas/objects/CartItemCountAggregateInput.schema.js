import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.literal(true).optional(),
    cartId: z.literal(true).optional(),
    productId: z.literal(true).optional(),
    quantity: z.literal(true).optional(),
    billingPeriod: z.literal(true).optional(),
    configuration: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    _all: z.literal(true).optional()
}).strict();
export const CartItemCountAggregateInputObjectSchema = makeSchema();
export const CartItemCountAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=CartItemCountAggregateInput.schema.js.map