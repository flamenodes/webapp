import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ConfigurationOptionCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ConfigurationOptionCountOutputTypeSelect>;
export declare const ConfigurationOptionCountOutputTypeSelectObjectZodSchema: z.ZodObject<{
    values: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodObject<{
        where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ConfigurationValueWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueWhereInput, unknown>>>>;
    }, z.core.$strict>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=ConfigurationOptionCountOutputTypeSelect.schema.d.ts.map