import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    category: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional(),
    updatedAt: SortOrderSchema.optional()
}).strict();
export const ProductCategoryConfigMaxOrderByAggregateInputObjectSchema = makeSchema();
export const ProductCategoryConfigMaxOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductCategoryConfigMaxOrderByAggregateInput.schema.js.map