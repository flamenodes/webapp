import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const NestedDateTimeFilterObjectSchema: z.ZodType<Prisma.NestedDateTimeFilter>;
export declare const NestedDateTimeFilterObjectZodSchema: z.ZodObject<{
    equals: z.ZodOptional<z.ZodString>;
    in: z.ZodOptional<z.ZodArray<z.ZodString>>;
    notIn: z.ZodOptional<z.ZodArray<z.ZodString>>;
    lt: z.ZodOptional<z.ZodString>;
    lte: z.ZodOptional<z.ZodString>;
    gt: z.ZodOptional<z.ZodString>;
    gte: z.ZodOptional<z.ZodString>;
    not: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.NestedDateTimeFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedDateTimeFilter<never>, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=NestedDateTimeFilter.schema.d.ts.map