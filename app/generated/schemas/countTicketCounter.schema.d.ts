import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const TicketCounterCountSchema: z.ZodType<Prisma.TicketCounterCountArgs>;
export declare const TicketCounterCountZodSchema: z.ZodObject<{
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.TicketCounterOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.TicketCounterOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.TicketCounterWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.TicketCounterWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    select: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.TicketCounterCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterCountAggregateInputType, unknown>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=countTicketCounter.schema.d.ts.map