import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    userId: SortOrderSchema.optional(),
    couponCode: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional(),
    updatedAt: SortOrderSchema.optional()
}).strict();
export const CartMinOrderByAggregateInputObjectSchema = makeSchema();
export const CartMinOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=CartMinOrderByAggregateInput.schema.js.map