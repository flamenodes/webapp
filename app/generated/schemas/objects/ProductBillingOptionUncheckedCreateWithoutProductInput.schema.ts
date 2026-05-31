import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { BillingPeriodSchema } from '../enums/BillingPeriod.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  billingPeriod: BillingPeriodSchema,
  price: z.number().int()
}).strict();
export const ProductBillingOptionUncheckedCreateWithoutProductInputObjectSchema: z.ZodType<Prisma.ProductBillingOptionUncheckedCreateWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductBillingOptionUncheckedCreateWithoutProductInput>;
export const ProductBillingOptionUncheckedCreateWithoutProductInputObjectZodSchema = makeSchema();
