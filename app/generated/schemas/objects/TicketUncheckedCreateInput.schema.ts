import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { TicketStatusSchema } from '../enums/TicketStatus.schema';
import { TicketPrioritySchema } from '../enums/TicketPriority.schema';
import { TicketCreatetagsInputObjectSchema as TicketCreatetagsInputObjectSchema } from './TicketCreatetagsInput.schema';
import { TicketMessageUncheckedCreateNestedManyWithoutTicketInputObjectSchema as TicketMessageUncheckedCreateNestedManyWithoutTicketInputObjectSchema } from './TicketMessageUncheckedCreateNestedManyWithoutTicketInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  ticketId: z.string(),
  title: z.string(),
  description: z.string(),
  status: TicketStatusSchema.optional(),
  priority: TicketPrioritySchema.optional(),
  userId: z.string(),
  assignedToId: z.string().optional().nullable(),
  channelName: z.string(),
  tags: z.union([z.lazy(() => TicketCreatetagsInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.coerce.date().optional(),
  closedAt: z.coerce.date().optional().nullable(),
  messages: z.lazy(() => TicketMessageUncheckedCreateNestedManyWithoutTicketInputObjectSchema).optional()
}).strict();
export const TicketUncheckedCreateInputObjectSchema: z.ZodType<Prisma.TicketUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketUncheckedCreateInput>;
export const TicketUncheckedCreateInputObjectZodSchema = makeSchema();
