import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const TicketAggregateSchema: z.ZodType<Prisma.TicketAggregateArgs>;
export declare const TicketAggregateZodSchema: z.ZodObject<{
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.TicketOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.TicketOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.TicketWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.TicketWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.TicketCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.TicketCountAggregateInputType, unknown>>]>>;
    _min: z.ZodOptional<z.ZodType<Prisma.TicketMinAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.TicketMinAggregateInputType, unknown>>>;
    _max: z.ZodOptional<z.ZodType<Prisma.TicketMaxAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.TicketMaxAggregateInputType, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=aggregateTicket.schema.d.ts.map