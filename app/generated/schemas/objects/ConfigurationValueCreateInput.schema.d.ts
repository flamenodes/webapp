import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ConfigurationValueCreateInputObjectSchema: z.ZodType<Prisma.ConfigurationValueCreateInput>;
export declare const ConfigurationValueCreateInputObjectZodSchema: z.ZodObject<{
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
    option: z.ZodLazy<z.ZodType<Prisma.ConfigurationOptionCreateNestedOneWithoutValuesInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionCreateNestedOneWithoutValuesInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=ConfigurationValueCreateInput.schema.d.ts.map