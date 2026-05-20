import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { OrderItemArgsObjectSchema as OrderItemArgsObjectSchema } from './OrderItemArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  orderItemId: z.boolean().optional(),
  orderItem: z.union([z.boolean(), z.lazy(() => OrderItemArgsObjectSchema)]).optional(),
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
  updatedAt: z.boolean().optional()
}).strict();
export const ServerSelectObjectSchema: z.ZodType<Prisma.ServerSelect> = makeSchema() as unknown as z.ZodType<Prisma.ServerSelect>;
export const ServerSelectObjectZodSchema = makeSchema();
