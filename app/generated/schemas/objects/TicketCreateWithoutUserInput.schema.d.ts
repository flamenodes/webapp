import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.TicketCreateWithoutUserInput>;
export declare const TicketCreateWithoutUserInputObjectZodSchema: z.ZodObject<{
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
    channelName: z.ZodString;
    tags: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.TicketCreatetagsInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCreatetagsInput, unknown>>>, z.ZodArray<z.ZodString>]>>;
    createdAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    updatedAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    closedAt: z.ZodNullable<z.ZodOptional<z.ZodCoercedDate<unknown>>>;
    assignedTo: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserCreateNestedOneWithoutAssignedTicketsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateNestedOneWithoutAssignedTicketsInput, unknown>>>>;
    messages: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.TicketMessageCreateNestedManyWithoutTicketInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageCreateNestedManyWithoutTicketInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=TicketCreateWithoutUserInput.schema.d.ts.map