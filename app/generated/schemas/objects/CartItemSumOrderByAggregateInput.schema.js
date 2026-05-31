import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    quantity: SortOrderSchema.optional()
}).strict();
export const CartItemSumOrderByAggregateInputObjectSchema = makeSchema();
export const CartItemSumOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=CartItemSumOrderByAggregateInput.schema.js.map