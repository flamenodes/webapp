import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const NestedBoolNullableFilterObjectSchema: z.ZodType<Prisma.NestedBoolNullableFilter>;
export declare const NestedBoolNullableFilterObjectZodSchema: z.ZodObject<{
    equals: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
    not: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodType<Prisma.NestedBoolNullableFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedBoolNullableFilter<never>, unknown>>>]>>>;
}, z.core.$strict>;
//# sourceMappingURL=NestedBoolNullableFilter.schema.d.ts.map