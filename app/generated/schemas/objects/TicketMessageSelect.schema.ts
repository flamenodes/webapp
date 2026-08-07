import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { TicketArgsObjectSchema as TicketArgsObjectSchema } from './TicketArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  ticketId: z.boolean().optional(),
  ticket: z.union([z.boolean(), z.lazy(() => TicketArgsObjectSchema)]).optional(),
  senderId: z.boolean().optional(),
  sender: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  senderRole: z.boolean().optional(),
  content: z.boolean().optional(),
  attachments: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
export const TicketMessageSelectObjectSchema: z.ZodType<Prisma.TicketMessageSelect> = makeSchema() as unknown as z.ZodType<Prisma.TicketMessageSelect>;
export const TicketMessageSelectObjectZodSchema = makeSchema();
