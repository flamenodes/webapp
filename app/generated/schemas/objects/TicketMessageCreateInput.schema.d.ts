import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketMessageCreateInputObjectSchema: z.ZodType<Prisma.TicketMessageCreateInput>;
export declare const TicketMessageCreateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    senderRole: z.ZodEnum<{
        USER: "USER";
        SUPPORT: "SUPPORT";
        ADMIN: "ADMIN";
    }>;
    content: z.ZodString;
    attachments: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        JsonNull: "JsonNull";
        DbNull: "DbNull";
    }>, z.ZodType<import("../../helpers/json-helpers").JsonValue, unknown, z.core.$ZodTypeInternals<import("../../helpers/json-helpers").JsonValue, unknown>>]>>;
    createdAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    ticket: z.ZodLazy<z.ZodType<Prisma.TicketCreateNestedOneWithoutMessagesInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCreateNestedOneWithoutMessagesInput, unknown>>>;
    sender: z.ZodLazy<z.ZodType<Prisma.UserCreateNestedOneWithoutTicketMessagesInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateNestedOneWithoutTicketMessagesInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=TicketMessageCreateInput.schema.d.ts.map