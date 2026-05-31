import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    sortOrder: SortOrderSchema.optional()
}).strict();
export const ProductFeatureAvgOrderByAggregateInputObjectSchema = makeSchema();
export const ProductFeatureAvgOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductFeatureAvgOrderByAggregateInput.schema.js.map