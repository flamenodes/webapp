import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { TicketStatusSchema } from '../enums/TicketStatus.schema';
import { EnumTicketStatusFieldUpdateOperationsInputObjectSchema as EnumTicketStatusFieldUpdateOperationsInputObjectSchema } from './EnumTicketStatusFieldUpdateOperationsInput.schema';
import { TicketPrioritySchema } from '../enums/TicketPriority.schema';
import { EnumTicketPriorityFieldUpdateOperationsInputObjectSchema as EnumTicketPriorityFieldUpdateOperationsInputObjectSchema } from './EnumTicketPriorityFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { TicketUpdatetagsInputObjectSchema as TicketUpdatetagsInputObjectSchema } from './TicketUpdatetagsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  ticketId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([TicketStatusSchema, z.lazy(() => EnumTicketStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  priority: z.union([TicketPrioritySchema, z.lazy(() => EnumTicketPriorityFieldUpdateOperationsInputObjectSchema)]).optional(),
  assignedToId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  channelName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  tags: z.union([z.lazy(() => TicketUpdatetagsInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.union([z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time"), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time"), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  closedAt: z.union([z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time"), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const TicketUncheckedUpdateManyWithoutUserInputObjectSchema: z.ZodType<Prisma.TicketUncheckedUpdateManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketUncheckedUpdateManyWithoutUserInput>;
export const TicketUncheckedUpdateManyWithoutUserInputObjectZodSchema = makeSchema();
