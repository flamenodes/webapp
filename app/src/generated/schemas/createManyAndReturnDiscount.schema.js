import * as z from 'zod';
import { DiscountSelectObjectSchema as DiscountSelectObjectSchema } from './objects/DiscountSelect.schema';
import { DiscountCreateManyInputObjectSchema as DiscountCreateManyInputObjectSchema } from './objects/DiscountCreateManyInput.schema';
export const DiscountCreateManyAndReturnSchema = z.object({ select: DiscountSelectObjectSchema.optional(), data: z.union([DiscountCreateManyInputObjectSchema, z.array(DiscountCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
export const DiscountCreateManyAndReturnZodSchema = z.object({ select: DiscountSelectObjectSchema.optional(), data: z.union([DiscountCreateManyInputObjectSchema, z.array(DiscountCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
//# sourceMappingURL=createManyAndReturnDiscount.schema.js.map