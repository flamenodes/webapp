import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    subtotalAmount: SortOrderSchema.optional(),
    discountAmount: SortOrderSchema.optional(),
    totalAmount: SortOrderSchema.optional()
}).strict();
export const OrderSumOrderByAggregateInputObjectSchema = makeSchema();
export const OrderSumOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=OrderSumOrderByAggregateInput.schema.js.map