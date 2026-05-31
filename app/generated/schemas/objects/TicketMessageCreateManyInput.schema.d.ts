import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketMessageCreateManyInputObjectSchema: z.ZodType<Prisma.TicketMessageCreateManyInput>;
export declare const TicketMessageCreateManyInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    ticketId: z.ZodString;
    senderId: z.ZodString;
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
//# sourceMappingURL=TicketMessageCreateManyInput.schema.d.ts.map