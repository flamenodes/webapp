import * as z from 'zod';
import { NestedBoolNullableFilterObjectSchema as NestedBoolNullableFilterObjectSchema } from './NestedBoolNullableFilter.schema';
const makeSchema = () => z.object({
    equals: z.boolean().optional().nullable(),
    not: z.union([z.boolean(), z.lazy(() => NestedBoolNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const BoolNullableFilterObjectSchema = makeSchema();
export const BoolNullableFilterObjectZodSchema = makeSchema();
//# sourceMappingURL=BoolNullableFilter.schema.js.map