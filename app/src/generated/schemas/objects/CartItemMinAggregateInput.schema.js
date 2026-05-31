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
export const CartItemMinAggregateInputObjectSchema = makeSchema();
export const CartItemMinAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=CartItemMinAggregateInput.schema.js.map