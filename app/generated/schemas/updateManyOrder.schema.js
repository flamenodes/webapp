import * as z from 'zod';
import { OrderUpdateManyMutationInputObjectSchema as OrderUpdateManyMutationInputObjectSchema } from './objects/OrderUpdateManyMutationInput.schema';
import { OrderWhereInputObjectSchema as OrderWhereInputObjectSchema } from './objects/OrderWhereInput.schema';
export const OrderUpdateManySchema = z.object({ data: OrderUpdateManyMutationInputObjectSchema, where: OrderWhereInputObjectSchema.optional() }).strict();
export const OrderUpdateManyZodSchema = z.object({ data: OrderUpdateManyMutationInputObjectSchema, where: OrderWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=updateManyOrder.schema.js.map