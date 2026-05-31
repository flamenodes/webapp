import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketUncheckedCreateInputObjectSchema: z.ZodType<Prisma.TicketUncheckedCreateInput>;
export declare const TicketUncheckedCreateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    ticketId: z.ZodString;
    title: z.ZodString;
    description: z.ZodString;
    status: z.ZodOptional<z.ZodEnum<{
        PENDING: "PENDING";
        OPEN: "OPEN";
        IN_PROGRESS: "IN_PROGRESS";
        RESOLVED: "RESOLVED";
        CLOSED: "CLOSED";
    }>>;
    priority: z.ZodOptional<z.ZodEnum<{
        LOW: "LOW";
        MEDIUM: "MEDIUM";
        HIGH: "HIGH";
        URGENT: "URGENT";
    }>>;
    userId: z.ZodString;
    assignedToId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    channelName: z.ZodString;
    tags: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.TicketCreatetagsInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCreatetagsInput, unknown>>>, z.ZodArray<z.ZodString>]>>;
    createdAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    closedAt: z.ZodNullable<z.ZodOptional<z.ZodCoercedDate<unknown>>>;
    messages: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.TicketMessageUncheckedCreateNestedManyWithoutTicketInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageUncheckedCreateNestedManyWithoutTicketInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=TicketUncheckedCreateInput.schema.d.ts.map