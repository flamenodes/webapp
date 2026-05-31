import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProductOrderByWithRelationInputObjectSchema as ProductOrderByWithRelationInputObjectSchema } from './ProductOrderByWithRelationInput.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    productId: SortOrderSchema.optional(),
    label: SortOrderSchema.optional(),
    sortOrder: SortOrderSchema.optional(),
    product: z.lazy(() => ProductOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ProductFeatureOrderByWithRelationInputObjectSchema = makeSchema();
export const ProductFeatureOrderByWithRelationInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductFeatureOrderByWithRelationInput.schema.js.map