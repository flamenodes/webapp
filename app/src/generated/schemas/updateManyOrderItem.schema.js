import * as z from 'zod';
import { OrderItemUpdateManyMutationInputObjectSchema as OrderItemUpdateManyMutationInputObjectSchema } from './objects/OrderItemUpdateManyMutationInput.schema';
import { OrderItemWhereInputObjectSchema as OrderItemWhereInputObjectSchema } from './objects/OrderItemWhereInput.schema';
export const OrderItemUpdateManySchema = z.object({ data: OrderItemUpdateManyMutationInputObjectSchema, where: OrderItemWhereInputObjectSchema.optional() }).strict();
export const OrderItemUpdateManyZodSchema = z.object({ data: OrderItemUpdateManyMutationInputObjectSchema, where: OrderItemWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=updateManyOrderItem.schema.js.map