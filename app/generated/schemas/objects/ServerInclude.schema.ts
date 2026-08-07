import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { OrderItemArgsObjectSchema as OrderItemArgsObjectSchema } from './OrderItemArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  orderItem: z.union([z.boolean(), z.lazy(() => OrderItemArgsObjectSchema)]).optional()
}).strict();
export const ServerIncludeObjectSchema: z.ZodType<Prisma.ServerInclude> = makeSchema() as unknown as z.ZodType<Prisma.ServerInclude>;
export const ServerIncludeObjectZodSchema = makeSchema();
