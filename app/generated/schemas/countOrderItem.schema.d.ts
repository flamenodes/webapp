import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const OrderItemCountSchema: z.ZodType<Prisma.OrderItemCountArgs>;
export declare const OrderItemCountZodSchema: z.ZodObject<{
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.OrderItemOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.OrderItemOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.OrderItemWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.OrderItemWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    select: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.OrderItemCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemCountAggregateInputType, unknown>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=countOrderItem.schema.d.ts.map