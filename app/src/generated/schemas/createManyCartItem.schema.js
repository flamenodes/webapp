import * as z from 'zod';
import { CartItemCreateManyInputObjectSchema as CartItemCreateManyInputObjectSchema } from './objects/CartItemCreateManyInput.schema';
export const CartItemCreateManySchema = z.object({ data: z.union([CartItemCreateManyInputObjectSchema, z.array(CartItemCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
export const CartItemCreateManyZodSchema = z.object({ data: z.union([CartItemCreateManyInputObjectSchema, z.array(CartItemCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
//# sourceMappingURL=createManyCartItem.schema.js.map