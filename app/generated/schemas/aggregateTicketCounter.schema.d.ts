import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const TicketCounterAggregateSchema: z.ZodType<Prisma.TicketCounterAggregateArgs>;
export declare const TicketCounterAggregateZodSchema: z.ZodObject<{
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.TicketCounterOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.TicketCounterOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.TicketCounterWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.TicketCounterWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.TicketCounterCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterCountAggregateInputType, unknown>>]>>;
    _min: z.ZodOptional<z.ZodType<Prisma.TicketCounterMinAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterMinAggregateInputType, unknown>>>;
    _max: z.ZodOptional<z.ZodType<Prisma.TicketCounterMaxAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterMaxAggregateInputType, unknown>>>;
    _avg: z.ZodOptional<z.ZodType<Prisma.TicketCounterAvgAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterAvgAggregateInputType, unknown>>>;
    _sum: z.ZodOptional<z.ZodType<Prisma.TicketCounterSumAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterSumAggregateInputType, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=aggregateTicketCounter.schema.d.ts.map