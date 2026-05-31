import * as z from 'zod';
import { CartItemSelectObjectSchema as CartItemSelectObjectSchema } from './objects/CartItemSelect.schema';
import { CartItemIncludeObjectSchema as CartItemIncludeObjectSchema } from './objects/CartItemInclude.schema';
import { CartItemCreateInputObjectSchema as CartItemCreateInputObjectSchema } from './objects/CartItemCreateInput.schema';
import { CartItemUncheckedCreateInputObjectSchema as CartItemUncheckedCreateInputObjectSchema } from './objects/CartItemUncheckedCreateInput.schema';
export const CartItemCreateOneSchema = z.object({ select: CartItemSelectObjectSchema.optional(), include: CartItemIncludeObjectSchema.optional(), data: z.union([CartItemCreateInputObjectSchema, CartItemUncheckedCreateInputObjectSchema]) }).strict();
export const CartItemCreateOneZodSchema = z.object({ select: CartItemSelectObjectSchema.optional(), include: CartItemIncludeObjectSchema.optional(), data: z.union([CartItemCreateInputObjectSchema, CartItemUncheckedCreateInputObjectSchema]) }).strict();
//# sourceMappingURL=createOneCartItem.schema.js.map