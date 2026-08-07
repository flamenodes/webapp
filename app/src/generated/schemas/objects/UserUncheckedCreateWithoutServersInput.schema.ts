import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema as SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutUserInput.schema';
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema as AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AccountUncheckedCreateNestedManyWithoutUserInput.schema';
import { BillingAddressUncheckedCreateNestedOneWithoutUserInputObjectSchema as BillingAddressUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './BillingAddressUncheckedCreateNestedOneWithoutUserInput.schema';
import { CartUncheckedCreateNestedOneWithoutUserInputObjectSchema as CartUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './CartUncheckedCreateNestedOneWithoutUserInput.schema';
import { OrderUncheckedCreateNestedManyWithoutUserInputObjectSchema as OrderUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './OrderUncheckedCreateNestedManyWithoutUserInput.schema';
import { TicketUncheckedCreateNestedManyWithoutUserInputObjectSchema as TicketUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './TicketUncheckedCreateNestedManyWithoutUserInput.schema';
import { TicketUncheckedCreateNestedManyWithoutAssignedToInputObjectSchema as TicketUncheckedCreateNestedManyWithoutAssignedToInputObjectSchema } from './TicketUncheckedCreateNestedManyWithoutAssignedToInput.schema';
import { TicketMessageUncheckedCreateNestedManyWithoutSenderInputObjectSchema as TicketMessageUncheckedCreateNestedManyWithoutSenderInputObjectSchema } from './TicketMessageUncheckedCreateNestedManyWithoutSenderInput.schema';
import { NotificationUncheckedCreateNestedManyWithoutUserInputObjectSchema as NotificationUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './NotificationUncheckedCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string(),
  clientId: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean().optional(),
  image: z.string().optional().nullable(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional(),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional(),
  role: z.string().optional().nullable(),
  banned: z.boolean().optional().nullable(),
  banReason: z.string().optional().nullable(),
  banExpires: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional().nullable(),
  username: z.string(),
  firstname: z.string(),
  lastname: z.string(),
  pteroUserId: z.number().int().optional().nullable(),
  displayUsername: z.string().optional().nullable(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  billingAddress: z.lazy(() => BillingAddressUncheckedCreateNestedOneWithoutUserInputObjectSchema).optional(),
  cart: z.lazy(() => CartUncheckedCreateNestedOneWithoutUserInputObjectSchema).optional(),
  orders: z.lazy(() => OrderUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  tickets: z.lazy(() => TicketUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  assignedTickets: z.lazy(() => TicketUncheckedCreateNestedManyWithoutAssignedToInputObjectSchema).optional(),
  ticketMessages: z.lazy(() => TicketMessageUncheckedCreateNestedManyWithoutSenderInputObjectSchema).optional(),
  notifications: z.lazy(() => NotificationUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutServersInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutServersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutServersInput>;
export const UserUncheckedCreateWithoutServersInputObjectZodSchema = makeSchema();
