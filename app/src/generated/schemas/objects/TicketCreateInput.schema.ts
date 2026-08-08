import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { TicketStatusSchema } from '../enums/TicketStatus.schema';
import { TicketPrioritySchema } from '../enums/TicketPriority.schema';
import { TicketCreatetagsInputObjectSchema as TicketCreatetagsInputObjectSchema } from './TicketCreatetagsInput.schema';
import { UserCreateNestedOneWithoutAssignedTicketsInputObjectSchema as UserCreateNestedOneWithoutAssignedTicketsInputObjectSchema } from './UserCreateNestedOneWithoutAssignedTicketsInput.schema';
import { UserCreateNestedOneWithoutTicketsInputObjectSchema as UserCreateNestedOneWithoutTicketsInputObjectSchema } from './UserCreateNestedOneWithoutTicketsInput.schema';
import { TicketMessageCreateNestedManyWithoutTicketInputObjectSchema as TicketMessageCreateNestedManyWithoutTicketInputObjectSchema } from './TicketMessageCreateNestedManyWithoutTicketInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  ticketId: z.string(),
  title: z.string(),
  description: z.string(),
  status: TicketStatusSchema.optional(),
  priority: TicketPrioritySchema.optional(),
  channelName: z.string(),
  tags: z.union([z.lazy(() => TicketCreatetagsInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional(),
  closedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional().nullable(),
  assignedTo: z.lazy(() => UserCreateNestedOneWithoutAssignedTicketsInputObjectSchema).optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutTicketsInputObjectSchema),
  messages: z.lazy(() => TicketMessageCreateNestedManyWithoutTicketInputObjectSchema).optional()
}).strict();
export const TicketCreateInputObjectSchema: z.ZodType<Prisma.TicketCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketCreateInput>;
export const TicketCreateInputObjectZodSchema = makeSchema();
