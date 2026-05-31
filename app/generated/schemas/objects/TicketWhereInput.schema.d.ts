import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketWhereInputObjectSchema: z.ZodType<Prisma.TicketWhereInput>;
export declare const TicketWhereInputObjectZodSchema: z.ZodObject<{
    AND: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.TicketWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketWhereInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.TicketWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketWhereInput, unknown>>>>]>>;
    OR: z.ZodOptional<z.ZodArray<z.ZodLazy<z.ZodType<Prisma.TicketWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketWhereInput, unknown>>>>>;
    NOT: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.TicketWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketWhereInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.TicketWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketWhereInput, unknown>>>>]>>;
    id: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringFilter<never>, unknown>>>, z.ZodString]>>;
    ticketId: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringFilter<never>, unknown>>>, z.ZodString]>>;
    title: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringFilter<never>, unknown>>>, z.ZodString]>>;
    description: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringFilter<never>, unknown>>>, z.ZodString]>>;
    status: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.EnumTicketStatusFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.EnumTicketStatusFilter<never>, unknown>>>, z.ZodEnum<{
        PENDING: "PENDING";
        OPEN: "OPEN";
        IN_PROGRESS: "IN_PROGRESS";
        RESOLVED: "RESOLVED";
        CLOSED: "CLOSED";
    }>]>>;
    priority: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.EnumTicketPriorityFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.EnumTicketPriorityFilter<never>, unknown>>>, z.ZodEnum<{
        LOW: "LOW";
        MEDIUM: "MEDIUM";
        HIGH: "HIGH";
        URGENT: "URGENT";
    }>]>>;
    userId: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringFilter<never>, unknown>>>, z.ZodString]>>;
    assignedToId: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringNullableFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringNullableFilter<never>, unknown>>>, z.ZodString]>>>;
    channelName: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringFilter<never>, unknown>>>, z.ZodString]>>;
    tags: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.StringNullableListFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringNullableListFilter<never>, unknown>>>>;
    createdAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.DateTimeFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeFilter<never>, unknown>>>, z.ZodCoercedDate<unknown>]>>;
    updatedAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.DateTimeFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeFilter<never>, unknown>>>, z.ZodCoercedDate<unknown>]>>;
    closedAt: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.DateTimeNullableFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeNullableFilter<never>, unknown>>>, z.ZodCoercedDate<unknown>]>>>;
    user: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserScalarRelationFilter, unknown, z.core.$ZodTypeInternals<Prisma.UserScalarRelationFilter, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereInput, unknown>>>]>>;
    assignedTo: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserNullableScalarRelationFilter, unknown, z.core.$ZodTypeInternals<Prisma.UserNullableScalarRelationFilter, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereInput, unknown>>>]>>;
    messages: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.TicketMessageListRelationFilter, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageListRelationFilter, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=TicketWhereInput.schema.d.ts.map