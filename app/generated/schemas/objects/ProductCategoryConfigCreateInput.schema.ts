import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { ProductCategorySchema } from '../enums/ProductCategory.schema';
import { ProductCategoryConfigCreatebillingPeriodsInputObjectSchema as ProductCategoryConfigCreatebillingPeriodsInputObjectSchema } from './ProductCategoryConfigCreatebillingPeriodsInput.schema';
import { BillingPeriodSchema } from '../enums/BillingPeriod.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  category: ProductCategorySchema,
  billingPeriods: z.union([z.lazy(() => ProductCategoryConfigCreatebillingPeriodsInputObjectSchema), BillingPeriodSchema.array()]).optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const ProductCategoryConfigCreateInputObjectSchema: z.ZodType<Prisma.ProductCategoryConfigCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCategoryConfigCreateInput>;
export const ProductCategoryConfigCreateInputObjectZodSchema = makeSchema();
