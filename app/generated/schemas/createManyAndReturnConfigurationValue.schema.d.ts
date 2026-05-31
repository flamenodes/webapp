import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const ConfigurationValueCreateManyAndReturnSchema: z.ZodType<Prisma.ConfigurationValueCreateManyAndReturnArgs>;
export declare const ConfigurationValueCreateManyAndReturnZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.ConfigurationValueSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.ConfigurationValueCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueCreateManyInput, unknown>>, z.ZodArray<z.ZodType<Prisma.ConfigurationValueCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueCreateManyInput, unknown>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=createManyAndReturnConfigurationValue.schema.d.ts.map