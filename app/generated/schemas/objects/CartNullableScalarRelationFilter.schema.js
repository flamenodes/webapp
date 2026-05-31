import * as z from 'zod';
import { CartWhereInputObjectSchema as CartWhereInputObjectSchema } from './CartWhereInput.schema';
const makeSchema = () => z.object({
    is: z.lazy(() => CartWhereInputObjectSchema).optional().nullable(),
    isNot: z.lazy(() => CartWhereInputObjectSchema).optional().nullable()
}).strict();
export const CartNullableScalarRelationFilterObjectSchema = makeSchema();
export const CartNullableScalarRelationFilterObjectZodSchema = makeSchema();
//# sourceMappingURL=CartNullableScalarRelationFilter.schema.js.map