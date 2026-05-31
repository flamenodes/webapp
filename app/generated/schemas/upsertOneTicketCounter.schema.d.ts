import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const TicketCounterUpsertOneSchema: z.ZodType<Prisma.TicketCounterUpsertArgs>;
export declare const TicketCounterUpsertOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.TicketCounterSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    where: z.ZodType<Prisma.TicketCounterWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterWhereUniqueInput, unknown>>;
    create: z.ZodUnion<readonly [z.ZodType<Prisma.TicketCounterCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterCreateInput, unknown>>, z.ZodType<Prisma.TicketCounterUncheckedCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterUncheckedCreateInput, unknown>>]>;
    update: z.ZodUnion<readonly [z.ZodType<Prisma.TicketCounterUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterUpdateInput, unknown>>, z.ZodType<Prisma.TicketCounterUncheckedUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterUncheckedUpdateInput, unknown>>]>;
}, z.core.$strict>;
//# sourceMappingURL=upsertOneTicketCounter.schema.d.ts.map