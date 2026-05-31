import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const TicketCounterCreateOneSchema: z.ZodType<Prisma.TicketCounterCreateArgs>;
export declare const TicketCounterCreateOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.TicketCounterSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.TicketCounterCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterCreateInput, unknown>>, z.ZodType<Prisma.TicketCounterUncheckedCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterUncheckedCreateInput, unknown>>]>;
}, z.core.$strict>;
//# sourceMappingURL=createOneTicketCounter.schema.d.ts.map