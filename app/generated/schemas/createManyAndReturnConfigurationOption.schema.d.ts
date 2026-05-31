import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const ConfigurationOptionCreateManyAndReturnSchema: z.ZodType<Prisma.ConfigurationOptionCreateManyAndReturnArgs>;
export declare const ConfigurationOptionCreateManyAndReturnZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.ConfigurationOptionSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.ConfigurationOptionCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionCreateManyInput, unknown>>, z.ZodArray<z.ZodType<Prisma.ConfigurationOptionCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionCreateManyInput, unknown>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=createManyAndReturnConfigurationOption.schema.d.ts.map