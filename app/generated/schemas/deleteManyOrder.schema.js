import * as z from 'zod';
import { OrderWhereInputObjectSchema as OrderWhereInputObjectSchema } from './objects/OrderWhereInput.schema';
export const OrderDeleteManySchema = z.object({ where: OrderWhereInputObjectSchema.optional() }).strict();
export const OrderDeleteManyZodSchema = z.object({ where: OrderWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=deleteManyOrder.schema.js.map