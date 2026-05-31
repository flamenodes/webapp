import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.TicketScalarWhereWithAggregatesInput>;
export declare const TicketScalarWhereWithAggregatesInputObjectZodSchema: z.ZodObject<{
    AND: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.TicketScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketScalarWhereWithAggregatesInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.TicketScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketScalarWhereWithAggregatesInput, unknown>>>>]>>;
    OR: z.ZodOptional<z.ZodArray<z.ZodLazy<z.ZodType<Prisma.TicketScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketScalarWhereWithAggregatesInput, unknown>>>>>;
    NOT: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.TicketScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketScalarWhereWithAggregatesInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.TicketScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketScalarWhereWithAggregatesInput, unknown>>>>]>>;
    id: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringWithAggregatesFilter<never>, unknown>>>, z.ZodString]>>;
    ticketId: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringWithAggregatesFilter<never>, unknown>>>, z.ZodString]>>;
    title: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringWithAggregatesFilter<never>, unknown>>>, z.ZodString]>>;
    description: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringWithAggregatesFilter<never>, unknown>>>, z.ZodString]>>;
    status: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.EnumTicketStatusWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.EnumTicketStatusWithAggregatesFilter<never>, unknown>>>, z.ZodEnum<{
        PENDING: "PENDING";
        OPEN: "OPEN";
        IN_PROGRESS: "IN_PROGRESS";
        RESOLVED: "RESOLVED";
        CLOSED: "CLOSED";
    }>]>>;
    priority: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.EnumTicketPriorityWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.EnumTicketPriorityWithAggregatesFilter<never>, unknown>>>, z.ZodEnum<{
        LOW: "LOW";
        MEDIUM: "MEDIUM";
        HIGH: "HIGH";
        URGENT: "URGENT";
    }>]>>;
    userId: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringWithAggregatesFilter<never>, unknown>>>, z.ZodString]>>;
    assignedToId: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringNullableWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringNullableWithAggregatesFilter<never>, unknown>>>, z.ZodString]>>>;
    channelName: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringWithAggregatesFilter<never>, unknown>>>, z.ZodString]>>;
    tags: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.StringNullableListFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringNullableListFilter<never>, unknown>>>>;
    createdAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.DateTimeWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeWithAggregatesFilter<never>, unknown>>>, z.ZodCoercedDate<unknown>]>>;
    updatedAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.DateTimeWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeWithAggregatesFilter<never>, unknown>>>, z.ZodCoercedDate<unknown>]>>;
    closedAt: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.DateTimeNullableWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeNullableWithAggregatesFilter<never>, unknown>>>, z.ZodCoercedDate<unknown>]>>>;
}, z.core.$strict>;
//# sourceMappingURL=TicketScalarWhereWithAggregatesInput.schema.d.ts.map