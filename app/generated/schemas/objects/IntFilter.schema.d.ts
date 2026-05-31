import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const IntFilterObjectSchema: z.ZodType<Prisma.IntFilter>;
export declare const IntFilterObjectZodSchema: z.ZodObject<{
    equals: z.ZodOptional<z.ZodNumber>;
    in: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    notIn: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    lt: z.ZodOptional<z.ZodNumber>;
    lte: z.ZodOptional<z.ZodNumber>;
    gt: z.ZodOptional<z.ZodNumber>;
    gte: z.ZodOptional<z.ZodNumber>;
    not: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodLazy<z.ZodType<Prisma.NestedIntFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedIntFilter<never>, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=IntFilter.schema.d.ts.map