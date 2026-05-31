import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const OrderItemScalarRelationFilterObjectSchema: z.ZodType<Prisma.OrderItemScalarRelationFilter>;
export declare const OrderItemScalarRelationFilterObjectZodSchema: z.ZodObject<{
    is: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.OrderItemWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemWhereInput, unknown>>>>;
    isNot: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.OrderItemWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemWhereInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=OrderItemScalarRelationFilter.schema.d.ts.map