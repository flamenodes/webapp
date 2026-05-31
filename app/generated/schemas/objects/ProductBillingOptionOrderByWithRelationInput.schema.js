import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProductOrderByWithRelationInputObjectSchema as ProductOrderByWithRelationInputObjectSchema } from './ProductOrderByWithRelationInput.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    productId: SortOrderSchema.optional(),
    billingPeriod: SortOrderSchema.optional(),
    price: SortOrderSchema.optional(),
    product: z.lazy(() => ProductOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ProductBillingOptionOrderByWithRelationInputObjectSchema = makeSchema();
export const ProductBillingOptionOrderByWithRelationInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductBillingOptionOrderByWithRelationInput.schema.js.map