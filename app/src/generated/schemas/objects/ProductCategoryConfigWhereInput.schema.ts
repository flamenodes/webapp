import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumProductCategoryFilterObjectSchema as EnumProductCategoryFilterObjectSchema } from './EnumProductCategoryFilter.schema';
import { ProductCategorySchema } from '../enums/ProductCategory.schema';
import { EnumBillingPeriodNullableListFilterObjectSchema as EnumBillingPeriodNullableListFilterObjectSchema } from './EnumBillingPeriodNullableListFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const productcategoryconfigwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ProductCategoryConfigWhereInputObjectSchema), z.lazy(() => ProductCategoryConfigWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProductCategoryConfigWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProductCategoryConfigWhereInputObjectSchema), z.lazy(() => ProductCategoryConfigWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  category: z.union([z.lazy(() => EnumProductCategoryFilterObjectSchema), ProductCategorySchema]).optional(),
  billingPeriods: z.lazy(() => EnumBillingPeriodNullableListFilterObjectSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time")]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time")]).optional()
}).strict();
export const ProductCategoryConfigWhereInputObjectSchema: z.ZodType<Prisma.ProductCategoryConfigWhereInput> = productcategoryconfigwhereinputSchema as unknown as z.ZodType<Prisma.ProductCategoryConfigWhereInput>;
export const ProductCategoryConfigWhereInputObjectZodSchema = productcategoryconfigwhereinputSchema;
