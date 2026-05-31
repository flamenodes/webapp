import * as z from 'zod';
import { NestedIntNullableFilterObjectSchema as NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedBoolNullableFilterObjectSchema as NestedBoolNullableFilterObjectSchema } from './NestedBoolNullableFilter.schema';
const nestedboolnullablewithaggregatesfilterSchema = z.object({
    equals: z.boolean().optional().nullable(),
    not: z.union([z.boolean(), z.lazy(() => NestedBoolNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
    _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedBoolNullableFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedBoolNullableFilterObjectSchema).optional()
}).strict();
export const NestedBoolNullableWithAggregatesFilterObjectSchema = nestedboolnullablewithaggregatesfilterSchema;
export const NestedBoolNullableWithAggregatesFilterObjectZodSchema = nestedboolnullablewithaggregatesfilterSchema;
//# sourceMappingURL=NestedBoolNullableWithAggregatesFilter.schema.js.map