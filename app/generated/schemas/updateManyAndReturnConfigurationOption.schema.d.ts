import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const ConfigurationOptionUpdateManyAndReturnSchema: z.ZodType<Prisma.ConfigurationOptionUpdateManyAndReturnArgs>;
export declare const ConfigurationOptionUpdateManyAndReturnZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.ConfigurationOptionSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodType<Prisma.ConfigurationOptionUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionUpdateManyMutationInput, unknown>>;
    where: z.ZodOptional<z.ZodType<Prisma.ConfigurationOptionWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionWhereInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=updateManyAndReturnConfigurationOption.schema.d.ts.map