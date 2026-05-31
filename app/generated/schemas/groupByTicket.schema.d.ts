import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const TicketGroupBySchema: z.ZodType<Prisma.TicketGroupByArgs>;
export declare const TicketGroupByZodSchema: z.ZodObject<{
    where: z.ZodOptional<z.ZodType<Prisma.TicketWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketWhereInput, unknown>>>;
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.TicketOrderByWithAggregationInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketOrderByWithAggregationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.TicketOrderByWithAggregationInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketOrderByWithAggregationInput, unknown>>>]>>;
    having: z.ZodOptional<z.ZodType<Prisma.TicketScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketScalarWhereWithAggregatesInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    by: z.ZodArray<z.ZodEnum<{
        id: "id";
        title: "title";
        description: "description";
        createdAt: "createdAt";
        userId: "userId";
        status: "status";
        updatedAt: "updatedAt";
        ticketId: "ticketId";
        priority: "priority";
        assignedToId: "assignedToId";
        channelName: "channelName";
        tags: "tags";
        closedAt: "closedAt";
    }>>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.TicketCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.TicketCountAggregateInputType, unknown>>]>>;
    _min: z.ZodOptional<z.ZodType<Prisma.TicketMinAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.TicketMinAggregateInputType, unknown>>>;
    _max: z.ZodOptional<z.ZodType<Prisma.TicketMaxAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.TicketMaxAggregateInputType, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=groupByTicket.schema.d.ts.map