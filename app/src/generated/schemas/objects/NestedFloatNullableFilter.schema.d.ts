import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const NestedFloatNullableFilterObjectSchema: z.ZodType<Prisma.NestedFloatNullableFilter>;
export declare const NestedFloatNullableFilterObjectZodSchema: z.ZodObject<{
    equals: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    in: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodNumber>>>;
    notIn: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodNumber>>>;
    lt: z.ZodOptional<z.ZodNumber>;
    lte: z.ZodOptional<z.ZodNumber>;
    gt: z.ZodOptional<z.ZodNumber>;
    gte: z.ZodOptional<z.ZodNumber>;
    not: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodLazy<z.ZodType<Prisma.NestedFloatNullableFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedFloatNullableFilter<never>, unknown>>>]>>>;
}, z.core.$strict>;
//# sourceMappingURL=NestedFloatNullableFilter.schema.d.ts.map