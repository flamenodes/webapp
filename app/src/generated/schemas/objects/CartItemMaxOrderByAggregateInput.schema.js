import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    cartId: SortOrderSchema.optional(),
    productId: SortOrderSchema.optional(),
    quantity: SortOrderSchema.optional(),
    billingPeriod: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional(),
    updatedAt: SortOrderSchema.optional()
}).strict();
export const CartItemMaxOrderByAggregateInputObjectSchema = makeSchema();
export const CartItemMaxOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=CartItemMaxOrderByAggregateInput.schema.js.map