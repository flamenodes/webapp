import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumProductCategoryFilterObjectSchema as EnumProductCategoryFilterObjectSchema } from './EnumProductCategoryFilter.schema';
import { ProductCategorySchema } from '../enums/ProductCategory.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableListFilterObjectSchema as StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { JsonFilterObjectSchema as JsonFilterObjectSchema } from './JsonFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DiscountNullableScalarRelationFilterObjectSchema as DiscountNullableScalarRelationFilterObjectSchema } from './DiscountNullableScalarRelationFilter.schema';
import { DiscountWhereInputObjectSchema as DiscountWhereInputObjectSchema } from './DiscountWhereInput.schema';
import { CartItemListRelationFilterObjectSchema as CartItemListRelationFilterObjectSchema } from './CartItemListRelationFilter.schema';
import { OrderItemListRelationFilterObjectSchema as OrderItemListRelationFilterObjectSchema } from './OrderItemListRelationFilter.schema'

const productwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ProductWhereInputObjectSchema), z.lazy(() => ProductWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProductWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProductWhereInputObjectSchema), z.lazy(() => ProductWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  planName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  icon: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  imageUrl: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  category: z.union([z.lazy(() => EnumProductCategoryFilterObjectSchema), ProductCategorySchema]).optional(),
  price: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  features: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  featureCategory: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  inStock: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  discountId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  specs: z.lazy(() => JsonFilterObjectSchema).optional(),
  deployMode: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time")]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time")]).optional(),
  discount: z.union([z.lazy(() => DiscountNullableScalarRelationFilterObjectSchema), z.lazy(() => DiscountWhereInputObjectSchema)]).optional(),
  cartItems: z.lazy(() => CartItemListRelationFilterObjectSchema).optional(),
  orderItems: z.lazy(() => OrderItemListRelationFilterObjectSchema).optional()
}).strict();
export const ProductWhereInputObjectSchema: z.ZodType<Prisma.ProductWhereInput> = productwhereinputSchema as unknown as z.ZodType<Prisma.ProductWhereInput>;
export const ProductWhereInputObjectZodSchema = productwhereinputSchema;
