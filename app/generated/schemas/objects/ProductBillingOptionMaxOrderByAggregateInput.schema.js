import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    productId: SortOrderSchema.optional(),
    billingPeriod: SortOrderSchema.optional(),
    price: SortOrderSchema.optional()
}).strict();
export const ProductBillingOptionMaxOrderByAggregateInputObjectSchema = makeSchema();
export const ProductBillingOptionMaxOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductBillingOptionMaxOrderByAggregateInput.schema.js.map