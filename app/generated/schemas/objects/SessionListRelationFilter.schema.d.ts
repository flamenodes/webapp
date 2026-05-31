import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const SessionListRelationFilterObjectSchema: z.ZodType<Prisma.SessionListRelationFilter>;
export declare const SessionListRelationFilterObjectZodSchema: z.ZodObject<{
    every: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.SessionWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.SessionWhereInput, unknown>>>>;
    some: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.SessionWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.SessionWhereInput, unknown>>>>;
    none: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.SessionWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.SessionWhereInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=SessionListRelationFilter.schema.d.ts.map