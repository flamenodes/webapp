import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.TicketOrderByWithRelationInput>;
export declare const TicketOrderByWithRelationInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    ticketId: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    title: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    description: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    status: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    priority: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    userId: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    assignedToId: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>, z.ZodLazy<z.ZodType<Prisma.SortOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.SortOrderInput, unknown>>>]>>;
    channelName: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    tags: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    createdAt: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    updatedAt: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    closedAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>, z.ZodLazy<z.ZodType<Prisma.SortOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.SortOrderInput, unknown>>>]>>;
    user: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.UserOrderByWithRelationInput, unknown>>>>;
    assignedTo: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.UserOrderByWithRelationInput, unknown>>>>;
    messages: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.TicketMessageOrderByRelationAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageOrderByRelationAggregateInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=TicketOrderByWithRelationInput.schema.d.ts.map