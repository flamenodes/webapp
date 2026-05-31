import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const AccountListRelationFilterObjectSchema: z.ZodType<Prisma.AccountListRelationFilter>;
export declare const AccountListRelationFilterObjectZodSchema: z.ZodObject<{
    every: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.AccountWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountWhereInput, unknown>>>>;
    some: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.AccountWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountWhereInput, unknown>>>>;
    none: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.AccountWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountWhereInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=AccountListRelationFilter.schema.d.ts.map