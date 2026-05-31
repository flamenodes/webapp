import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    sortOrder: SortOrderSchema.optional()
}).strict();
export const ProductFeatureSumOrderByAggregateInputObjectSchema = makeSchema();
export const ProductFeatureSumOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductFeatureSumOrderByAggregateInput.schema.js.map