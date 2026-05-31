import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const ServerGroupBySchema: z.ZodType<Prisma.ServerGroupByArgs>;
export declare const ServerGroupByZodSchema: z.ZodObject<{
    where: z.ZodOptional<z.ZodType<Prisma.ServerWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerWhereInput, unknown>>>;
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.ServerOrderByWithAggregationInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerOrderByWithAggregationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.ServerOrderByWithAggregationInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerOrderByWithAggregationInput, unknown>>>]>>;
    having: z.ZodOptional<z.ZodType<Prisma.ServerScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerScalarWhereWithAggregatesInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    by: z.ZodArray<z.ZodEnum<{
        type: "type";
        id: "id";
        name: "name";
        createdAt: "createdAt";
        userId: "userId";
        status: "status";
        updatedAt: "updatedAt";
        expiresAt: "expiresAt";
        orderItemId: "orderItemId";
        ip: "ip";
        port: "port";
        resources: "resources";
        pterodactylData: "pterodactylData";
        suspended: "suspended";
    }>>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.ServerCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ServerCountAggregateInputType, unknown>>]>>;
    _min: z.ZodOptional<z.ZodType<Prisma.ServerMinAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ServerMinAggregateInputType, unknown>>>;
    _max: z.ZodOptional<z.ZodType<Prisma.ServerMaxAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ServerMaxAggregateInputType, unknown>>>;
    _avg: z.ZodOptional<z.ZodType<Prisma.ServerAvgAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ServerAvgAggregateInputType, unknown>>>;
    _sum: z.ZodOptional<z.ZodType<Prisma.ServerSumAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ServerSumAggregateInputType, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=groupByServer.schema.d.ts.map