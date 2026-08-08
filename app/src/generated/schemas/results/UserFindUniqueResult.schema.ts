import * as z from 'zod';
import { CartSchema } from '../models/Cart.schema';
import { NotificationSchema } from '../models/Notification.schema';
import { OrderSchema } from '../models/Order.schema';
import { ServerSchema } from '../models/Server.schema';
import { TicketSchema } from '../models/Ticket.schema';
import { TicketMessageSchema } from '../models/TicketMessage.schema';
import { AccountSchema } from '../models/Account.schema';
import { BillingAddressSchema } from '../models/BillingAddress.schema';
import { SessionSchema } from '../models/Session.schema';
export const UserFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean(),
  image: z.string().optional(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  banExpires: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").optional(),
  banReason: z.string().optional(),
  banned: z.boolean().optional(),
  displayUsername: z.string().optional(),
  firstname: z.string(),
  lastname: z.string(),
  role: z.string().optional(),
  username: z.string(),
  clientId: z.string(),
  pteroUserId: z.number().int().optional(),
  cart: CartSchema.optional(),
  notifications: z.array(NotificationSchema).optional(),
  orders: z.array(OrderSchema).optional(),
  servers: z.array(ServerSchema).optional(),
  assignedTickets: z.array(TicketSchema).optional(),
  tickets: z.array(TicketSchema).optional(),
  ticketMessages: z.array(TicketMessageSchema).optional(),
  accounts: z.array(AccountSchema).optional(),
  billingAddress: BillingAddressSchema.optional(),
  sessions: z.array(SessionSchema).optional()
}));