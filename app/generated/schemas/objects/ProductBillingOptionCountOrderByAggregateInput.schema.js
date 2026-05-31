import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    productId: SortOrderSchema.optional(),
    billingPeriod: SortOrderSchema.optional(),
    price: SortOrderSchema.optional()
}).strict();
export const ProductBillingOptionCountOrderByAggregateInputObjectSchema = makeSchema();
export const ProductBillingOptionCountOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductBillingOptionCountOrderByAggregateInput.schema.js.map