import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { UserIncludeObjectSchema as UserIncludeObjectSchema } from './objects/UserInclude.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './objects/UserOrderByWithRelationInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './objects/UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './objects/UserWhereUniqueInput.schema';
import { UserScalarFieldEnumSchema } from './enums/UserScalarFieldEnum.schema';
import { CartArgsObjectSchema as CartArgsObjectSchema } from './objects/CartArgs.schema';
import { NotificationFindManySchema } from './findManyNotification.schema';
import { OrderFindManySchema } from './findManyOrder.schema';
import { ServerFindManySchema } from './findManyServer.schema';
import { TicketFindManySchema } from './findManyTicket.schema';
import { TicketMessageFindManySchema } from './findManyTicketMessage.schema';
import { AccountFindManySchema } from './findManyAccount.schema';
import { BillingAddressArgsObjectSchema as BillingAddressArgsObjectSchema } from './objects/BillingAddressArgs.schema';
import { SessionFindManySchema } from './findManySession.schema';
import { UserCountOutputTypeArgsObjectSchema as UserCountOutputTypeArgsObjectSchema } from './objects/UserCountOutputTypeArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserFindFirstSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
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
  }).strict() as unknown as z.ZodType<Prisma.UserSelect>;

export const UserFindFirstSelectZodSchema = z.object({
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

export const UserFindFirstSchema: z.ZodType<Prisma.UserFindFirstArgs> = z.object({ select: UserFindFirstSelectSchema.optional(), include: z.lazy(() => UserIncludeObjectSchema.optional()), orderBy: z.union([UserOrderByWithRelationInputObjectSchema, UserOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserWhereInputObjectSchema.optional(), cursor: UserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.UserFindFirstArgs>;

export const UserFindFirstZodSchema = z.object({ select: UserFindFirstSelectSchema.optional(), include: z.lazy(() => UserIncludeObjectSchema.optional()), orderBy: z.union([UserOrderByWithRelationInputObjectSchema, UserOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserWhereInputObjectSchema.optional(), cursor: UserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()]).optional() }).strict();