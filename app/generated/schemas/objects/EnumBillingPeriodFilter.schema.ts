import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { BillingPeriodSchema } from '../enums/BillingPeriod.schema';
import { NestedEnumBillingPeriodFilterObjectSchema as NestedEnumBillingPeriodFilterObjectSchema } from './NestedEnumBillingPeriodFilter.schema'

const makeSchema = () => z.object({
  equals: BillingPeriodSchema.optional(),
  in: BillingPeriodSchema.array().optional(),
  notIn: BillingPeriodSchema.array().optional(),
  not: z.union([BillingPeriodSchema, z.lazy(() => NestedEnumBillingPeriodFilterObjectSchema)]).optional()
}).strict();
export const EnumBillingPeriodFilterObjectSchema: z.ZodType<Prisma.EnumBillingPeriodFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumBillingPeriodFilter>;
export const EnumBillingPeriodFilterObjectZodSchema = makeSchema();
