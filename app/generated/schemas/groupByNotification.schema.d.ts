import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const NotificationGroupBySchema: z.ZodType<Prisma.NotificationGroupByArgs>;
export declare const NotificationGroupByZodSchema: z.ZodObject<{
    where: z.ZodOptional<z.ZodType<Prisma.NotificationWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.NotificationWhereInput, unknown>>>;
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.NotificationOrderByWithAggregationInput, unknown, z.core.$ZodTypeInternals<Prisma.NotificationOrderByWithAggregationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.NotificationOrderByWithAggregationInput, unknown, z.core.$ZodTypeInternals<Prisma.NotificationOrderByWithAggregationInput, unknown>>>]>>;
    having: z.ZodOptional<z.ZodType<Prisma.NotificationScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.NotificationScalarWhereWithAggregatesInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    by: z.ZodArray<z.ZodEnum<{
        type: "type";
        message: "message";
        id: "id";
        title: "title";
        createdAt: "createdAt";
        userId: "userId";
        read: "read";
    }>>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.NotificationCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.NotificationCountAggregateInputType, unknown>>]>>;
    _min: z.ZodOptional<z.ZodType<Prisma.NotificationMinAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.NotificationMinAggregateInputType, unknown>>>;
    _max: z.ZodOptional<z.ZodType<Prisma.NotificationMaxAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.NotificationMaxAggregateInputType, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=groupByNotification.schema.d.ts.map