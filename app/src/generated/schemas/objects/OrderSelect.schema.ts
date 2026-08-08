import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { InvoiceArgsObjectSchema as InvoiceArgsObjectSchema } from './InvoiceArgs.schema';
import { ServerArgsObjectSchema as ServerArgsObjectSchema } from './ServerArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { OrderItemFindManySchema as OrderItemFindManySchema } from '../findManyOrderItem.schema';
import { OrderCountOutputTypeArgsObjectSchema as OrderCountOutputTypeArgsObjectSchema } from './OrderCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  totalAmount: z.boolean().optional(),
  status: z.boolean().optional(),
  deliveryMessage: z.boolean().optional(),
  deliveryData: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  couponCode: z.boolean().optional(),
  discountAmount: z.boolean().optional(),
  subtotalAmount: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  invoice: z.union([z.boolean(), z.lazy(() => InvoiceArgsObjectSchema)]).optional(),
  renewalForServerId: z.boolean().optional(),
  renewalForServer: z.union([z.boolean(), z.lazy(() => ServerArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  items: z.union([z.boolean(), z.lazy(() => OrderItemFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => OrderCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const OrderSelectObjectSchema: z.ZodType<Prisma.OrderSelect> = makeSchema() as unknown as z.ZodType<Prisma.OrderSelect>;
export const OrderSelectObjectZodSchema = makeSchema();
