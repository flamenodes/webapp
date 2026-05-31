import * as z from 'zod';
import { DiscountWhereInputObjectSchema as DiscountWhereInputObjectSchema } from './DiscountWhereInput.schema';
const makeSchema = () => z.object({
    is: z.lazy(() => DiscountWhereInputObjectSchema).optional().nullable(),
    isNot: z.lazy(() => DiscountWhereInputObjectSchema).optional().nullable()
}).strict();
export const DiscountNullableScalarRelationFilterObjectSchema = makeSchema();
export const DiscountNullableScalarRelationFilterObjectZodSchema = makeSchema();
//# sourceMappingURL=DiscountNullableScalarRelationFilter.schema.js.map