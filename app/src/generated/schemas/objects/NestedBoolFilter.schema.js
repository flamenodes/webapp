import * as z from 'zod';
const nestedboolfilterSchema = z.object({
    equals: z.boolean().optional(),
    not: z.union([z.boolean(), z.lazy(() => NestedBoolFilterObjectSchema)]).optional()
}).strict();
export const NestedBoolFilterObjectSchema = nestedboolfilterSchema;
export const NestedBoolFilterObjectZodSchema = nestedboolfilterSchema;
//# sourceMappingURL=NestedBoolFilter.schema.js.map