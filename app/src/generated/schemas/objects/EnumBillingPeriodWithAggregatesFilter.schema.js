import * as z from 'zod';
import { BillingPeriodSchema } from '../enums/BillingPeriod.schema';
import { NestedEnumBillingPeriodWithAggregatesFilterObjectSchema as NestedEnumBillingPeriodWithAggregatesFilterObjectSchema } from './NestedEnumBillingPeriodWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumBillingPeriodFilterObjectSchema as NestedEnumBillingPeriodFilterObjectSchema } from './NestedEnumBillingPeriodFilter.schema';
const makeSchema = () => z.object({
    equals: BillingPeriodSchema.optional(),
    in: BillingPeriodSchema.array().optional(),
    notIn: BillingPeriodSchema.array().optional(),
    not: z.union([BillingPeriodSchema, z.lazy(() => NestedEnumBillingPeriodWithAggregatesFilterObjectSchema)]).optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumBillingPeriodFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumBillingPeriodFilterObjectSchema).optional()
}).strict();
export const EnumBillingPeriodWithAggregatesFilterObjectSchema = makeSchema();
export const EnumBillingPeriodWithAggregatesFilterObjectZodSchema = makeSchema();
//# sourceMappingURL=EnumBillingPeriodWithAggregatesFilter.schema.js.map