import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const NotificationFindFirstSelectSchema: z.ZodType<Prisma.NotificationSelect>;
export declare const NotificationFindFirstSelectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodBoolean>;
    userId: z.ZodOptional<z.ZodBoolean>;
    user: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodOptional<z.ZodBoolean>;
    title: z.ZodOptional<z.ZodBoolean>;
    message: z.ZodOptional<z.ZodBoolean>;
    read: z.ZodOptional<z.ZodBoolean>;
    createdAt: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
export declare const NotificationFindFirstSchema: z.ZodType<Prisma.NotificationFindFirstArgs>;
export declare const NotificationFindFirstZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.NotificationSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.NotificationSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodLazy<z.ZodOptional<z.ZodType<Prisma.NotificationInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.NotificationInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.NotificationOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.NotificationOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.NotificationOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.NotificationOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.NotificationWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.NotificationWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.NotificationWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.NotificationWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    distinct: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        type: "type";
        message: "message";
        id: "id";
        title: "title";
        createdAt: "createdAt";
        userId: "userId";
        read: "read";
    }>, z.ZodArray<z.ZodEnum<{
        type: "type";
        message: "message";
        id: "id";
        title: "title";
        createdAt: "createdAt";
        userId: "userId";
        read: "read";
    }>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=findFirstNotification.schema.d.ts.map