import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    quantity: SortOrderSchema.optional()
}).strict();
export const CartItemAvgOrderByAggregateInputObjectSchema = makeSchema();
export const CartItemAvgOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=CartItemAvgOrderByAggregateInput.schema.js.map