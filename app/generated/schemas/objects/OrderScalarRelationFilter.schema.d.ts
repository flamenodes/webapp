import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const OrderScalarRelationFilterObjectSchema: z.ZodType<Prisma.OrderScalarRelationFilter>;
export declare const OrderScalarRelationFilterObjectZodSchema: z.ZodObject<{
    is: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.OrderWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderWhereInput, unknown>>>>;
    isNot: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.OrderWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderWhereInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=OrderScalarRelationFilter.schema.d.ts.map