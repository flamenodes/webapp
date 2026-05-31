import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketMessageUpdateInputObjectSchema: z.ZodType<Prisma.TicketMessageUpdateInput>;
export declare const TicketMessageUpdateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.StringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.StringFieldUpdateOperationsInput, unknown>>>]>>;
    senderRole: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        USER: "USER";
        SUPPORT: "SUPPORT";
        ADMIN: "ADMIN";
    }>, z.ZodLazy<z.ZodType<Prisma.EnumSenderRoleFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.EnumSenderRoleFieldUpdateOperationsInput, unknown>>>]>>;
    content: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.StringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.StringFieldUpdateOperationsInput, unknown>>>]>>;
    attachments: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        JsonNull: "JsonNull";
        DbNull: "DbNull";
    }>, z.ZodType<import("../../helpers/json-helpers").JsonValue, unknown, z.core.$ZodTypeInternals<import("../../helpers/json-helpers").JsonValue, unknown>>]>>;
    createdAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodCoercedDate<unknown>, z.ZodLazy<z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeFieldUpdateOperationsInput, unknown>>>]>>;
    ticket: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.TicketUpdateOneRequiredWithoutMessagesNestedInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketUpdateOneRequiredWithoutMessagesNestedInput, unknown>>>>;
    sender: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserUpdateOneRequiredWithoutTicketMessagesNestedInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUpdateOneRequiredWithoutTicketMessagesNestedInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=TicketMessageUpdateInput.schema.d.ts.map