import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const ConfigurationValueUpdateManySchema: z.ZodType<Prisma.ConfigurationValueUpdateManyArgs>;
export declare const ConfigurationValueUpdateManyZodSchema: z.ZodObject<{
    data: z.ZodType<Prisma.ConfigurationValueUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueUpdateManyMutationInput, unknown>>;
    where: z.ZodOptional<z.ZodType<Prisma.ConfigurationValueWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueWhereInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=updateManyConfigurationValue.schema.d.ts.map