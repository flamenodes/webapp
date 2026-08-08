import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { UserCountOutputTypeCountNotificationsArgsObjectSchema as UserCountOutputTypeCountNotificationsArgsObjectSchema } from './UserCountOutputTypeCountNotificationsArgs.schema';
import { UserCountOutputTypeCountOrdersArgsObjectSchema as UserCountOutputTypeCountOrdersArgsObjectSchema } from './UserCountOutputTypeCountOrdersArgs.schema';
import { UserCountOutputTypeCountServersArgsObjectSchema as UserCountOutputTypeCountServersArgsObjectSchema } from './UserCountOutputTypeCountServersArgs.schema';
import { UserCountOutputTypeCountAssignedTicketsArgsObjectSchema as UserCountOutputTypeCountAssignedTicketsArgsObjectSchema } from './UserCountOutputTypeCountAssignedTicketsArgs.schema';
import { UserCountOutputTypeCountTicketsArgsObjectSchema as UserCountOutputTypeCountTicketsArgsObjectSchema } from './UserCountOutputTypeCountTicketsArgs.schema';
import { UserCountOutputTypeCountTicketMessagesArgsObjectSchema as UserCountOutputTypeCountTicketMessagesArgsObjectSchema } from './UserCountOutputTypeCountTicketMessagesArgs.schema';
import { UserCountOutputTypeCountAccountsArgsObjectSchema as UserCountOutputTypeCountAccountsArgsObjectSchema } from './UserCountOutputTypeCountAccountsArgs.schema';
import { UserCountOutputTypeCountSessionsArgsObjectSchema as UserCountOutputTypeCountSessionsArgsObjectSchema } from './UserCountOutputTypeCountSessionsArgs.schema'

const makeSchema = () => z.object({
  notifications: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountNotificationsArgsObjectSchema)]).optional(),
  orders: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountOrdersArgsObjectSchema)]).optional(),
  servers: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountServersArgsObjectSchema)]).optional(),
  assignedTickets: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountAssignedTicketsArgsObjectSchema)]).optional(),
  tickets: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountTicketsArgsObjectSchema)]).optional(),
  ticketMessages: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountTicketMessagesArgsObjectSchema)]).optional(),
  accounts: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountAccountsArgsObjectSchema)]).optional(),
  sessions: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountSessionsArgsObjectSchema)]).optional()
}).strict();
export const UserCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserCountOutputTypeSelect>;
export const UserCountOutputTypeSelectObjectZodSchema = makeSchema();
