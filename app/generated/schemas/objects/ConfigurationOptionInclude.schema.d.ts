import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ConfigurationOptionIncludeObjectSchema: z.ZodType<Prisma.ConfigurationOptionInclude>;
export declare const ConfigurationOptionIncludeObjectZodSchema: z.ZodObject<{
    values: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodType<Prisma.ConfigurationValueFindManyArgs<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueFindManyArgs<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>]>>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodObject<{
        select: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ConfigurationOptionCountOutputTypeSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionCountOutputTypeSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
    }, z.core.$strict>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=ConfigurationOptionInclude.schema.d.ts.map