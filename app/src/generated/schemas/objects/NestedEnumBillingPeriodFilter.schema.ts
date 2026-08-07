import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { BillingPeriodSchema } from '../enums/BillingPeriod.schema'

const nestedenumbillingperiodfilterSchema = z.object({
  equals: BillingPeriodSchema.optional(),
  in: BillingPeriodSchema.array().optional(),
  notIn: BillingPeriodSchema.array().optional(),
  not: z.union([BillingPeriodSchema, z.lazy(() => NestedEnumBillingPeriodFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumBillingPeriodFilterObjectSchema: z.ZodType<Prisma.NestedEnumBillingPeriodFilter> = nestedenumbillingperiodfilterSchema as unknown as z.ZodType<Prisma.NestedEnumBillingPeriodFilter>;
export const NestedEnumBillingPeriodFilterObjectZodSchema = nestedenumbillingperiodfilterSchema;
