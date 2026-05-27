import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { TicketStatusSchema } from '../enums/TicketStatus.schema';
import { EnumTicketStatusFieldUpdateOperationsInputObjectSchema as EnumTicketStatusFieldUpdateOperationsInputObjectSchema } from './EnumTicketStatusFieldUpdateOperationsInput.schema';
import { TicketPrioritySchema } from '../enums/TicketPriority.schema';
import { EnumTicketPriorityFieldUpdateOperationsInputObjectSchema as EnumTicketPriorityFieldUpdateOperationsInputObjectSchema } from './EnumTicketPriorityFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { TicketUpdatetagsInputObjectSchema as TicketUpdatetagsInputObjectSchema } from './TicketUpdatetagsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { TicketMessageUncheckedUpdateManyWithoutTicketNestedInputObjectSchema as TicketMessageUncheckedUpdateManyWithoutTicketNestedInputObjectSchema } from './TicketMessageUncheckedUpdateManyWithoutTicketNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  ticketId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([TicketStatusSchema, z.lazy(() => EnumTicketStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  priority: z.union([TicketPrioritySchema, z.lazy(() => EnumTicketPriorityFieldUpdateOperationsInputObjectSchema)]).optional(),
  userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  assignedToId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  channelName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  tags: z.union([z.lazy(() => TicketUpdatetagsInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  closedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  messages: z.lazy(() => TicketMessageUncheckedUpdateManyWithoutTicketNestedInputObjectSchema).optional()
}).strict();
export const TicketUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.TicketUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketUncheckedUpdateInput>;
export const TicketUncheckedUpdateInputObjectZodSchema = makeSchema();
