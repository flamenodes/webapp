import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketMessageCreateWithoutTicketInputObjectSchema: z.ZodType<Prisma.TicketMessageCreateWithoutTicketInput>;
export declare const TicketMessageCreateWithoutTicketInputObjectZodSchema: z.ZodObject<{
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
    sender: z.ZodLazy<z.ZodType<Prisma.UserCreateNestedOneWithoutTicketMessagesInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateNestedOneWithoutTicketMessagesInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=TicketMessageCreateWithoutTicketInput.schema.d.ts.map