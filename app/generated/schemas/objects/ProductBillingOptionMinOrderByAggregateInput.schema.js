import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    productId: SortOrderSchema.optional(),
    billingPeriod: SortOrderSchema.optional(),
    price: SortOrderSchema.optional()
}).strict();
export const ProductBillingOptionMinOrderByAggregateInputObjectSchema = makeSchema();
export const ProductBillingOptionMinOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductBillingOptionMinOrderByAggregateInput.schema.js.map