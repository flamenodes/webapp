import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const ServerNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.ServerNullableScalarRelationFilter>;
export declare const ServerNullableScalarRelationFilterObjectZodSchema: z.ZodObject<{
    is: z.ZodNullable<z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ServerWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerWhereInput, unknown>>>>>;
    isNot: z.ZodNullable<z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ServerWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerWhereInput, unknown>>>>>;
}, z.core.$strict>;
//# sourceMappingURL=ServerNullableScalarRelationFilter.schema.d.ts.map