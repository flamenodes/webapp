import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const FloatNullableFilterObjectSchema: z.ZodType<Prisma.FloatNullableFilter>;
export declare const FloatNullableFilterObjectZodSchema: z.ZodObject<{
    equals: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    in: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodNumber>>>;
    notIn: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodNumber>>>;
    lt: z.ZodOptional<z.ZodNumber>;
    lte: z.ZodOptional<z.ZodNumber>;
    gt: z.ZodOptional<z.ZodNumber>;
    gte: z.ZodOptional<z.ZodNumber>;
    not: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodLazy<z.ZodType<Prisma.NestedFloatNullableFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedFloatNullableFilter<never>, unknown>>>]>>>;
}, z.core.$strict>;
//# sourceMappingURL=FloatNullableFilter.schema.d.ts.map