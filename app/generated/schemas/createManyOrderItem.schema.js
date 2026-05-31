import * as z from 'zod';
import { OrderItemCreateManyInputObjectSchema as OrderItemCreateManyInputObjectSchema } from './objects/OrderItemCreateManyInput.schema';
export const OrderItemCreateManySchema = z.object({ data: z.union([OrderItemCreateManyInputObjectSchema, z.array(OrderItemCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
export const OrderItemCreateManyZodSchema = z.object({ data: z.union([OrderItemCreateManyInputObjectSchema, z.array(OrderItemCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
//# sourceMappingURL=createManyOrderItem.schema.js.map