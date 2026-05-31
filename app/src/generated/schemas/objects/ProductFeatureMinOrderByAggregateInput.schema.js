import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    productId: SortOrderSchema.optional(),
    label: SortOrderSchema.optional(),
    sortOrder: SortOrderSchema.optional()
}).strict();
export const ProductFeatureMinOrderByAggregateInputObjectSchema = makeSchema();
export const ProductFeatureMinOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductFeatureMinOrderByAggregateInput.schema.js.map