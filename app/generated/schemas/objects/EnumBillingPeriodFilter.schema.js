import * as z from 'zod';
import { BillingPeriodSchema } from '../enums/BillingPeriod.schema';
import { NestedEnumBillingPeriodFilterObjectSchema as NestedEnumBillingPeriodFilterObjectSchema } from './NestedEnumBillingPeriodFilter.schema';
const makeSchema = () => z.object({
    equals: BillingPeriodSchema.optional(),
    in: BillingPeriodSchema.array().optional(),
    notIn: BillingPeriodSchema.array().optional(),
    not: z.union([BillingPeriodSchema, z.lazy(() => NestedEnumBillingPeriodFilterObjectSchema)]).optional()
}).strict();
export const EnumBillingPeriodFilterObjectSchema = makeSchema();
export const EnumBillingPeriodFilterObjectZodSchema = makeSchema();
//# sourceMappingURL=EnumBillingPeriodFilter.schema.js.map