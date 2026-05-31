import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { BillingPeriodSchema } from '../enums/BillingPeriod.schema'

const makeSchema = () => z.object({
  set: BillingPeriodSchema.array()
}).strict();
export const ProductCategoryConfigCreatebillingPeriodsInputObjectSchema: z.ZodType<Prisma.ProductCategoryConfigCreatebillingPeriodsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCategoryConfigCreatebillingPeriodsInput>;
export const ProductCategoryConfigCreatebillingPeriodsInputObjectZodSchema = makeSchema();
