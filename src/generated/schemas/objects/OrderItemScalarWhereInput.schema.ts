import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { EnumBillingPeriodFilterObjectSchema as EnumBillingPeriodFilterObjectSchema } from './EnumBillingPeriodFilter.schema';
import { BillingPeriodSchema } from '../enums/BillingPeriod.schema';
import { JsonNullableFilterObjectSchema as JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const orderitemscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => OrderItemScalarWhereInputObjectSchema), z.lazy(() => OrderItemScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => OrderItemScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => OrderItemScalarWhereInputObjectSchema), z.lazy(() => OrderItemScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  orderId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  productId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  productName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  quantity: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  billingPeriod: z.union([z.lazy(() => EnumBillingPeriodFilterObjectSchema), BillingPeriodSchema]).optional(),
  unitPrice: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  totalPrice: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  specsSnapshot: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  expiresAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time")]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time")]).optional()
}).strict();
export const OrderItemScalarWhereInputObjectSchema: z.ZodType<Prisma.OrderItemScalarWhereInput> = orderitemscalarwhereinputSchema as unknown as z.ZodType<Prisma.OrderItemScalarWhereInput>;
export const OrderItemScalarWhereInputObjectZodSchema = orderitemscalarwhereinputSchema;
