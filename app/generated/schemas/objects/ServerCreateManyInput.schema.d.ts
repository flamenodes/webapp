import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ServerCreateManyInputObjectSchema: z.ZodType<Prisma.ServerCreateManyInput>;
export declare const ServerCreateManyInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    userId: z.ZodString;
    orderItemId: z.ZodString;
    name: z.ZodString;
    type: z.ZodString;
    status: z.ZodString;
    ip: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    port: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    expiresAt: z.ZodNullable<z.ZodOptional<z.ZodCoercedDate<unknown>>>;
    resources: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        JsonNull: "JsonNull";
        DbNull: "DbNull";
    }>, z.ZodType<import("../../helpers/json-helpers").JsonValue, unknown, z.core.$ZodTypeInternals<import("../../helpers/json-helpers").JsonValue, unknown>>]>>;
    pterodactylData: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        JsonNull: "JsonNull";
        DbNull: "DbNull";
    }>, z.ZodType<import("../../helpers/json-helpers").JsonValue, unknown, z.core.$ZodTypeInternals<import("../../helpers/json-helpers").JsonValue, unknown>>]>>;
    suspended: z.ZodOptional<z.ZodBoolean>;
    createdAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    updatedAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=ServerCreateManyInput.schema.d.ts.map