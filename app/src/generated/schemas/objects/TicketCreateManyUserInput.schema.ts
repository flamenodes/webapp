import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { TicketStatusSchema } from '../enums/TicketStatus.schema';
import { TicketPrioritySchema } from '../enums/TicketPriority.schema';
import { TicketCreatetagsInputObjectSchema as TicketCreatetagsInputObjectSchema } from './TicketCreatetagsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  ticketId: z.string(),
  title: z.string(),
  description: z.string(),
  status: TicketStatusSchema.optional(),
  priority: TicketPrioritySchema.optional(),
  assignedToId: z.string().optional().nullable(),
  channelName: z.string(),
  tags: z.union([z.lazy(() => TicketCreatetagsInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional(),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional(),
  closedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional().nullable()
}).strict();
export const TicketCreateManyUserInputObjectSchema: z.ZodType<Prisma.TicketCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketCreateManyUserInput>;
export const TicketCreateManyUserInputObjectZodSchema = makeSchema();
