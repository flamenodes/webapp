import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { OrderArgsObjectSchema as OrderArgsObjectSchema } from './OrderArgs.schema';
import { ProductArgsObjectSchema as ProductArgsObjectSchema } from './ProductArgs.schema';
import { ServerArgsObjectSchema as ServerArgsObjectSchema } from './ServerArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  orderId: z.boolean().optional(),
  productId: z.boolean().optional(),
  productName: z.boolean().optional(),
  quantity: z.boolean().optional(),
  billingPeriod: z.boolean().optional(),
  unitPrice: z.boolean().optional(),
  totalPrice: z.boolean().optional(),
  specsSnapshot: z.boolean().optional(),
  expiresAt: z.boolean().optional(),
  order: z.union([z.boolean(), z.lazy(() => OrderArgsObjectSchema)]).optional(),
  product: z.union([z.boolean(), z.lazy(() => ProductArgsObjectSchema)]).optional(),
  server: z.union([z.boolean(), z.lazy(() => ServerArgsObjectSchema)]).optional(),
  createdAt: z.boolean().optional()
}).strict();
export const OrderItemSelectObjectSchema: z.ZodType<Prisma.OrderItemSelect> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemSelect>;
export const OrderItemSelectObjectZodSchema = makeSchema();
