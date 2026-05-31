import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    quantity: SortOrderSchema.optional(),
    unitPrice: SortOrderSchema.optional(),
    totalPrice: SortOrderSchema.optional()
}).strict();
export const OrderItemSumOrderByAggregateInputObjectSchema = makeSchema();
export const OrderItemSumOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=OrderItemSumOrderByAggregateInput.schema.js.map