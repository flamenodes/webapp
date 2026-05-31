import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ConfigurationOptionScalarRelationFilterObjectSchema: z.ZodType<Prisma.ConfigurationOptionScalarRelationFilter>;
export declare const ConfigurationOptionScalarRelationFilterObjectZodSchema: z.ZodObject<{
    is: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ConfigurationOptionWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionWhereInput, unknown>>>>;
    isNot: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ConfigurationOptionWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionWhereInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=ConfigurationOptionScalarRelationFilter.schema.d.ts.map