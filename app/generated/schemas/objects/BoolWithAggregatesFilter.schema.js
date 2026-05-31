import * as z from 'zod';
import { NestedBoolWithAggregatesFilterObjectSchema as NestedBoolWithAggregatesFilterObjectSchema } from './NestedBoolWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedBoolFilterObjectSchema as NestedBoolFilterObjectSchema } from './NestedBoolFilter.schema';
const makeSchema = () => z.object({
    equals: z.boolean().optional(),
    not: z.union([z.boolean(), z.lazy(() => NestedBoolWithAggregatesFilterObjectSchema)]).optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedBoolFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedBoolFilterObjectSchema).optional()
}).strict();
export const BoolWithAggregatesFilterObjectSchema = makeSchema();
export const BoolWithAggregatesFilterObjectZodSchema = makeSchema();
//# sourceMappingURL=BoolWithAggregatesFilter.schema.js.map