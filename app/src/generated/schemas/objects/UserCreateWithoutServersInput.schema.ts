import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { CartCreateNestedOneWithoutUserInputObjectSchema as CartCreateNestedOneWithoutUserInputObjectSchema } from './CartCreateNestedOneWithoutUserInput.schema';
import { NotificationCreateNestedManyWithoutUserInputObjectSchema as NotificationCreateNestedManyWithoutUserInputObjectSchema } from './NotificationCreateNestedManyWithoutUserInput.schema';
import { OrderCreateNestedManyWithoutUserInputObjectSchema as OrderCreateNestedManyWithoutUserInputObjectSchema } from './OrderCreateNestedManyWithoutUserInput.schema';
import { TicketCreateNestedManyWithoutAssignedToInputObjectSchema as TicketCreateNestedManyWithoutAssignedToInputObjectSchema } from './TicketCreateNestedManyWithoutAssignedToInput.schema';
import { TicketCreateNestedManyWithoutUserInputObjectSchema as TicketCreateNestedManyWithoutUserInputObjectSchema } from './TicketCreateNestedManyWithoutUserInput.schema';
import { TicketMessageCreateNestedManyWithoutSenderInputObjectSchema as TicketMessageCreateNestedManyWithoutSenderInputObjectSchema } from './TicketMessageCreateNestedManyWithoutSenderInput.schema';
import { AccountCreateNestedManyWithoutUserInputObjectSchema as AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema';
import { BillingAddressCreateNestedOneWithoutUserInputObjectSchema as BillingAddressCreateNestedOneWithoutUserInputObjectSchema } from './BillingAddressCreateNestedOneWithoutUserInput.schema';
import { SessionCreateNestedManyWithoutUserInputObjectSchema as SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema'

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
  cart: z.lazy(() => CartCreateNestedOneWithoutUserInputObjectSchema).optional(),
  notifications: z.lazy(() => NotificationCreateNestedManyWithoutUserInputObjectSchema).optional(),
  orders: z.lazy(() => OrderCreateNestedManyWithoutUserInputObjectSchema).optional(),
  assignedTickets: z.lazy(() => TicketCreateNestedManyWithoutAssignedToInputObjectSchema).optional(),
  tickets: z.lazy(() => TicketCreateNestedManyWithoutUserInputObjectSchema).optional(),
  ticketMessages: z.lazy(() => TicketMessageCreateNestedManyWithoutSenderInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema).optional(),
  billingAddress: z.lazy(() => BillingAddressCreateNestedOneWithoutUserInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutServersInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutServersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutServersInput>;
export const UserCreateWithoutServersInputObjectZodSchema = makeSchema();
