import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const NestedDateTimeNullableFilterObjectSchema: z.ZodType<Prisma.NestedDateTimeNullableFilter>;
export declare const NestedDateTimeNullableFilterObjectZodSchema: z.ZodObject<{
    equals: z.ZodNullable<z.ZodOptional<z.ZodDate>>;
    in: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodArray<z.ZodDate>, z.ZodArray<z.ZodString>]>>>;
    notIn: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodArray<z.ZodDate>, z.ZodArray<z.ZodString>]>>>;
    lt: z.ZodOptional<z.ZodDate>;
    lte: z.ZodOptional<z.ZodDate>;
    gt: z.ZodOptional<z.ZodDate>;
    gte: z.ZodOptional<z.ZodDate>;
    not: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodDate, z.ZodLazy<z.ZodType<Prisma.NestedDateTimeNullableFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedDateTimeNullableFilter<never>, unknown>>>]>>>;
}, z.core.$strict>;
//# sourceMappingURL=NestedDateTimeNullableFilter.schema.d.ts.map