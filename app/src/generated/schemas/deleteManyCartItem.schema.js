import * as z from 'zod';
import { CartItemWhereInputObjectSchema as CartItemWhereInputObjectSchema } from './objects/CartItemWhereInput.schema';
export const CartItemDeleteManySchema = z.object({ where: CartItemWhereInputObjectSchema.optional() }).strict();
export const CartItemDeleteManyZodSchema = z.object({ where: CartItemWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=deleteManyCartItem.schema.js.map