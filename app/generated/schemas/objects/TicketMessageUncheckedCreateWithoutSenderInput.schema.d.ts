import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketMessageUncheckedCreateWithoutSenderInputObjectSchema: z.ZodType<Prisma.TicketMessageUncheckedCreateWithoutSenderInput>;
export declare const TicketMessageUncheckedCreateWithoutSenderInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    ticketId: z.ZodString;
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
}, z.core.$strict>;
//# sourceMappingURL=TicketMessageUncheckedCreateWithoutSenderInput.schema.d.ts.map