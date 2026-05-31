import * as z from 'zod';
import { OrderItemWhereInputObjectSchema as OrderItemWhereInputObjectSchema } from './OrderItemWhereInput.schema';
const makeSchema = () => z.object({
    is: z.lazy(() => OrderItemWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => OrderItemWhereInputObjectSchema).optional()
}).strict();
export const OrderItemScalarRelationFilterObjectSchema = makeSchema();
export const OrderItemScalarRelationFilterObjectZodSchema = makeSchema();
//# sourceMappingURL=OrderItemScalarRelationFilter.schema.js.map