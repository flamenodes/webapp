import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const TicketMessageCountSchema: z.ZodType<Prisma.TicketMessageCountArgs>;
export declare const TicketMessageCountZodSchema: z.ZodObject<{
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.TicketMessageOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.TicketMessageOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.TicketMessageWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.TicketMessageWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    select: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.TicketMessageCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageCountAggregateInputType, unknown>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=countTicketMessage.schema.d.ts.map