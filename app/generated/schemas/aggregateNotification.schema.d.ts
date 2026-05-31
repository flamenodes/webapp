import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const NotificationAggregateSchema: z.ZodType<Prisma.NotificationAggregateArgs>;
export declare const NotificationAggregateZodSchema: z.ZodObject<{
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.NotificationOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.NotificationOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.NotificationOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.NotificationOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.NotificationWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.NotificationWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.NotificationWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.NotificationWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.NotificationCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.NotificationCountAggregateInputType, unknown>>]>>;
    _min: z.ZodOptional<z.ZodType<Prisma.NotificationMinAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.NotificationMinAggregateInputType, unknown>>>;
    _max: z.ZodOptional<z.ZodType<Prisma.NotificationMaxAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.NotificationMaxAggregateInputType, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=aggregateNotification.schema.d.ts.map