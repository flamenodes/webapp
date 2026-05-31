import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    price: SortOrderSchema.optional()
}).strict();
export const ProductBillingOptionSumOrderByAggregateInputObjectSchema = makeSchema();
export const ProductBillingOptionSumOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductBillingOptionSumOrderByAggregateInput.schema.js.map