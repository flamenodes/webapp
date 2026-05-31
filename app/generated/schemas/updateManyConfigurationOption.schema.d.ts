import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const ConfigurationOptionUpdateManySchema: z.ZodType<Prisma.ConfigurationOptionUpdateManyArgs>;
export declare const ConfigurationOptionUpdateManyZodSchema: z.ZodObject<{
    data: z.ZodType<Prisma.ConfigurationOptionUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionUpdateManyMutationInput, unknown>>;
    where: z.ZodOptional<z.ZodType<Prisma.ConfigurationOptionWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionWhereInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=updateManyConfigurationOption.schema.d.ts.map