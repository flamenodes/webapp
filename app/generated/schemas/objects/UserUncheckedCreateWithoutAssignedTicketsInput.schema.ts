import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema as SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutUserInput.schema';
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema as AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AccountUncheckedCreateNestedManyWithoutUserInput.schema';
import { ServerUncheckedCreateNestedManyWithoutUserInputObjectSchema as ServerUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ServerUncheckedCreateNestedManyWithoutUserInput.schema';
import { CartUncheckedCreateNestedOneWithoutUserInputObjectSchema as CartUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './CartUncheckedCreateNestedOneWithoutUserInput.schema';
import { OrderUncheckedCreateNestedManyWithoutUserInputObjectSchema as OrderUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './OrderUncheckedCreateNestedManyWithoutUserInput.schema';
import { TicketUncheckedCreateNestedManyWithoutUserInputObjectSchema as TicketUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './TicketUncheckedCreateNestedManyWithoutUserInput.schema';
import { TicketMessageUncheckedCreateNestedManyWithoutSenderInputObjectSchema as TicketMessageUncheckedCreateNestedManyWithoutSenderInputObjectSchema } from './TicketMessageUncheckedCreateNestedManyWithoutSenderInput.schema';
import { NotificationUncheckedCreateNestedManyWithoutUserInputObjectSchema as NotificationUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './NotificationUncheckedCreateNestedManyWithoutUserInput.schema'

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
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  servers: z.lazy(() => ServerUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  cart: z.lazy(() => CartUncheckedCreateNestedOneWithoutUserInputObjectSchema).optional(),
  orders: z.lazy(() => OrderUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  tickets: z.lazy(() => TicketUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  ticketMessages: z.lazy(() => TicketMessageUncheckedCreateNestedManyWithoutSenderInputObjectSchema).optional(),
  notifications: z.lazy(() => NotificationUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutAssignedTicketsInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutAssignedTicketsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutAssignedTicketsInput>;
export const UserUncheckedCreateWithoutAssignedTicketsInputObjectZodSchema = makeSchema();
