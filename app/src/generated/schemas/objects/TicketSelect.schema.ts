import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { TicketMessageFindManySchema as TicketMessageFindManySchema } from '../findManyTicketMessage.schema';
import { TicketCountOutputTypeArgsObjectSchema as TicketCountOutputTypeArgsObjectSchema } from './TicketCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  ticketId: z.boolean().optional(),
  title: z.boolean().optional(),
  description: z.boolean().optional(),
  status: z.boolean().optional(),
  priority: z.boolean().optional(),
  userId: z.boolean().optional(),
  assignedToId: z.boolean().optional(),
  channelName: z.boolean().optional(),
  tags: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  closedAt: z.boolean().optional(),
  assignedTo: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  messages: z.union([z.boolean(), z.lazy(() => TicketMessageFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TicketCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const TicketSelectObjectSchema: z.ZodType<Prisma.TicketSelect> = makeSchema() as unknown as z.ZodType<Prisma.TicketSelect>;
export const TicketSelectObjectZodSchema = makeSchema();
