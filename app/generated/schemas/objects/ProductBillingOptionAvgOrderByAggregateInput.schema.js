import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    price: SortOrderSchema.optional()
}).strict();
export const ProductBillingOptionAvgOrderByAggregateInputObjectSchema = makeSchema();
export const ProductBillingOptionAvgOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductBillingOptionAvgOrderByAggregateInput.schema.js.map