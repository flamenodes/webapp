import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const TicketCounterFindUniqueSchema: z.ZodType<Prisma.TicketCounterFindUniqueArgs>;
export declare const TicketCounterFindUniqueZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.TicketCounterSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    where: z.ZodType<Prisma.TicketCounterWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterWhereUniqueInput, unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=findUniqueTicketCounter.schema.d.ts.map