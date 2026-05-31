import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const ConfigurationOptionCreateManySchema: z.ZodType<Prisma.ConfigurationOptionCreateManyArgs>;
export declare const ConfigurationOptionCreateManyZodSchema: z.ZodObject<{
    data: z.ZodUnion<readonly [z.ZodType<Prisma.ConfigurationOptionCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionCreateManyInput, unknown>>, z.ZodArray<z.ZodType<Prisma.ConfigurationOptionCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionCreateManyInput, unknown>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=createManyConfigurationOption.schema.d.ts.map