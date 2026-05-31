import * as z from 'zod';
import { OrderItemWhereInputObjectSchema as OrderItemWhereInputObjectSchema } from './objects/OrderItemWhereInput.schema';
export const OrderItemDeleteManySchema = z.object({ where: OrderItemWhereInputObjectSchema.optional() }).strict();
export const OrderItemDeleteManyZodSchema = z.object({ where: OrderItemWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=deleteManyOrderItem.schema.js.map