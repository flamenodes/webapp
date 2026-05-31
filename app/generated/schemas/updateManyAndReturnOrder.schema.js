import * as z from 'zod';
import { OrderSelectObjectSchema as OrderSelectObjectSchema } from './objects/OrderSelect.schema';
import { OrderUpdateManyMutationInputObjectSchema as OrderUpdateManyMutationInputObjectSchema } from './objects/OrderUpdateManyMutationInput.schema';
import { OrderWhereInputObjectSchema as OrderWhereInputObjectSchema } from './objects/OrderWhereInput.schema';
export const OrderUpdateManyAndReturnSchema = z.object({ select: OrderSelectObjectSchema.optional(), data: OrderUpdateManyMutationInputObjectSchema, where: OrderWhereInputObjectSchema.optional() }).strict();
export const OrderUpdateManyAndReturnZodSchema = z.object({ select: OrderSelectObjectSchema.optional(), data: OrderUpdateManyMutationInputObjectSchema, where: OrderWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=updateManyAndReturnOrder.schema.js.map