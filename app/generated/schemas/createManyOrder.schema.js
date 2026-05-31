import * as z from 'zod';
import { OrderCreateManyInputObjectSchema as OrderCreateManyInputObjectSchema } from './objects/OrderCreateManyInput.schema';
export const OrderCreateManySchema = z.object({ data: z.union([OrderCreateManyInputObjectSchema, z.array(OrderCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
export const OrderCreateManyZodSchema = z.object({ data: z.union([OrderCreateManyInputObjectSchema, z.array(OrderCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
//# sourceMappingURL=createManyOrder.schema.js.map