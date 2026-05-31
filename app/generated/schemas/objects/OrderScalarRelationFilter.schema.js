import * as z from 'zod';
import { OrderWhereInputObjectSchema as OrderWhereInputObjectSchema } from './OrderWhereInput.schema';
const makeSchema = () => z.object({
    is: z.lazy(() => OrderWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => OrderWhereInputObjectSchema).optional()
}).strict();
export const OrderScalarRelationFilterObjectSchema = makeSchema();
export const OrderScalarRelationFilterObjectZodSchema = makeSchema();
//# sourceMappingURL=OrderScalarRelationFilter.schema.js.map