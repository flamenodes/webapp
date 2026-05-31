import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const UserScalarRelationFilterObjectSchema: z.ZodType<Prisma.UserScalarRelationFilter>;
export declare const UserScalarRelationFilterObjectZodSchema: z.ZodObject<{
    is: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereInput, unknown>>>>;
    isNot: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=UserScalarRelationFilter.schema.d.ts.map