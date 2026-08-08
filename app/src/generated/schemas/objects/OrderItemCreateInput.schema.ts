import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { BillingPeriodSchema } from '../enums/BillingPeriod.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { OrderCreateNestedOneWithoutItemsInputObjectSchema as OrderCreateNestedOneWithoutItemsInputObjectSchema } from './OrderCreateNestedOneWithoutItemsInput.schema';
import { ProductCreateNestedOneWithoutOrderItemsInputObjectSchema as ProductCreateNestedOneWithoutOrderItemsInputObjectSchema } from './ProductCreateNestedOneWithoutOrderItemsInput.schema';
import { ServerCreateNestedOneWithoutOrderItemInputObjectSchema as ServerCreateNestedOneWithoutOrderItemInputObjectSchema } from './ServerCreateNestedOneWithoutOrderItemInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  quantity: z.number().int().optional(),
  expiresAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional().nullable(),
  billingPeriod: BillingPeriodSchema,
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional(),
  productName: z.string(),
  specsSnapshot: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  totalPrice: z.number().int(),
  unitPrice: z.number().int(),
  configuration: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  order: z.lazy(() => OrderCreateNestedOneWithoutItemsInputObjectSchema),
  product: z.lazy(() => ProductCreateNestedOneWithoutOrderItemsInputObjectSchema),
  server: z.lazy(() => ServerCreateNestedOneWithoutOrderItemInputObjectSchema).optional()
}).strict();
export const OrderItemCreateInputObjectSchema: z.ZodType<Prisma.OrderItemCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemCreateInput>;
export const OrderItemCreateInputObjectZodSchema = makeSchema();
