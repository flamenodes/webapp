import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    productId: SortOrderSchema.optional(),
    label: SortOrderSchema.optional(),
    sortOrder: SortOrderSchema.optional()
}).strict();
export const ProductFeatureMaxOrderByAggregateInputObjectSchema = makeSchema();
export const ProductFeatureMaxOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductFeatureMaxOrderByAggregateInput.schema.js.map