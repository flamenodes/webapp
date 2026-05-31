import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketUncheckedUpdateWithoutAssignedToInputObjectSchema: z.ZodType<Prisma.TicketUncheckedUpdateWithoutAssignedToInput>;
export declare const TicketUncheckedUpdateWithoutAssignedToInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.StringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.StringFieldUpdateOperationsInput, unknown>>>]>>;
    ticketId: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.StringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.StringFieldUpdateOperationsInput, unknown>>>]>>;
    title: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.StringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.StringFieldUpdateOperationsInput, unknown>>>]>>;
    description: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.StringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.StringFieldUpdateOperationsInput, unknown>>>]>>;
    status: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        PENDING: "PENDING";
        OPEN: "OPEN";
        IN_PROGRESS: "IN_PROGRESS";
        RESOLVED: "RESOLVED";
        CLOSED: "CLOSED";
    }>, z.ZodLazy<z.ZodType<Prisma.EnumTicketStatusFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.EnumTicketStatusFieldUpdateOperationsInput, unknown>>>]>>;
    priority: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        LOW: "LOW";
        MEDIUM: "MEDIUM";
        HIGH: "HIGH";
        URGENT: "URGENT";
    }>, z.ZodLazy<z.ZodType<Prisma.EnumTicketPriorityFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.EnumTicketPriorityFieldUpdateOperationsInput, unknown>>>]>>;
    userId: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.StringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.StringFieldUpdateOperationsInput, unknown>>>]>>;
    channelName: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.StringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.StringFieldUpdateOperationsInput, unknown>>>]>>;
    tags: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.TicketUpdatetagsInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketUpdatetagsInput, unknown>>>, z.ZodArray<z.ZodString>]>>;
    createdAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodCoercedDate<unknown>, z.ZodLazy<z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeFieldUpdateOperationsInput, unknown>>>]>>;
    updatedAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodCoercedDate<unknown>, z.ZodLazy<z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeFieldUpdateOperationsInput, unknown>>>]>>;
    closedAt: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodCoercedDate<unknown>, z.ZodLazy<z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.NullableDateTimeFieldUpdateOperationsInput, unknown>>>]>>>;
    messages: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.TicketMessageUncheckedUpdateManyWithoutTicketNestedInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageUncheckedUpdateManyWithoutTicketNestedInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=TicketUncheckedUpdateWithoutAssignedToInput.schema.d.ts.map