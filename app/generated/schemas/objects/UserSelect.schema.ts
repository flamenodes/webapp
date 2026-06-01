import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { SessionFindManySchema as SessionFindManySchema } from '../findManySession.schema';
import { AccountFindManySchema as AccountFindManySchema } from '../findManyAccount.schema';
import { ServerFindManySchema as ServerFindManySchema } from '../findManyServer.schema';
import { CartArgsObjectSchema as CartArgsObjectSchema } from './CartArgs.schema';
import { OrderFindManySchema as OrderFindManySchema } from '../findManyOrder.schema';
import { TicketFindManySchema as TicketFindManySchema } from '../findManyTicket.schema';
import { TicketMessageFindManySchema as TicketMessageFindManySchema } from '../findManyTicketMessage.schema';
import { NotificationFindManySchema as NotificationFindManySchema } from '../findManyNotification.schema';
import { UserCountOutputTypeArgsObjectSchema as UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  clientId: z.boolean().optional(),
  name: z.boolean().optional(),
  email: z.boolean().optional(),
  emailVerified: z.boolean().optional(),
  image: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  sessions: z.union([z.boolean(), z.lazy(() => SessionFindManySchema)]).optional(),
  accounts: z.union([z.boolean(), z.lazy(() => AccountFindManySchema)]).optional(),
  role: z.boolean().optional(),
  banned: z.boolean().optional(),
  banReason: z.boolean().optional(),
  banExpires: z.boolean().optional(),
  username: z.boolean().optional(),
  firstname: z.boolean().optional(),
  lastname: z.boolean().optional(),
  pteroUserId: z.boolean().optional(),
  address: z.boolean().optional(),
  city: z.boolean().optional(),
  zip: z.boolean().optional(),
  country: z.boolean().optional(),
  phone: z.boolean().optional(),
  servers: z.union([z.boolean(), z.lazy(() => ServerFindManySchema)]).optional(),
  cart: z.union([z.boolean(), z.lazy(() => CartArgsObjectSchema)]).optional(),
  orders: z.union([z.boolean(), z.lazy(() => OrderFindManySchema)]).optional(),
  displayUsername: z.boolean().optional(),
  tickets: z.union([z.boolean(), z.lazy(() => TicketFindManySchema)]).optional(),
  assignedTickets: z.union([z.boolean(), z.lazy(() => TicketFindManySchema)]).optional(),
  ticketMessages: z.union([z.boolean(), z.lazy(() => TicketMessageFindManySchema)]).optional(),
  notifications: z.union([z.boolean(), z.lazy(() => NotificationFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UserSelectObjectSchema: z.ZodType<Prisma.UserSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserSelect>;
export const UserSelectObjectZodSchema = makeSchema();
