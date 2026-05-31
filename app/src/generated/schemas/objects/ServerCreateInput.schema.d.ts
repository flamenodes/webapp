import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const ServerCreateInputObjectSchema: z.ZodType<Prisma.ServerCreateInput>;
export declare const ServerCreateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    type: z.ZodString;
    status: z.ZodString;
    ip: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    port: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    expiresAt: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    resources: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        JsonNull: "JsonNull";
        DbNull: "DbNull";
    }>, z.ZodType<import("../../helpers/json-helpers").JsonValue, unknown, z.core.$ZodTypeInternals<import("../../helpers/json-helpers").JsonValue, unknown>>]>>;
    pterodactylData: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        JsonNull: "JsonNull";
        DbNull: "DbNull";
    }>, z.ZodType<import("../../helpers/json-helpers").JsonValue, unknown, z.core.$ZodTypeInternals<import("../../helpers/json-helpers").JsonValue, unknown>>]>>;
    suspended: z.ZodOptional<z.ZodBoolean>;
    createdAt: z.ZodOptional<z.ZodString>;
    user: z.ZodLazy<z.ZodType<Prisma.UserCreateNestedOneWithoutServersInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateNestedOneWithoutServersInput, unknown>>>;
    orderItem: z.ZodLazy<z.ZodType<Prisma.OrderItemCreateNestedOneWithoutServerInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemCreateNestedOneWithoutServerInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=ServerCreateInput.schema.d.ts.map