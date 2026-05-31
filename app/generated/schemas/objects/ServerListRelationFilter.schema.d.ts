import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ServerListRelationFilterObjectSchema: z.ZodType<Prisma.ServerListRelationFilter>;
export declare const ServerListRelationFilterObjectZodSchema: z.ZodObject<{
    every: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ServerWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerWhereInput, unknown>>>>;
    some: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ServerWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerWhereInput, unknown>>>>;
    none: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ServerWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerWhereInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=ServerListRelationFilter.schema.d.ts.map