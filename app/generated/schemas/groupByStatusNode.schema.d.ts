import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const StatusNodeGroupBySchema: z.ZodType<Prisma.StatusNodeGroupByArgs>;
export declare const StatusNodeGroupByZodSchema: z.ZodObject<{
    where: z.ZodOptional<z.ZodType<Prisma.StatusNodeWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.StatusNodeWhereInput, unknown>>>;
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.StatusNodeOrderByWithAggregationInput, unknown, z.core.$ZodTypeInternals<Prisma.StatusNodeOrderByWithAggregationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.StatusNodeOrderByWithAggregationInput, unknown, z.core.$ZodTypeInternals<Prisma.StatusNodeOrderByWithAggregationInput, unknown>>>]>>;
    having: z.ZodOptional<z.ZodType<Prisma.StatusNodeScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.StatusNodeScalarWhereWithAggregatesInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    by: z.ZodArray<z.ZodEnum<{
        type: "type";
        id: "id";
        name: "name";
        createdAt: "createdAt";
        status: "status";
        updatedAt: "updatedAt";
        ip: "ip";
        port: "port";
        location: "location";
        protocol: "protocol";
        latency: "latency";
        lastChecked: "lastChecked";
        cpu: "cpu";
        memory: "memory";
        disk: "disk";
    }>>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.StatusNodeCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.StatusNodeCountAggregateInputType, unknown>>]>>;
    _min: z.ZodOptional<z.ZodType<Prisma.StatusNodeMinAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.StatusNodeMinAggregateInputType, unknown>>>;
    _max: z.ZodOptional<z.ZodType<Prisma.StatusNodeMaxAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.StatusNodeMaxAggregateInputType, unknown>>>;
    _avg: z.ZodOptional<z.ZodType<Prisma.StatusNodeAvgAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.StatusNodeAvgAggregateInputType, unknown>>>;
    _sum: z.ZodOptional<z.ZodType<Prisma.StatusNodeSumAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.StatusNodeSumAggregateInputType, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=groupByStatusNode.schema.d.ts.map