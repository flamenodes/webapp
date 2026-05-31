import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const OrderListRelationFilterObjectSchema: z.ZodType<Prisma.OrderListRelationFilter>;
export declare const OrderListRelationFilterObjectZodSchema: z.ZodObject<{
    every: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.OrderWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderWhereInput, unknown>>>>;
    some: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.OrderWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderWhereInput, unknown>>>>;
    none: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.OrderWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderWhereInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=OrderListRelationFilter.schema.d.ts.map