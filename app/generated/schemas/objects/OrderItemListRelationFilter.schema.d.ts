import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const OrderItemListRelationFilterObjectSchema: z.ZodType<Prisma.OrderItemListRelationFilter>;
export declare const OrderItemListRelationFilterObjectZodSchema: z.ZodObject<{
    every: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.OrderItemWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemWhereInput, unknown>>>>;
    some: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.OrderItemWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemWhereInput, unknown>>>>;
    none: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.OrderItemWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemWhereInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=OrderItemListRelationFilter.schema.d.ts.map