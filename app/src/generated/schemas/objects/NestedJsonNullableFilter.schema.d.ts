import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const NestedJsonNullableFilterObjectSchema: z.ZodType<Prisma.NestedJsonNullableFilter>;
export declare const NestedJsonNullableFilterObjectZodSchema: z.ZodObject<{
    equals: z.ZodOptional<z.ZodType<import("../../helpers/json-helpers").JsonValue, unknown, z.core.$ZodTypeInternals<import("../../helpers/json-helpers").JsonValue, unknown>>>;
    path: z.ZodOptional<z.ZodArray<z.ZodString>>;
    mode: z.ZodOptional<z.ZodEnum<{
        default: "default";
        insensitive: "insensitive";
    }>>;
    string_contains: z.ZodOptional<z.ZodString>;
    string_starts_with: z.ZodOptional<z.ZodString>;
    string_ends_with: z.ZodOptional<z.ZodString>;
    array_starts_with: z.ZodNullable<z.ZodOptional<z.ZodType<import("../../helpers/json-helpers").JsonValue, unknown, z.core.$ZodTypeInternals<import("../../helpers/json-helpers").JsonValue, unknown>>>>;
    array_ends_with: z.ZodNullable<z.ZodOptional<z.ZodType<import("../../helpers/json-helpers").JsonValue, unknown, z.core.$ZodTypeInternals<import("../../helpers/json-helpers").JsonValue, unknown>>>>;
    array_contains: z.ZodNullable<z.ZodOptional<z.ZodType<import("../../helpers/json-helpers").JsonValue, unknown, z.core.$ZodTypeInternals<import("../../helpers/json-helpers").JsonValue, unknown>>>>;
    lt: z.ZodOptional<z.ZodType<import("../../helpers/json-helpers").JsonValue, unknown, z.core.$ZodTypeInternals<import("../../helpers/json-helpers").JsonValue, unknown>>>;
    lte: z.ZodOptional<z.ZodType<import("../../helpers/json-helpers").JsonValue, unknown, z.core.$ZodTypeInternals<import("../../helpers/json-helpers").JsonValue, unknown>>>;
    gt: z.ZodOptional<z.ZodType<import("../../helpers/json-helpers").JsonValue, unknown, z.core.$ZodTypeInternals<import("../../helpers/json-helpers").JsonValue, unknown>>>;
    gte: z.ZodOptional<z.ZodType<import("../../helpers/json-helpers").JsonValue, unknown, z.core.$ZodTypeInternals<import("../../helpers/json-helpers").JsonValue, unknown>>>;
    not: z.ZodOptional<z.ZodType<import("../../helpers/json-helpers").JsonValue, unknown, z.core.$ZodTypeInternals<import("../../helpers/json-helpers").JsonValue, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=NestedJsonNullableFilter.schema.d.ts.map