import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CartOrderByWithRelationInputObjectSchema as CartOrderByWithRelationInputObjectSchema } from './CartOrderByWithRelationInput.schema';
import { NotificationOrderByRelationAggregateInputObjectSchema as NotificationOrderByRelationAggregateInputObjectSchema } from './NotificationOrderByRelationAggregateInput.schema';
import { OrderOrderByRelationAggregateInputObjectSchema as OrderOrderByRelationAggregateInputObjectSchema } from './OrderOrderByRelationAggregateInput.schema';
import { ServerOrderByRelationAggregateInputObjectSchema as ServerOrderByRelationAggregateInputObjectSchema } from './ServerOrderByRelationAggregateInput.schema';
import { TicketOrderByRelationAggregateInputObjectSchema as TicketOrderByRelationAggregateInputObjectSchema } from './TicketOrderByRelationAggregateInput.schema';
import { TicketMessageOrderByRelationAggregateInputObjectSchema as TicketMessageOrderByRelationAggregateInputObjectSchema } from './TicketMessageOrderByRelationAggregateInput.schema';
import { AccountOrderByRelationAggregateInputObjectSchema as AccountOrderByRelationAggregateInputObjectSchema } from './AccountOrderByRelationAggregateInput.schema';
import { BillingAddressOrderByWithRelationInputObjectSchema as BillingAddressOrderByWithRelationInputObjectSchema } from './BillingAddressOrderByWithRelationInput.schema';
import { SessionOrderByRelationAggregateInputObjectSchema as SessionOrderByRelationAggregateInputObjectSchema } from './SessionOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  emailVerified: SortOrderSchema.optional(),
  image: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  banExpires: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  banReason: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  banned: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  displayUsername: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  firstname: SortOrderSchema.optional(),
  lastname: SortOrderSchema.optional(),
  role: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  username: SortOrderSchema.optional(),
  clientId: SortOrderSchema.optional(),
  pteroUserId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  cart: z.lazy(() => CartOrderByWithRelationInputObjectSchema).optional(),
  notifications: z.lazy(() => NotificationOrderByRelationAggregateInputObjectSchema).optional(),
  orders: z.lazy(() => OrderOrderByRelationAggregateInputObjectSchema).optional(),
  servers: z.lazy(() => ServerOrderByRelationAggregateInputObjectSchema).optional(),
  assignedTickets: z.lazy(() => TicketOrderByRelationAggregateInputObjectSchema).optional(),
  tickets: z.lazy(() => TicketOrderByRelationAggregateInputObjectSchema).optional(),
  ticketMessages: z.lazy(() => TicketMessageOrderByRelationAggregateInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountOrderByRelationAggregateInputObjectSchema).optional(),
  billingAddress: z.lazy(() => BillingAddressOrderByWithRelationInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const UserOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserOrderByWithRelationInput>;
export const UserOrderByWithRelationInputObjectZodSchema = makeSchema();
