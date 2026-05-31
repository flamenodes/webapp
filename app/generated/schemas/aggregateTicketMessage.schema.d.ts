import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const TicketMessageAggregateSchema: z.ZodType<Prisma.TicketMessageAggregateArgs>;
export declare const TicketMessageAggregateZodSchema: z.ZodObject<{
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.TicketMessageOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.TicketMessageOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.TicketMessageWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.TicketMessageWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.TicketMessageCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageCountAggregateInputType, unknown>>]>>;
    _min: z.ZodOptional<z.ZodType<Prisma.TicketMessageMinAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageMinAggregateInputType, unknown>>>;
    _max: z.ZodOptional<z.ZodType<Prisma.TicketMessageMaxAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageMaxAggregateInputType, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=aggregateTicketMessage.schema.d.ts.map