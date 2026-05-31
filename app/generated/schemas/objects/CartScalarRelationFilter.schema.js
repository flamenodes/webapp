import * as z from 'zod';
import { CartWhereInputObjectSchema as CartWhereInputObjectSchema } from './CartWhereInput.schema';
const makeSchema = () => z.object({
    is: z.lazy(() => CartWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => CartWhereInputObjectSchema).optional()
}).strict();
export const CartScalarRelationFilterObjectSchema = makeSchema();
export const CartScalarRelationFilterObjectZodSchema = makeSchema();
//# sourceMappingURL=CartScalarRelationFilter.schema.js.map