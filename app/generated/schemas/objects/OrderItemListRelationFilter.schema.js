import * as z from 'zod';
import { OrderItemWhereInputObjectSchema as OrderItemWhereInputObjectSchema } from './OrderItemWhereInput.schema';
const makeSchema = () => z.object({
    every: z.lazy(() => OrderItemWhereInputObjectSchema).optional(),
    some: z.lazy(() => OrderItemWhereInputObjectSchema).optional(),
    none: z.lazy(() => OrderItemWhereInputObjectSchema).optional()
}).strict();
export const OrderItemListRelationFilterObjectSchema = makeSchema();
export const OrderItemListRelationFilterObjectZodSchema = makeSchema();
//# sourceMappingURL=OrderItemListRelationFilter.schema.js.map