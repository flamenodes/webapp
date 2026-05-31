import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ConfigurationValueCreateManyOptionInputObjectSchema: z.ZodType<Prisma.ConfigurationValueCreateManyOptionInput>;
export declare const ConfigurationValueCreateManyOptionInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    label: z.ZodString;
    value: z.ZodString;
    description: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    priceModifier: z.ZodOptional<z.ZodNumber>;
    metadata: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        JsonNull: "JsonNull";
        DbNull: "DbNull";
    }>, z.ZodType<import("../../helpers/json-helpers").JsonValue, unknown, z.core.$ZodTypeInternals<import("../../helpers/json-helpers").JsonValue, unknown>>]>>;
    sortOrder: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    updatedAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=ConfigurationValueCreateManyOptionInput.schema.d.ts.map