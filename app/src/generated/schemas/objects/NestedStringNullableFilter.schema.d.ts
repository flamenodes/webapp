import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const NestedStringNullableFilterObjectSchema: z.ZodType<Prisma.NestedStringNullableFilter>;
export declare const NestedStringNullableFilterObjectZodSchema: z.ZodObject<{
    equals: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    in: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString>>>;
    notIn: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString>>>;
    lt: z.ZodOptional<z.ZodString>;
    lte: z.ZodOptional<z.ZodString>;
    gt: z.ZodOptional<z.ZodString>;
    gte: z.ZodOptional<z.ZodString>;
    contains: z.ZodOptional<z.ZodString>;
    startsWith: z.ZodOptional<z.ZodString>;
    endsWith: z.ZodOptional<z.ZodString>;
    not: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.NestedStringNullableFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedStringNullableFilter<never>, unknown>>>]>>>;
}, z.core.$strict>;
//# sourceMappingURL=NestedStringNullableFilter.schema.d.ts.map