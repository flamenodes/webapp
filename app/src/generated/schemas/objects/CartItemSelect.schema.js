import * as z from 'zod';
import { CartArgsObjectSchema as CartArgsObjectSchema } from './CartArgs.schema';
import { ProductArgsObjectSchema as ProductArgsObjectSchema } from './ProductArgs.schema';
const makeSchema = () => z.object({
    id: z.boolean().optional(),
    cartId: z.boolean().optional(),
    productId: z.boolean().optional(),
    quantity: z.boolean().optional(),
    billingPeriod: z.boolean().optional(),
    cart: z.union([z.boolean(), z.lazy(() => CartArgsObjectSchema)]).optional(),
    product: z.union([z.boolean(), z.lazy(() => ProductArgsObjectSchema)]).optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
}).strict();
export const CartItemSelectObjectSchema = makeSchema();
export const CartItemSelectObjectZodSchema = makeSchema();
//# sourceMappingURL=CartItemSelect.schema.js.map