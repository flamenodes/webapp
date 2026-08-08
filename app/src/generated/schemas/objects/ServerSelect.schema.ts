import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { OrderItemArgsObjectSchema as OrderItemArgsObjectSchema } from './OrderItemArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { OrderFindManySchema as OrderFindManySchema } from '../findManyOrder.schema';
import { ServerCountOutputTypeArgsObjectSchema as ServerCountOutputTypeArgsObjectSchema } from './ServerCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  orderItemId: z.boolean().optional(),
  name: z.boolean().optional(),
  type: z.boolean().optional(),
  status: z.boolean().optional(),
  ip: z.boolean().optional(),
  port: z.boolean().optional(),
  expiresAt: z.boolean().optional(),
  resources: z.boolean().optional(),
  pterodactylData: z.boolean().optional(),
  suspended: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  pterodactylServerId: z.boolean().optional(),
  orderItem: z.union([z.boolean(), z.lazy(() => OrderItemArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  renewals: z.union([z.boolean(), z.lazy(() => OrderFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ServerCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ServerSelectObjectSchema: z.ZodType<Prisma.ServerSelect> = makeSchema() as unknown as z.ZodType<Prisma.ServerSelect>;
export const ServerSelectObjectZodSchema = makeSchema();
