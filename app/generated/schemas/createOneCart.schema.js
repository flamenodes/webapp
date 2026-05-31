import * as z from 'zod';
import { CartSelectObjectSchema as CartSelectObjectSchema } from './objects/CartSelect.schema';
import { CartIncludeObjectSchema as CartIncludeObjectSchema } from './objects/CartInclude.schema';
import { CartCreateInputObjectSchema as CartCreateInputObjectSchema } from './objects/CartCreateInput.schema';
import { CartUncheckedCreateInputObjectSchema as CartUncheckedCreateInputObjectSchema } from './objects/CartUncheckedCreateInput.schema';
export const CartCreateOneSchema = z.object({ select: CartSelectObjectSchema.optional(), include: CartIncludeObjectSchema.optional(), data: z.union([CartCreateInputObjectSchema, CartUncheckedCreateInputObjectSchema]) }).strict();
export const CartCreateOneZodSchema = z.object({ select: CartSelectObjectSchema.optional(), include: CartIncludeObjectSchema.optional(), data: z.union([CartCreateInputObjectSchema, CartUncheckedCreateInputObjectSchema]) }).strict();
//# sourceMappingURL=createOneCart.schema.js.map