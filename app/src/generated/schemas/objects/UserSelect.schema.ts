import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { CartArgsObjectSchema as CartArgsObjectSchema } from './CartArgs.schema';
import { NotificationFindManySchema as NotificationFindManySchema } from '../findManyNotification.schema';
import { OrderFindManySchema as OrderFindManySchema } from '../findManyOrder.schema';
import { ServerFindManySchema as ServerFindManySchema } from '../findManyServer.schema';
import { TicketFindManySchema as TicketFindManySchema } from '../findManyTicket.schema';
import { TicketMessageFindManySchema as TicketMessageFindManySchema } from '../findManyTicketMessage.schema';
import { AccountFindManySchema as AccountFindManySchema } from '../findManyAccount.schema';
import { BillingAddressArgsObjectSchema as BillingAddressArgsObjectSchema } from './BillingAddressArgs.schema';
import { SessionFindManySchema as SessionFindManySchema } from '../findManySession.schema';
import { UserCountOutputTypeArgsObjectSchema as UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  email: z.boolean().optional(),
  emailVerified: z.boolean().optional(),
  image: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  banExpires: z.boolean().optional(),
  banReason: z.boolean().optional(),
  banned: z.boolean().optional(),
  displayUsername: z.boolean().optional(),
  firstname: z.boolean().optional(),
  lastname: z.boolean().optional(),
  role: z.boolean().optional(),
  username: z.boolean().optional(),
  clientId: z.boolean().optional(),
  pteroUserId: z.boolean().optional(),
  cart: z.union([z.boolean(), z.lazy(() => CartArgsObjectSchema)]).optional(),
  notifications: z.union([z.boolean(), z.lazy(() => NotificationFindManySchema)]).optional(),
  orders: z.union([z.boolean(), z.lazy(() => OrderFindManySchema)]).optional(),
  servers: z.union([z.boolean(), z.lazy(() => ServerFindManySchema)]).optional(),
  assignedTickets: z.union([z.boolean(), z.lazy(() => TicketFindManySchema)]).optional(),
  tickets: z.union([z.boolean(), z.lazy(() => TicketFindManySchema)]).optional(),
  ticketMessages: z.union([z.boolean(), z.lazy(() => TicketMessageFindManySchema)]).optional(),
  accounts: z.union([z.boolean(), z.lazy(() => AccountFindManySchema)]).optional(),
  billingAddress: z.union([z.boolean(), z.lazy(() => BillingAddressArgsObjectSchema)]).optional(),
  sessions: z.union([z.boolean(), z.lazy(() => SessionFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UserSelectObjectSchema: z.ZodType<Prisma.UserSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserSelect>;
export const UserSelectObjectZodSchema = makeSchema();
