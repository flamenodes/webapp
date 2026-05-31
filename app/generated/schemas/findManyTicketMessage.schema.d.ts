import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const TicketMessageFindManySelectSchema: z.ZodType<Prisma.TicketMessageSelect>;
export declare const TicketMessageFindManySelectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodBoolean>;
    ticketId: z.ZodOptional<z.ZodBoolean>;
    ticket: z.ZodOptional<z.ZodBoolean>;
    senderId: z.ZodOptional<z.ZodBoolean>;
    sender: z.ZodOptional<z.ZodBoolean>;
    senderRole: z.ZodOptional<z.ZodBoolean>;
    content: z.ZodOptional<z.ZodBoolean>;
    attachments: z.ZodOptional<z.ZodBoolean>;
    createdAt: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
export declare const TicketMessageFindManySchema: z.ZodType<Prisma.TicketMessageFindManyArgs>;
export declare const TicketMessageFindManyZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.TicketMessageSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodLazy<z.ZodOptional<z.ZodType<Prisma.TicketMessageInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.TicketMessageOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.TicketMessageOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.TicketMessageWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.TicketMessageWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    distinct: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        id: "id";
        createdAt: "createdAt";
        ticketId: "ticketId";
        senderId: "senderId";
        senderRole: "senderRole";
        content: "content";
        attachments: "attachments";
    }>, z.ZodArray<z.ZodEnum<{
        id: "id";
        createdAt: "createdAt";
        ticketId: "ticketId";
        senderId: "senderId";
        senderRole: "senderRole";
        content: "content";
        attachments: "attachments";
    }>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=findManyTicketMessage.schema.d.ts.map