import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { BillingPeriodSchema } from '../enums/BillingPeriod.schema';
import { NestedEnumBillingPeriodWithAggregatesFilterObjectSchema as NestedEnumBillingPeriodWithAggregatesFilterObjectSchema } from './NestedEnumBillingPeriodWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumBillingPeriodFilterObjectSchema as NestedEnumBillingPeriodFilterObjectSchema } from './NestedEnumBillingPeriodFilter.schema'

const makeSchema = () => z.object({
  equals: BillingPeriodSchema.optional(),
  in: BillingPeriodSchema.array().optional(),
  notIn: BillingPeriodSchema.array().optional(),
  not: z.union([BillingPeriodSchema, z.lazy(() => NestedEnumBillingPeriodWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumBillingPeriodFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumBillingPeriodFilterObjectSchema).optional()
}).strict();
export const EnumBillingPeriodWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumBillingPeriodWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumBillingPeriodWithAggregatesFilter>;
export const EnumBillingPeriodWithAggregatesFilterObjectZodSchema = makeSchema();
