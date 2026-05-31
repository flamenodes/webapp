import * as z from 'zod';
import { NestedBoolFilterObjectSchema as NestedBoolFilterObjectSchema } from './NestedBoolFilter.schema';
const makeSchema = () => z.object({
    equals: z.boolean().optional(),
    not: z.union([z.boolean(), z.lazy(() => NestedBoolFilterObjectSchema)]).optional()
}).strict();
export const BoolFilterObjectSchema = makeSchema();
export const BoolFilterObjectZodSchema = makeSchema();
//# sourceMappingURL=BoolFilter.schema.js.map