import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { BillingPeriodSchema } from '../enums/BillingPeriod.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  productId: z.string(),
  billingPeriod: BillingPeriodSchema,
  price: z.number().int()
}).strict();
export const ProductBillingOptionCreateManyInputObjectSchema: z.ZodType<Prisma.ProductBillingOptionCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductBillingOptionCreateManyInput>;
export const ProductBillingOptionCreateManyInputObjectZodSchema = makeSchema();
