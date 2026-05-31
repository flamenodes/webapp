import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketMessageOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.TicketMessageOrderByWithRelationInput>;
export declare const TicketMessageOrderByWithRelationInputObjectZodSchema: z.ZodObject<{
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
    ticket: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.TicketOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketOrderByWithRelationInput, unknown>>>>;
    sender: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.UserOrderByWithRelationInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=TicketMessageOrderByWithRelationInput.schema.d.ts.map