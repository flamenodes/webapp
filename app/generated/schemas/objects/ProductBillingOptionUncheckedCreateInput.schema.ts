import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { BillingPeriodSchema } from '../enums/BillingPeriod.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  productId: z.string(),
  billingPeriod: BillingPeriodSchema,
  price: z.number().int(),
  customDays: z.number().int().optional().nullable()
}).strict();
export const ProductBillingOptionUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ProductBillingOptionUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductBillingOptionUncheckedCreateInput>;
export const ProductBillingOptionUncheckedCreateInputObjectZodSchema = makeSchema();
