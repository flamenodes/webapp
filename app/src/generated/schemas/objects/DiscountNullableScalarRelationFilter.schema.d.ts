import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const DiscountNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.DiscountNullableScalarRelationFilter>;
export declare const DiscountNullableScalarRelationFilterObjectZodSchema: z.ZodObject<{
    is: z.ZodNullable<z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.DiscountWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountWhereInput, unknown>>>>>;
    isNot: z.ZodNullable<z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.DiscountWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountWhereInput, unknown>>>>>;
}, z.core.$strict>;
//# sourceMappingURL=DiscountNullableScalarRelationFilter.schema.d.ts.map