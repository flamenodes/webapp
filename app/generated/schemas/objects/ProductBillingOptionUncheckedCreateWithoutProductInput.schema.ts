import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { BillingPeriodSchema } from '../enums/BillingPeriod.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  billingPeriod: BillingPeriodSchema,
  price: z.number().int(),
  customDays: z.number().int().optional().nullable()
}).strict();
export const ProductBillingOptionUncheckedCreateWithoutProductInputObjectSchema: z.ZodType<Prisma.ProductBillingOptionUncheckedCreateWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductBillingOptionUncheckedCreateWithoutProductInput>;
export const ProductBillingOptionUncheckedCreateWithoutProductInputObjectZodSchema = makeSchema();
