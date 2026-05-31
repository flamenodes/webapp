import * as z from 'zod';
import { TicketStatusSchema } from '../enums/TicketStatus.schema';
import { TicketPrioritySchema } from '../enums/TicketPriority.schema';
import { TicketCreatetagsInputObjectSchema as TicketCreatetagsInputObjectSchema } from './TicketCreatetagsInput.schema';
import { UserCreateNestedOneWithoutAssignedTicketsInputObjectSchema as UserCreateNestedOneWithoutAssignedTicketsInputObjectSchema } from './UserCreateNestedOneWithoutAssignedTicketsInput.schema';
import { TicketMessageCreateNestedManyWithoutTicketInputObjectSchema as TicketMessageCreateNestedManyWithoutTicketInputObjectSchema } from './TicketMessageCreateNestedManyWithoutTicketInput.schema';
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
    assignedTo: z.lazy(() => UserCreateNestedOneWithoutAssignedTicketsInputObjectSchema).optional(),
    messages: z.lazy(() => TicketMessageCreateNestedManyWithoutTicketInputObjectSchema).optional()
}).strict();
export const TicketCreateWithoutUserInputObjectSchema = makeSchema();
export const TicketCreateWithoutUserInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketCreateWithoutUserInput.schema.js.map