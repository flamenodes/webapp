import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.literal(true).optional(),
    cartId: z.literal(true).optional(),
    productId: z.literal(true).optional(),
    quantity: z.literal(true).optional(),
    billingPeriod: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional()
}).strict();
export const CartItemMaxAggregateInputObjectSchema = makeSchema();
export const CartItemMaxAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=CartItemMaxAggregateInput.schema.js.map