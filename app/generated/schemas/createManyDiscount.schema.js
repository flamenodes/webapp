import * as z from 'zod';
import { DiscountCreateManyInputObjectSchema as DiscountCreateManyInputObjectSchema } from './objects/DiscountCreateManyInput.schema';
export const DiscountCreateManySchema = z.object({ data: z.union([DiscountCreateManyInputObjectSchema, z.array(DiscountCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
export const DiscountCreateManyZodSchema = z.object({ data: z.union([DiscountCreateManyInputObjectSchema, z.array(DiscountCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
//# sourceMappingURL=createManyDiscount.schema.js.map