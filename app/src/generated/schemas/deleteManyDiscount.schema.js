import * as z from 'zod';
import { DiscountWhereInputObjectSchema as DiscountWhereInputObjectSchema } from './objects/DiscountWhereInput.schema';
export const DiscountDeleteManySchema = z.object({ where: DiscountWhereInputObjectSchema.optional() }).strict();
export const DiscountDeleteManyZodSchema = z.object({ where: DiscountWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=deleteManyDiscount.schema.js.map