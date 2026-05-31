import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const UserOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.UserOrderByWithRelationInput>;
export declare const UserOrderByWithRelationInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    clientId: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    name: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    email: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    emailVerified: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    image: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>, z.ZodLazy<z.ZodType<Prisma.SortOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.SortOrderInput, unknown>>>]>>;
    createdAt: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    updatedAt: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    role: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>, z.ZodLazy<z.ZodType<Prisma.SortOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.SortOrderInput, unknown>>>]>>;
    banned: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>, z.ZodLazy<z.ZodType<Prisma.SortOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.SortOrderInput, unknown>>>]>>;
    banReason: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>, z.ZodLazy<z.ZodType<Prisma.SortOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.SortOrderInput, unknown>>>]>>;
    banExpires: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>, z.ZodLazy<z.ZodType<Prisma.SortOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.SortOrderInput, unknown>>>]>>;
    username: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    firstname: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    lastname: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    pteroUserId: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>, z.ZodLazy<z.ZodType<Prisma.SortOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.SortOrderInput, unknown>>>]>>;
    address: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>, z.ZodLazy<z.ZodType<Prisma.SortOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.SortOrderInput, unknown>>>]>>;
    city: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>, z.ZodLazy<z.ZodType<Prisma.SortOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.SortOrderInput, unknown>>>]>>;
    zip: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>, z.ZodLazy<z.ZodType<Prisma.SortOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.SortOrderInput, unknown>>>]>>;
    country: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>, z.ZodLazy<z.ZodType<Prisma.SortOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.SortOrderInput, unknown>>>]>>;
    displayUsername: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>, z.ZodLazy<z.ZodType<Prisma.SortOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.SortOrderInput, unknown>>>]>>;
    sessions: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.SessionOrderByRelationAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.SessionOrderByRelationAggregateInput, unknown>>>>;
    accounts: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.AccountOrderByRelationAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountOrderByRelationAggregateInput, unknown>>>>;
    servers: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ServerOrderByRelationAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerOrderByRelationAggregateInput, unknown>>>>;
    cart: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.CartOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.CartOrderByWithRelationInput, unknown>>>>;
    orders: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.OrderOrderByRelationAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderOrderByRelationAggregateInput, unknown>>>>;
    tickets: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.TicketOrderByRelationAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketOrderByRelationAggregateInput, unknown>>>>;
    assignedTickets: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.TicketOrderByRelationAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketOrderByRelationAggregateInput, unknown>>>>;
    ticketMessages: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.TicketMessageOrderByRelationAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageOrderByRelationAggregateInput, unknown>>>>;
    notifications: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NotificationOrderByRelationAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.NotificationOrderByRelationAggregateInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=UserOrderByWithRelationInput.schema.d.ts.map