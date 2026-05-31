import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const NotificationCountSchema: z.ZodType<Prisma.NotificationCountArgs>;
export declare const NotificationCountZodSchema: z.ZodObject<{
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.NotificationOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.NotificationOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.NotificationOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.NotificationOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.NotificationWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.NotificationWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.NotificationWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.NotificationWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    select: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.NotificationCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.NotificationCountAggregateInputType, unknown>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=countNotification.schema.d.ts.map