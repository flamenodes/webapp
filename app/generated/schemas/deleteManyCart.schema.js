import * as z from 'zod';
import { CartWhereInputObjectSchema as CartWhereInputObjectSchema } from './objects/CartWhereInput.schema';
export const CartDeleteManySchema = z.object({ where: CartWhereInputObjectSchema.optional() }).strict();
export const CartDeleteManyZodSchema = z.object({ where: CartWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=deleteManyCart.schema.js.map