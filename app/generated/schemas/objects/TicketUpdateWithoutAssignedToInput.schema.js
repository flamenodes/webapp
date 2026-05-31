import * as z from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { TicketStatusSchema } from '../enums/TicketStatus.schema';
import { EnumTicketStatusFieldUpdateOperationsInputObjectSchema as EnumTicketStatusFieldUpdateOperationsInputObjectSchema } from './EnumTicketStatusFieldUpdateOperationsInput.schema';
import { TicketPrioritySchema } from '../enums/TicketPriority.schema';
import { EnumTicketPriorityFieldUpdateOperationsInputObjectSchema as EnumTicketPriorityFieldUpdateOperationsInputObjectSchema } from './EnumTicketPriorityFieldUpdateOperationsInput.schema';
import { TicketUpdatetagsInputObjectSchema as TicketUpdatetagsInputObjectSchema } from './TicketUpdatetagsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutTicketsNestedInputObjectSchema as UserUpdateOneRequiredWithoutTicketsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutTicketsNestedInput.schema';
import { TicketMessageUpdateManyWithoutTicketNestedInputObjectSchema as TicketMessageUpdateManyWithoutTicketNestedInputObjectSchema } from './TicketMessageUpdateManyWithoutTicketNestedInput.schema';
const makeSchema = () => z.object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    ticketId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    status: z.union([TicketStatusSchema, z.lazy(() => EnumTicketStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
    priority: z.union([TicketPrioritySchema, z.lazy(() => EnumTicketPriorityFieldUpdateOperationsInputObjectSchema)]).optional(),
    channelName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    tags: z.union([z.lazy(() => TicketUpdatetagsInputObjectSchema), z.string().array()]).optional(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    closedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
    user: z.lazy(() => UserUpdateOneRequiredWithoutTicketsNestedInputObjectSchema).optional(),
    messages: z.lazy(() => TicketMessageUpdateManyWithoutTicketNestedInputObjectSchema).optional()
}).strict();
export const TicketUpdateWithoutAssignedToInputObjectSchema = makeSchema();
export const TicketUpdateWithoutAssignedToInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketUpdateWithoutAssignedToInput.schema.js.map