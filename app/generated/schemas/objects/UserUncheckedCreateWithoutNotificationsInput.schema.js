import * as z from 'zod';
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema as SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutUserInput.schema';
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema as AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AccountUncheckedCreateNestedManyWithoutUserInput.schema';
import { ServerUncheckedCreateNestedManyWithoutUserInputObjectSchema as ServerUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ServerUncheckedCreateNestedManyWithoutUserInput.schema';
import { CartUncheckedCreateNestedOneWithoutUserInputObjectSchema as CartUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './CartUncheckedCreateNestedOneWithoutUserInput.schema';
import { OrderUncheckedCreateNestedManyWithoutUserInputObjectSchema as OrderUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './OrderUncheckedCreateNestedManyWithoutUserInput.schema';
import { TicketUncheckedCreateNestedManyWithoutUserInputObjectSchema as TicketUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './TicketUncheckedCreateNestedManyWithoutUserInput.schema';
import { TicketUncheckedCreateNestedManyWithoutAssignedToInputObjectSchema as TicketUncheckedCreateNestedManyWithoutAssignedToInputObjectSchema } from './TicketUncheckedCreateNestedManyWithoutAssignedToInput.schema';
import { TicketMessageUncheckedCreateNestedManyWithoutSenderInputObjectSchema as TicketMessageUncheckedCreateNestedManyWithoutSenderInputObjectSchema } from './TicketMessageUncheckedCreateNestedManyWithoutSenderInput.schema';
const makeSchema = () => z.object({
    id: z.string(),
    clientId: z.string(),
    name: z.string(),
    email: z.string(),
    emailVerified: z.boolean().optional(),
    image: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    role: z.string().optional().nullable(),
    banned: z.boolean().optional().nullable(),
    banReason: z.string().optional().nullable(),
    banExpires: z.coerce.date().optional().nullable(),
    username: z.string(),
    firstname: z.string(),
    lastname: z.string(),
    pteroUserId: z.number().int().optional().nullable(),
    address: z.string().optional().nullable(),
    city: z.string().optional().nullable(),
    zip: z.string().optional().nullable(),
    country: z.string().optional().nullable(),
    displayUsername: z.string().optional().nullable(),
    sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
    accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
    servers: z.lazy(() => ServerUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
    cart: z.lazy(() => CartUncheckedCreateNestedOneWithoutUserInputObjectSchema).optional(),
    orders: z.lazy(() => OrderUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
    tickets: z.lazy(() => TicketUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
    assignedTickets: z.lazy(() => TicketUncheckedCreateNestedManyWithoutAssignedToInputObjectSchema).optional(),
    ticketMessages: z.lazy(() => TicketMessageUncheckedCreateNestedManyWithoutSenderInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutNotificationsInputObjectSchema = makeSchema();
export const UserUncheckedCreateWithoutNotificationsInputObjectZodSchema = makeSchema();
//# sourceMappingURL=UserUncheckedCreateWithoutNotificationsInput.schema.js.map