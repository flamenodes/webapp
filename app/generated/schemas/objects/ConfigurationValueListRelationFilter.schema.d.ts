import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ConfigurationValueListRelationFilterObjectSchema: z.ZodType<Prisma.ConfigurationValueListRelationFilter>;
export declare const ConfigurationValueListRelationFilterObjectZodSchema: z.ZodObject<{
    every: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ConfigurationValueWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueWhereInput, unknown>>>>;
    some: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ConfigurationValueWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueWhereInput, unknown>>>>;
    none: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ConfigurationValueWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueWhereInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=ConfigurationValueListRelationFilter.schema.d.ts.map