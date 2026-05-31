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
export const CartItemMinOrderByAggregateInputObjectSchema = makeSchema();
export const CartItemMinOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=CartItemMinOrderByAggregateInput.schema.js.map