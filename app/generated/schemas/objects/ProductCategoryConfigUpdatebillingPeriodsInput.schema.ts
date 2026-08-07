import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { BillingPeriodSchema } from '../enums/BillingPeriod.schema'

const makeSchema = () => z.object({
  set: BillingPeriodSchema.array().optional(),
  push: z.union([BillingPeriodSchema, BillingPeriodSchema.array()]).optional()
}).strict();
export const ProductCategoryConfigUpdatebillingPeriodsInputObjectSchema: z.ZodType<Prisma.ProductCategoryConfigUpdatebillingPeriodsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCategoryConfigUpdatebillingPeriodsInput>;
export const ProductCategoryConfigUpdatebillingPeriodsInputObjectZodSchema = makeSchema();
