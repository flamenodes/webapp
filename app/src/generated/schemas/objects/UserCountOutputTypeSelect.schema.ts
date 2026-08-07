import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { UserCountOutputTypeCountSessionsArgsObjectSchema as UserCountOutputTypeCountSessionsArgsObjectSchema } from './UserCountOutputTypeCountSessionsArgs.schema';
import { UserCountOutputTypeCountAccountsArgsObjectSchema as UserCountOutputTypeCountAccountsArgsObjectSchema } from './UserCountOutputTypeCountAccountsArgs.schema';
import { UserCountOutputTypeCountServersArgsObjectSchema as UserCountOutputTypeCountServersArgsObjectSchema } from './UserCountOutputTypeCountServersArgs.schema';
import { UserCountOutputTypeCountOrdersArgsObjectSchema as UserCountOutputTypeCountOrdersArgsObjectSchema } from './UserCountOutputTypeCountOrdersArgs.schema';
import { UserCountOutputTypeCountTicketsArgsObjectSchema as UserCountOutputTypeCountTicketsArgsObjectSchema } from './UserCountOutputTypeCountTicketsArgs.schema';
import { UserCountOutputTypeCountAssignedTicketsArgsObjectSchema as UserCountOutputTypeCountAssignedTicketsArgsObjectSchema } from './UserCountOutputTypeCountAssignedTicketsArgs.schema';
import { UserCountOutputTypeCountTicketMessagesArgsObjectSchema as UserCountOutputTypeCountTicketMessagesArgsObjectSchema } from './UserCountOutputTypeCountTicketMessagesArgs.schema';
import { UserCountOutputTypeCountNotificationsArgsObjectSchema as UserCountOutputTypeCountNotificationsArgsObjectSchema } from './UserCountOutputTypeCountNotificationsArgs.schema'

const makeSchema = () => z.object({
  sessions: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountSessionsArgsObjectSchema)]).optional(),
  accounts: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountAccountsArgsObjectSchema)]).optional(),
  servers: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountServersArgsObjectSchema)]).optional(),
  orders: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountOrdersArgsObjectSchema)]).optional(),
  tickets: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountTicketsArgsObjectSchema)]).optional(),
  assignedTickets: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountAssignedTicketsArgsObjectSchema)]).optional(),
  ticketMessages: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountTicketMessagesArgsObjectSchema)]).optional(),
  notifications: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountNotificationsArgsObjectSchema)]).optional()
}).strict();
export const UserCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserCountOutputTypeSelect>;
export const UserCountOutputTypeSelectObjectZodSchema = makeSchema();
