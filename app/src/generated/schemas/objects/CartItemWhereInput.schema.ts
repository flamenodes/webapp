import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { EnumBillingPeriodFilterObjectSchema as EnumBillingPeriodFilterObjectSchema } from './EnumBillingPeriodFilter.schema';
import { BillingPeriodSchema } from '../enums/BillingPeriod.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { JsonNullableFilterObjectSchema as JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { CartScalarRelationFilterObjectSchema as CartScalarRelationFilterObjectSchema } from './CartScalarRelationFilter.schema';
import { CartWhereInputObjectSchema as CartWhereInputObjectSchema } from './CartWhereInput.schema';
import { ProductScalarRelationFilterObjectSchema as ProductScalarRelationFilterObjectSchema } from './ProductScalarRelationFilter.schema';
import { ProductWhereInputObjectSchema as ProductWhereInputObjectSchema } from './ProductWhereInput.schema'

const cartitemwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CartItemWhereInputObjectSchema), z.lazy(() => CartItemWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CartItemWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CartItemWhereInputObjectSchema), z.lazy(() => CartItemWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  cartId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  productId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  quantity: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  billingPeriod: z.union([z.lazy(() => EnumBillingPeriodFilterObjectSchema), BillingPeriodSchema]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time")]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time")]).optional(),
  configuration: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  cart: z.union([z.lazy(() => CartScalarRelationFilterObjectSchema), z.lazy(() => CartWhereInputObjectSchema)]).optional(),
  product: z.union([z.lazy(() => ProductScalarRelationFilterObjectSchema), z.lazy(() => ProductWhereInputObjectSchema)]).optional()
}).strict();
export const CartItemWhereInputObjectSchema: z.ZodType<Prisma.CartItemWhereInput> = cartitemwhereinputSchema as unknown as z.ZodType<Prisma.CartItemWhereInput>;
export const CartItemWhereInputObjectZodSchema = cartitemwhereinputSchema;
