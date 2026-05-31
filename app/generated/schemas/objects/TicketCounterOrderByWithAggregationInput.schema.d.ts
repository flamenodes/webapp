import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketCounterOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.TicketCounterOrderByWithAggregationInput>;
export declare const TicketCounterOrderByWithAggregationInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    seq: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    _count: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.TicketCounterCountOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterCountOrderByAggregateInput, unknown>>>>;
    _avg: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.TicketCounterAvgOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterAvgOrderByAggregateInput, unknown>>>>;
    _max: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.TicketCounterMaxOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterMaxOrderByAggregateInput, unknown>>>>;
    _min: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.TicketCounterMinOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterMinOrderByAggregateInput, unknown>>>>;
    _sum: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.TicketCounterSumOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterSumOrderByAggregateInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=TicketCounterOrderByWithAggregationInput.schema.d.ts.map