import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { SessionCreateNestedManyWithoutUserInputObjectSchema as SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema';
import { AccountCreateNestedManyWithoutUserInputObjectSchema as AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema';
import { ServerCreateNestedManyWithoutUserInputObjectSchema as ServerCreateNestedManyWithoutUserInputObjectSchema } from './ServerCreateNestedManyWithoutUserInput.schema';
import { CartCreateNestedOneWithoutUserInputObjectSchema as CartCreateNestedOneWithoutUserInputObjectSchema } from './CartCreateNestedOneWithoutUserInput.schema';
import { TicketCreateNestedManyWithoutUserInputObjectSchema as TicketCreateNestedManyWithoutUserInputObjectSchema } from './TicketCreateNestedManyWithoutUserInput.schema';
import { TicketCreateNestedManyWithoutAssignedToInputObjectSchema as TicketCreateNestedManyWithoutAssignedToInputObjectSchema } from './TicketCreateNestedManyWithoutAssignedToInput.schema';
import { TicketMessageCreateNestedManyWithoutSenderInputObjectSchema as TicketMessageCreateNestedManyWithoutSenderInputObjectSchema } from './TicketMessageCreateNestedManyWithoutSenderInput.schema';
import { NotificationCreateNestedManyWithoutUserInputObjectSchema as NotificationCreateNestedManyWithoutUserInputObjectSchema } from './NotificationCreateNestedManyWithoutUserInput.schema'

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
  phone: z.string().optional().nullable(),
  displayUsername: z.string().optional().nullable(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema).optional(),
  servers: z.lazy(() => ServerCreateNestedManyWithoutUserInputObjectSchema).optional(),
  cart: z.lazy(() => CartCreateNestedOneWithoutUserInputObjectSchema).optional(),
  tickets: z.lazy(() => TicketCreateNestedManyWithoutUserInputObjectSchema).optional(),
  assignedTickets: z.lazy(() => TicketCreateNestedManyWithoutAssignedToInputObjectSchema).optional(),
  ticketMessages: z.lazy(() => TicketMessageCreateNestedManyWithoutSenderInputObjectSchema).optional(),
  notifications: z.lazy(() => NotificationCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutOrdersInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutOrdersInput>;
export const UserCreateWithoutOrdersInputObjectZodSchema = makeSchema();
