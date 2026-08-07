import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { UserIncludeObjectSchema as UserIncludeObjectSchema } from './objects/UserInclude.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './objects/UserOrderByWithRelationInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './objects/UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './objects/UserWhereUniqueInput.schema';
import { UserScalarFieldEnumSchema } from './enums/UserScalarFieldEnum.schema';
import { SessionFindManySchema } from './findManySession.schema';
import { AccountFindManySchema } from './findManyAccount.schema';
import { ServerFindManySchema } from './findManyServer.schema';
import { CartArgsObjectSchema as CartArgsObjectSchema } from './objects/CartArgs.schema';
import { OrderFindManySchema } from './findManyOrder.schema';
import { TicketFindManySchema } from './findManyTicket.schema';
import { TicketMessageFindManySchema } from './findManyTicketMessage.schema';
import { NotificationFindManySchema } from './findManyNotification.schema';
import { UserCountOutputTypeArgsObjectSchema as UserCountOutputTypeArgsObjectSchema } from './objects/UserCountOutputTypeArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserFindManySelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
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
  }).strict() as unknown as z.ZodType<Prisma.UserSelect>;

export const UserFindManySelectZodSchema = z.object({
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

export const UserFindManySchema: z.ZodType<Prisma.UserFindManyArgs> = z.object({ select: UserFindManySelectSchema.optional(), include: z.lazy(() => UserIncludeObjectSchema.optional()), orderBy: z.union([UserOrderByWithRelationInputObjectSchema, UserOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserWhereInputObjectSchema.optional(), cursor: UserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.UserFindManyArgs>;

export const UserFindManyZodSchema = z.object({ select: UserFindManySelectSchema.optional(), include: z.lazy(() => UserIncludeObjectSchema.optional()), orderBy: z.union([UserOrderByWithRelationInputObjectSchema, UserOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserWhereInputObjectSchema.optional(), cursor: UserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()]).optional() }).strict();