import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketMessageOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.TicketMessageOrderByWithAggregationInput>;
export declare const TicketMessageOrderByWithAggregationInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    ticketId: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    senderId: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    senderRole: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    content: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    attachments: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>, z.ZodLazy<z.ZodType<Prisma.SortOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.SortOrderInput, unknown>>>]>>;
    createdAt: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    _count: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.TicketMessageCountOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageCountOrderByAggregateInput, unknown>>>>;
    _max: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.TicketMessageMaxOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageMaxOrderByAggregateInput, unknown>>>>;
    _min: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.TicketMessageMinOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageMinOrderByAggregateInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=TicketMessageOrderByWithAggregationInput.schema.d.ts.map