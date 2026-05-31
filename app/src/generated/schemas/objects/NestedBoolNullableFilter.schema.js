import * as z from 'zod';
const nestedboolnullablefilterSchema = z.object({
    equals: z.boolean().optional().nullable(),
    not: z.union([z.boolean(), z.lazy(() => NestedBoolNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const NestedBoolNullableFilterObjectSchema = nestedboolnullablefilterSchema;
export const NestedBoolNullableFilterObjectZodSchema = nestedboolnullablefilterSchema;
//# sourceMappingURL=NestedBoolNullableFilter.schema.js.map