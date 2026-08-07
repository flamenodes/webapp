import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { SessionCreateNestedManyWithoutUserInputObjectSchema as SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema';
import { AccountCreateNestedManyWithoutUserInputObjectSchema as AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema';
import { BillingAddressCreateNestedOneWithoutUserInputObjectSchema as BillingAddressCreateNestedOneWithoutUserInputObjectSchema } from './BillingAddressCreateNestedOneWithoutUserInput.schema';
import { ServerCreateNestedManyWithoutUserInputObjectSchema as ServerCreateNestedManyWithoutUserInputObjectSchema } from './ServerCreateNestedManyWithoutUserInput.schema';
import { CartCreateNestedOneWithoutUserInputObjectSchema as CartCreateNestedOneWithoutUserInputObjectSchema } from './CartCreateNestedOneWithoutUserInput.schema';
import { OrderCreateNestedManyWithoutUserInputObjectSchema as OrderCreateNestedManyWithoutUserInputObjectSchema } from './OrderCreateNestedManyWithoutUserInput.schema';
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
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema).optional(),
  billingAddress: z.lazy(() => BillingAddressCreateNestedOneWithoutUserInputObjectSchema).optional(),
  servers: z.lazy(() => ServerCreateNestedManyWithoutUserInputObjectSchema).optional(),
  cart: z.lazy(() => CartCreateNestedOneWithoutUserInputObjectSchema).optional(),
  orders: z.lazy(() => OrderCreateNestedManyWithoutUserInputObjectSchema).optional(),
  assignedTickets: z.lazy(() => TicketCreateNestedManyWithoutAssignedToInputObjectSchema).optional(),
  ticketMessages: z.lazy(() => TicketMessageCreateNestedManyWithoutSenderInputObjectSchema).optional(),
  notifications: z.lazy(() => NotificationCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutTicketsInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutTicketsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutTicketsInput>;
export const UserCreateWithoutTicketsInputObjectZodSchema = makeSchema();
