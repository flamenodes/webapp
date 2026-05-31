import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const ConfigurationValueUpdateManyAndReturnSchema: z.ZodType<Prisma.ConfigurationValueUpdateManyAndReturnArgs>;
export declare const ConfigurationValueUpdateManyAndReturnZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.ConfigurationValueSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodType<Prisma.ConfigurationValueUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueUpdateManyMutationInput, unknown>>;
    where: z.ZodOptional<z.ZodType<Prisma.ConfigurationValueWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueWhereInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=updateManyAndReturnConfigurationValue.schema.d.ts.map