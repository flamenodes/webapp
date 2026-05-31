import * as z from 'zod';
import { OrderSelectObjectSchema as OrderSelectObjectSchema } from './objects/OrderSelect.schema';
import { OrderIncludeObjectSchema as OrderIncludeObjectSchema } from './objects/OrderInclude.schema';
import { OrderCreateInputObjectSchema as OrderCreateInputObjectSchema } from './objects/OrderCreateInput.schema';
import { OrderUncheckedCreateInputObjectSchema as OrderUncheckedCreateInputObjectSchema } from './objects/OrderUncheckedCreateInput.schema';
export const OrderCreateOneSchema = z.object({ select: OrderSelectObjectSchema.optional(), include: OrderIncludeObjectSchema.optional(), data: z.union([OrderCreateInputObjectSchema, OrderUncheckedCreateInputObjectSchema]) }).strict();
export const OrderCreateOneZodSchema = z.object({ select: OrderSelectObjectSchema.optional(), include: OrderIncludeObjectSchema.optional(), data: z.union([OrderCreateInputObjectSchema, OrderUncheckedCreateInputObjectSchema]) }).strict();
//# sourceMappingURL=createOneOrder.schema.js.map