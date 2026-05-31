import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const BoolNullableFilterObjectSchema: z.ZodType<Prisma.BoolNullableFilter>;
export declare const BoolNullableFilterObjectZodSchema: z.ZodObject<{
    equals: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
    not: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodType<Prisma.NestedBoolNullableFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedBoolNullableFilter<never>, unknown>>>]>>>;
}, z.core.$strict>;
//# sourceMappingURL=BoolNullableFilter.schema.d.ts.map