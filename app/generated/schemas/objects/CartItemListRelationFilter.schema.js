import * as z from 'zod';
import { CartItemWhereInputObjectSchema as CartItemWhereInputObjectSchema } from './CartItemWhereInput.schema';
const makeSchema = () => z.object({
    every: z.lazy(() => CartItemWhereInputObjectSchema).optional(),
    some: z.lazy(() => CartItemWhereInputObjectSchema).optional(),
    none: z.lazy(() => CartItemWhereInputObjectSchema).optional()
}).strict();
export const CartItemListRelationFilterObjectSchema = makeSchema();
export const CartItemListRelationFilterObjectZodSchema = makeSchema();
//# sourceMappingURL=CartItemListRelationFilter.schema.js.map