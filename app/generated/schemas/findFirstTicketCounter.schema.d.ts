import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const TicketCounterFindFirstSelectSchema: z.ZodType<Prisma.TicketCounterSelect>;
export declare const TicketCounterFindFirstSelectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodBoolean>;
    seq: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
export declare const TicketCounterFindFirstSchema: z.ZodType<Prisma.TicketCounterFindFirstArgs>;
export declare const TicketCounterFindFirstZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.TicketCounterSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.TicketCounterOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.TicketCounterOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.TicketCounterWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.TicketCounterWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    distinct: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        id: "id";
        seq: "seq";
    }>, z.ZodArray<z.ZodEnum<{
        id: "id";
        seq: "seq";
    }>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=findFirstTicketCounter.schema.d.ts.map