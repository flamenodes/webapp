import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumProductCategoryWithAggregatesFilterObjectSchema as EnumProductCategoryWithAggregatesFilterObjectSchema } from './EnumProductCategoryWithAggregatesFilter.schema';
import { ProductCategorySchema } from '../enums/ProductCategory.schema';
import { EnumBillingPeriodNullableListFilterObjectSchema as EnumBillingPeriodNullableListFilterObjectSchema } from './EnumBillingPeriodNullableListFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const productcategoryconfigscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ProductCategoryConfigScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ProductCategoryConfigScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProductCategoryConfigScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProductCategoryConfigScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ProductCategoryConfigScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  category: z.union([z.lazy(() => EnumProductCategoryWithAggregatesFilterObjectSchema), ProductCategorySchema]).optional(),
  billingPeriods: z.lazy(() => EnumBillingPeriodNullableListFilterObjectSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time")]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time")]).optional()
}).strict();
export const ProductCategoryConfigScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ProductCategoryConfigScalarWhereWithAggregatesInput> = productcategoryconfigscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ProductCategoryConfigScalarWhereWithAggregatesInput>;
export const ProductCategoryConfigScalarWhereWithAggregatesInputObjectZodSchema = productcategoryconfigscalarwherewithaggregatesinputSchema;
