import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { ProductCategorySchema } from '../enums/ProductCategory.schema';
import { ProductCategoryConfigCreatebillingPeriodsInputObjectSchema as ProductCategoryConfigCreatebillingPeriodsInputObjectSchema } from './ProductCategoryConfigCreatebillingPeriodsInput.schema';
import { BillingPeriodSchema } from '../enums/BillingPeriod.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  category: ProductCategorySchema,
  billingPeriods: z.union([z.lazy(() => ProductCategoryConfigCreatebillingPeriodsInputObjectSchema), BillingPeriodSchema.array()]).optional(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional()
}).strict();
export const ProductCategoryConfigUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ProductCategoryConfigUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCategoryConfigUncheckedCreateInput>;
export const ProductCategoryConfigUncheckedCreateInputObjectZodSchema = makeSchema();
