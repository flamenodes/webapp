import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    category: SortOrderSchema.optional(),
    billingPeriods: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional(),
    updatedAt: SortOrderSchema.optional()
}).strict();
export const ProductCategoryConfigCountOrderByAggregateInputObjectSchema = makeSchema();
export const ProductCategoryConfigCountOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductCategoryConfigCountOrderByAggregateInput.schema.js.map