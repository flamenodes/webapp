import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { JsonFilterObjectSchema as JsonFilterObjectSchema } from './JsonFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { EnumProductCategoryFilterObjectSchema as EnumProductCategoryFilterObjectSchema } from './EnumProductCategoryFilter.schema';
import { ProductCategorySchema } from '../enums/ProductCategory.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { CartItemListRelationFilterObjectSchema as CartItemListRelationFilterObjectSchema } from './CartItemListRelationFilter.schema';
import { OrderItemListRelationFilterObjectSchema as OrderItemListRelationFilterObjectSchema } from './OrderItemListRelationFilter.schema';
import { DiscountNullableScalarRelationFilterObjectSchema as DiscountNullableScalarRelationFilterObjectSchema } from './DiscountNullableScalarRelationFilter.schema';
import { DiscountWhereInputObjectSchema as DiscountWhereInputObjectSchema } from './DiscountWhereInput.schema';
import { ProductBillingOptionListRelationFilterObjectSchema as ProductBillingOptionListRelationFilterObjectSchema } from './ProductBillingOptionListRelationFilter.schema';
import { ProductFeatureListRelationFilterObjectSchema as ProductFeatureListRelationFilterObjectSchema } from './ProductFeatureListRelationFilter.schema'

const productwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ProductWhereInputObjectSchema), z.lazy(() => ProductWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProductWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProductWhereInputObjectSchema), z.lazy(() => ProductWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  deployMode: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  specs: z.lazy(() => JsonFilterObjectSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time")]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time")]).optional(),
  category: z.union([z.lazy(() => EnumProductCategoryFilterObjectSchema), ProductCategorySchema]).optional(),
  icon: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  inStock: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  planName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  price: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  discountId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  featureCategory: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  badge: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  sortOrder: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  cartItems: z.lazy(() => CartItemListRelationFilterObjectSchema).optional(),
  orderItems: z.lazy(() => OrderItemListRelationFilterObjectSchema).optional(),
  discount: z.union([z.lazy(() => DiscountNullableScalarRelationFilterObjectSchema), z.lazy(() => DiscountWhereInputObjectSchema)]).optional(),
  billingOptions: z.lazy(() => ProductBillingOptionListRelationFilterObjectSchema).optional(),
  features: z.lazy(() => ProductFeatureListRelationFilterObjectSchema).optional()
}).strict();
export const ProductWhereInputObjectSchema: z.ZodType<Prisma.ProductWhereInput> = productwhereinputSchema as unknown as z.ZodType<Prisma.ProductWhereInput>;
export const ProductWhereInputObjectZodSchema = productwhereinputSchema;
