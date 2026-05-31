import * as z from 'zod';
import { BillingPeriodSchema } from '../enums/BillingPeriod.schema';
const makeSchema = () => z.object({
    equals: BillingPeriodSchema.array().optional().nullable(),
    has: BillingPeriodSchema.optional().nullable(),
    hasEvery: BillingPeriodSchema.array().optional(),
    hasSome: BillingPeriodSchema.array().optional(),
    isEmpty: z.boolean().optional()
}).strict();
export const EnumBillingPeriodNullableListFilterObjectSchema = makeSchema();
export const EnumBillingPeriodNullableListFilterObjectZodSchema = makeSchema();
//# sourceMappingURL=EnumBillingPeriodNullableListFilter.schema.js.map