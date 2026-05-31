import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const TicketMessageGroupBySchema: z.ZodType<Prisma.TicketMessageGroupByArgs>;
export declare const TicketMessageGroupByZodSchema: z.ZodObject<{
    where: z.ZodOptional<z.ZodType<Prisma.TicketMessageWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageWhereInput, unknown>>>;
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.TicketMessageOrderByWithAggregationInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageOrderByWithAggregationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.TicketMessageOrderByWithAggregationInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageOrderByWithAggregationInput, unknown>>>]>>;
    having: z.ZodOptional<z.ZodType<Prisma.TicketMessageScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageScalarWhereWithAggregatesInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    by: z.ZodArray<z.ZodEnum<{
        id: "id";
        createdAt: "createdAt";
        ticketId: "ticketId";
        senderId: "senderId";
        senderRole: "senderRole";
        content: "content";
        attachments: "attachments";
    }>>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.TicketMessageCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageCountAggregateInputType, unknown>>]>>;
    _min: z.ZodOptional<z.ZodType<Prisma.TicketMessageMinAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageMinAggregateInputType, unknown>>>;
    _max: z.ZodOptional<z.ZodType<Prisma.TicketMessageMaxAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageMaxAggregateInputType, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=groupByTicketMessage.schema.d.ts.map