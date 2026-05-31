import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const TicketCounterUpdateManyAndReturnSchema: z.ZodType<Prisma.TicketCounterUpdateManyAndReturnArgs>;
export declare const TicketCounterUpdateManyAndReturnZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.TicketCounterSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodType<Prisma.TicketCounterUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterUpdateManyMutationInput, unknown>>;
    where: z.ZodOptional<z.ZodType<Prisma.TicketCounterWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterWhereInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=updateManyAndReturnTicketCounter.schema.d.ts.map