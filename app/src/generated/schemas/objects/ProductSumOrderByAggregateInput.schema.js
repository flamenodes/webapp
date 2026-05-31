import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    price: SortOrderSchema.optional(),
    sortOrder: SortOrderSchema.optional()
}).strict();
export const ProductSumOrderByAggregateInputObjectSchema = makeSchema();
export const ProductSumOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductSumOrderByAggregateInput.schema.js.map