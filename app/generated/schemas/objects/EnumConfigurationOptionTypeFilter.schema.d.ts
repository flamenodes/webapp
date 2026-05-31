import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const EnumConfigurationOptionTypeFilterObjectSchema: z.ZodType<Prisma.EnumConfigurationOptionTypeFilter>;
export declare const EnumConfigurationOptionTypeFilterObjectZodSchema: z.ZodObject<{
    equals: z.ZodOptional<z.ZodEnum<{
        SELECT: "SELECT";
        RADIO: "RADIO";
        TEXT: "TEXT";
        NUMBER: "NUMBER";
    }>>;
    in: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        SELECT: "SELECT";
        RADIO: "RADIO";
        TEXT: "TEXT";
        NUMBER: "NUMBER";
    }>>>;
    notIn: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        SELECT: "SELECT";
        RADIO: "RADIO";
        TEXT: "TEXT";
        NUMBER: "NUMBER";
    }>>>;
    not: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        SELECT: "SELECT";
        RADIO: "RADIO";
        TEXT: "TEXT";
        NUMBER: "NUMBER";
    }>, z.ZodLazy<z.ZodType<Prisma.NestedEnumConfigurationOptionTypeFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedEnumConfigurationOptionTypeFilter<never>, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=EnumConfigurationOptionTypeFilter.schema.d.ts.map