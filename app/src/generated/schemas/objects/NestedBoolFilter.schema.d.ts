import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const NestedBoolFilterObjectSchema: z.ZodType<Prisma.NestedBoolFilter>;
export declare const NestedBoolFilterObjectZodSchema: z.ZodObject<{
    equals: z.ZodOptional<z.ZodBoolean>;
    not: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodType<Prisma.NestedBoolFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedBoolFilter<never>, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=NestedBoolFilter.schema.d.ts.map