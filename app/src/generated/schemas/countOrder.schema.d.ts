import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const OrderCountSchema: z.ZodType<Prisma.OrderCountArgs>;
export declare const OrderCountZodSchema: z.ZodObject<{
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.OrderOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.OrderOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.OrderWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.OrderWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    select: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.OrderCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.OrderCountAggregateInputType, unknown>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=countOrder.schema.d.ts.map