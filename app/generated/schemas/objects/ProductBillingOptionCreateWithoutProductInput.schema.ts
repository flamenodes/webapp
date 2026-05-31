import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { BillingPeriodSchema } from '../enums/BillingPeriod.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  billingPeriod: BillingPeriodSchema,
  price: z.number().int()
}).strict();
export const ProductBillingOptionCreateWithoutProductInputObjectSchema: z.ZodType<Prisma.ProductBillingOptionCreateWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductBillingOptionCreateWithoutProductInput>;
export const ProductBillingOptionCreateWithoutProductInputObjectZodSchema = makeSchema();
