import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { OrderItemArgsObjectSchema as OrderItemArgsObjectSchema } from './OrderItemArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { OrderFindManySchema as OrderFindManySchema } from '../findManyOrder.schema';
import { ServerCountOutputTypeArgsObjectSchema as ServerCountOutputTypeArgsObjectSchema } from './ServerCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  orderItem: z.union([z.boolean(), z.lazy(() => OrderItemArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  renewals: z.union([z.boolean(), z.lazy(() => OrderFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ServerCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ServerIncludeObjectSchema: z.ZodType<Prisma.ServerInclude> = makeSchema() as unknown as z.ZodType<Prisma.ServerInclude>;
export const ServerIncludeObjectZodSchema = makeSchema();
