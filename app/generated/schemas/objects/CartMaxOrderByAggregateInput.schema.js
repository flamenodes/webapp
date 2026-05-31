import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    userId: SortOrderSchema.optional(),
    couponCode: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional(),
    updatedAt: SortOrderSchema.optional()
}).strict();
export const CartMaxOrderByAggregateInputObjectSchema = makeSchema();
export const CartMaxOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=CartMaxOrderByAggregateInput.schema.js.map