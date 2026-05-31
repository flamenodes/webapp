import * as z from 'zod';
import { DiscountSelectObjectSchema as DiscountSelectObjectSchema } from './objects/DiscountSelect.schema';
import { DiscountUpdateManyMutationInputObjectSchema as DiscountUpdateManyMutationInputObjectSchema } from './objects/DiscountUpdateManyMutationInput.schema';
import { DiscountWhereInputObjectSchema as DiscountWhereInputObjectSchema } from './objects/DiscountWhereInput.schema';
export const DiscountUpdateManyAndReturnSchema = z.object({ select: DiscountSelectObjectSchema.optional(), data: DiscountUpdateManyMutationInputObjectSchema, where: DiscountWhereInputObjectSchema.optional() }).strict();
export const DiscountUpdateManyAndReturnZodSchema = z.object({ select: DiscountSelectObjectSchema.optional(), data: DiscountUpdateManyMutationInputObjectSchema, where: DiscountWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=updateManyAndReturnDiscount.schema.js.map