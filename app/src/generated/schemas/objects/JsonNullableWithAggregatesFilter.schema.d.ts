import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const JsonNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.JsonNullableWithAggregatesFilter>;
export declare const JsonNullableWithAggregatesFilterObjectZodSchema: z.ZodObject<{
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
    _count: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedIntNullableFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedIntNullableFilter<never>, unknown>>>>;
    _min: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedJsonNullableFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedJsonNullableFilter<never>, unknown>>>>;
    _max: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedJsonNullableFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedJsonNullableFilter<never>, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=JsonNullableWithAggregatesFilter.schema.d.ts.map