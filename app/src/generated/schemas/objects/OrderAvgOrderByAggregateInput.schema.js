import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    subtotalAmount: SortOrderSchema.optional(),
    discountAmount: SortOrderSchema.optional(),
    totalAmount: SortOrderSchema.optional()
}).strict();
export const OrderAvgOrderByAggregateInputObjectSchema = makeSchema();
export const OrderAvgOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=OrderAvgOrderByAggregateInput.schema.js.map