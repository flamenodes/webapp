import * as z from 'zod';
import { TicketStatusSchema } from '../enums/TicketStatus.schema';
import { TicketPrioritySchema } from '../enums/TicketPriority.schema';
import { TicketCreatetagsInputObjectSchema as TicketCreatetagsInputObjectSchema } from './TicketCreatetagsInput.schema';
import { UserCreateNestedOneWithoutTicketsInputObjectSchema as UserCreateNestedOneWithoutTicketsInputObjectSchema } from './UserCreateNestedOneWithoutTicketsInput.schema';
import { UserCreateNestedOneWithoutAssignedTicketsInputObjectSchema as UserCreateNestedOneWithoutAssignedTicketsInputObjectSchema } from './UserCreateNestedOneWithoutAssignedTicketsInput.schema';
const makeSchema = () => z.object({
    id: z.string().optional(),
    ticketId: z.string(),
    title: z.string(),
    description: z.string(),
    status: TicketStatusSchema.optional(),
    priority: TicketPrioritySchema.optional(),
    channelName: z.string(),
    tags: z.union([z.lazy(() => TicketCreatetagsInputObjectSchema), z.string().array()]).optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    closedAt: z.coerce.date().optional().nullable(),
    user: z.lazy(() => UserCreateNestedOneWithoutTicketsInputObjectSchema),
    assignedTo: z.lazy(() => UserCreateNestedOneWithoutAssignedTicketsInputObjectSchema).optional()
}).strict();
export const TicketCreateWithoutMessagesInputObjectSchema = makeSchema();
export const TicketCreateWithoutMessagesInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketCreateWithoutMessagesInput.schema.js.map