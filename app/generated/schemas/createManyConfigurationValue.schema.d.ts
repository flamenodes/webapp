import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const ConfigurationValueCreateManySchema: z.ZodType<Prisma.ConfigurationValueCreateManyArgs>;
export declare const ConfigurationValueCreateManyZodSchema: z.ZodObject<{
    data: z.ZodUnion<readonly [z.ZodType<Prisma.ConfigurationValueCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueCreateManyInput, unknown>>, z.ZodArray<z.ZodType<Prisma.ConfigurationValueCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueCreateManyInput, unknown>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=createManyConfigurationValue.schema.d.ts.map