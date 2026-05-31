import * as z from 'zod';
import { BillingPeriodSchema } from '../enums/BillingPeriod.schema';
const nestedenumbillingperiodfilterSchema = z.object({
    equals: BillingPeriodSchema.optional(),
    in: BillingPeriodSchema.array().optional(),
    notIn: BillingPeriodSchema.array().optional(),
    not: z.union([BillingPeriodSchema, z.lazy(() => NestedEnumBillingPeriodFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumBillingPeriodFilterObjectSchema = nestedenumbillingperiodfilterSchema;
export const NestedEnumBillingPeriodFilterObjectZodSchema = nestedenumbillingperiodfilterSchema;
//# sourceMappingURL=NestedEnumBillingPeriodFilter.schema.js.map