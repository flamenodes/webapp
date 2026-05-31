import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    quantity: SortOrderSchema.optional(),
    unitPrice: SortOrderSchema.optional(),
    totalPrice: SortOrderSchema.optional()
}).strict();
export const OrderItemAvgOrderByAggregateInputObjectSchema = makeSchema();
export const OrderItemAvgOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=OrderItemAvgOrderByAggregateInput.schema.js.map