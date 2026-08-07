import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { TicketMessageFindManySchema as TicketMessageFindManySchema } from '../findManyTicketMessage.schema';
import { TicketCountOutputTypeArgsObjectSchema as TicketCountOutputTypeArgsObjectSchema } from './TicketCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  assignedTo: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  messages: z.union([z.boolean(), z.lazy(() => TicketMessageFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TicketCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const TicketIncludeObjectSchema: z.ZodType<Prisma.TicketInclude> = makeSchema() as unknown as z.ZodType<Prisma.TicketInclude>;
export const TicketIncludeObjectZodSchema = makeSchema();
