import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CartOrderByWithRelationInputObjectSchema as CartOrderByWithRelationInputObjectSchema } from './CartOrderByWithRelationInput.schema';
import { ProductOrderByWithRelationInputObjectSchema as ProductOrderByWithRelationInputObjectSchema } from './ProductOrderByWithRelationInput.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    cartId: SortOrderSchema.optional(),
    productId: SortOrderSchema.optional(),
    quantity: SortOrderSchema.optional(),
    billingPeriod: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional(),
    updatedAt: SortOrderSchema.optional(),
    cart: z.lazy(() => CartOrderByWithRelationInputObjectSchema).optional(),
    product: z.lazy(() => ProductOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const CartItemOrderByWithRelationInputObjectSchema = makeSchema();
export const CartItemOrderByWithRelationInputObjectZodSchema = makeSchema();
//# sourceMappingURL=CartItemOrderByWithRelationInput.schema.js.map