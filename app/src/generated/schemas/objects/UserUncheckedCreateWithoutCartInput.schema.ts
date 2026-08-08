import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { NotificationUncheckedCreateNestedManyWithoutUserInputObjectSchema as NotificationUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './NotificationUncheckedCreateNestedManyWithoutUserInput.schema';
import { OrderUncheckedCreateNestedManyWithoutUserInputObjectSchema as OrderUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './OrderUncheckedCreateNestedManyWithoutUserInput.schema';
import { ServerUncheckedCreateNestedManyWithoutUserInputObjectSchema as ServerUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ServerUncheckedCreateNestedManyWithoutUserInput.schema';
import { TicketUncheckedCreateNestedManyWithoutAssignedToInputObjectSchema as TicketUncheckedCreateNestedManyWithoutAssignedToInputObjectSchema } from './TicketUncheckedCreateNestedManyWithoutAssignedToInput.schema';
import { TicketUncheckedCreateNestedManyWithoutUserInputObjectSchema as TicketUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './TicketUncheckedCreateNestedManyWithoutUserInput.schema';
import { TicketMessageUncheckedCreateNestedManyWithoutSenderInputObjectSchema as TicketMessageUncheckedCreateNestedManyWithoutSenderInputObjectSchema } from './TicketMessageUncheckedCreateNestedManyWithoutSenderInput.schema';
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema as AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AccountUncheckedCreateNestedManyWithoutUserInput.schema';
import { BillingAddressUncheckedCreateNestedOneWithoutUserInputObjectSchema as BillingAddressUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './BillingAddressUncheckedCreateNestedOneWithoutUserInput.schema';
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema as SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean().optional(),
  image: z.string().optional().nullable(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional(),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional(),
  banExpires: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional().nullable(),
  banReason: z.string().optional().nullable(),
  banned: z.boolean().optional().nullable(),
  displayUsername: z.string().optional().nullable(),
  firstname: z.string(),
  lastname: z.string(),
  role: z.string().optional().nullable(),
  username: z.string(),
  clientId: z.string(),
  pteroUserId: z.number().int().optional().nullable(),
  notifications: z.lazy(() => NotificationUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  orders: z.lazy(() => OrderUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  servers: z.lazy(() => ServerUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  assignedTickets: z.lazy(() => TicketUncheckedCreateNestedManyWithoutAssignedToInputObjectSchema).optional(),
  tickets: z.lazy(() => TicketUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  ticketMessages: z.lazy(() => TicketMessageUncheckedCreateNestedManyWithoutSenderInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  billingAddress: z.lazy(() => BillingAddressUncheckedCreateNestedOneWithoutUserInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutCartInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutCartInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutCartInput>;
export const UserUncheckedCreateWithoutCartInputObjectZodSchema = makeSchema();
