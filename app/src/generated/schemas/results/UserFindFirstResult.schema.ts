import * as z from 'zod';
import { SessionSchema } from '../models/Session.schema';
import { AccountSchema } from '../models/Account.schema';
import { BillingAddressSchema } from '../models/BillingAddress.schema';
import { ServerSchema } from '../models/Server.schema';
import { CartSchema } from '../models/Cart.schema';
import { OrderSchema } from '../models/Order.schema';
import { TicketSchema } from '../models/Ticket.schema';
import { TicketMessageSchema } from '../models/TicketMessage.schema';
import { NotificationSchema } from '../models/Notification.schema';
export const UserFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  clientId: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean(),
  image: z.string().optional(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  sessions: z.array(SessionSchema).optional(),
  accounts: z.array(AccountSchema).optional(),
  role: z.string().optional(),
  banned: z.boolean().optional(),
  banReason: z.string().optional(),
  banExpires: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").optional(),
  username: z.string(),
  firstname: z.string(),
  lastname: z.string(),
  pteroUserId: z.number().int().optional(),
  billingAddress: BillingAddressSchema.optional(),
  servers: z.array(ServerSchema).optional(),
  cart: CartSchema.optional(),
  orders: z.array(OrderSchema).optional(),
  displayUsername: z.string().optional(),
  tickets: z.array(TicketSchema).optional(),
  assignedTickets: z.array(TicketSchema).optional(),
  ticketMessages: z.array(TicketMessageSchema).optional(),
  notifications: z.array(NotificationSchema).optional()
}));