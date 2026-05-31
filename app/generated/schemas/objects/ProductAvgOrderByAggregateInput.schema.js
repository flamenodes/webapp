import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    price: SortOrderSchema.optional(),
    sortOrder: SortOrderSchema.optional()
}).strict();
export const ProductAvgOrderByAggregateInputObjectSchema = makeSchema();
export const ProductAvgOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductAvgOrderByAggregateInput.schema.js.map