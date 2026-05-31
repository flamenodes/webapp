import * as z from 'zod';
import { CartCreateManyInputObjectSchema as CartCreateManyInputObjectSchema } from './objects/CartCreateManyInput.schema';
export const CartCreateManySchema = z.object({ data: z.union([CartCreateManyInputObjectSchema, z.array(CartCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
export const CartCreateManyZodSchema = z.object({ data: z.union([CartCreateManyInputObjectSchema, z.array(CartCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
//# sourceMappingURL=createManyCart.schema.js.map