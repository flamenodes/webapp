import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { BillingPeriodSchema } from '../enums/BillingPeriod.schema'

const makeSchema = () => z.object({
  equals: BillingPeriodSchema.array().optional().nullable(),
  has: BillingPeriodSchema.optional().nullable(),
  hasEvery: BillingPeriodSchema.array().optional(),
  hasSome: BillingPeriodSchema.array().optional(),
  isEmpty: z.boolean().optional()
}).strict();
export const EnumBillingPeriodNullableListFilterObjectSchema: z.ZodType<Prisma.EnumBillingPeriodNullableListFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumBillingPeriodNullableListFilter>;
export const EnumBillingPeriodNullableListFilterObjectZodSchema = makeSchema();
