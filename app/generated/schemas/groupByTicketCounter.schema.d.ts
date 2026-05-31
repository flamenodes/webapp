import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const TicketCounterGroupBySchema: z.ZodType<Prisma.TicketCounterGroupByArgs>;
export declare const TicketCounterGroupByZodSchema: z.ZodObject<{
    where: z.ZodOptional<z.ZodType<Prisma.TicketCounterWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterWhereInput, unknown>>>;
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.TicketCounterOrderByWithAggregationInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterOrderByWithAggregationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.TicketCounterOrderByWithAggregationInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterOrderByWithAggregationInput, unknown>>>]>>;
    having: z.ZodOptional<z.ZodType<Prisma.TicketCounterScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterScalarWhereWithAggregatesInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    by: z.ZodArray<z.ZodEnum<{
        id: "id";
        seq: "seq";
    }>>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.TicketCounterCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterCountAggregateInputType, unknown>>]>>;
    _min: z.ZodOptional<z.ZodType<Prisma.TicketCounterMinAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterMinAggregateInputType, unknown>>>;
    _max: z.ZodOptional<z.ZodType<Prisma.TicketCounterMaxAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterMaxAggregateInputType, unknown>>>;
    _avg: z.ZodOptional<z.ZodType<Prisma.TicketCounterAvgAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterAvgAggregateInputType, unknown>>>;
    _sum: z.ZodOptional<z.ZodType<Prisma.TicketCounterSumAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterSumAggregateInputType, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=groupByTicketCounter.schema.d.ts.map