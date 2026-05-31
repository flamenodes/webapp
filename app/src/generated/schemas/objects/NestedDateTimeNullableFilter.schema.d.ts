import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const NestedDateTimeNullableFilterObjectSchema: z.ZodType<Prisma.NestedDateTimeNullableFilter>;
export declare const NestedDateTimeNullableFilterObjectZodSchema: z.ZodObject<{
    equals: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    in: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString>>>;
    notIn: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString>>>;
    lt: z.ZodOptional<z.ZodString>;
    lte: z.ZodOptional<z.ZodString>;
    gt: z.ZodOptional<z.ZodString>;
    gte: z.ZodOptional<z.ZodString>;
    not: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.NestedDateTimeNullableFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedDateTimeNullableFilter<never>, unknown>>>]>>>;
}, z.core.$strict>;
//# sourceMappingURL=NestedDateTimeNullableFilter.schema.d.ts.map