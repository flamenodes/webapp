import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const TicketCounterUpdateOneSchema: z.ZodType<Prisma.TicketCounterUpdateArgs>;
export declare const TicketCounterUpdateOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.TicketCounterSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.TicketCounterUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterUpdateInput, unknown>>, z.ZodType<Prisma.TicketCounterUncheckedUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterUncheckedUpdateInput, unknown>>]>;
    where: z.ZodType<Prisma.TicketCounterWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterWhereUniqueInput, unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=updateOneTicketCounter.schema.d.ts.map