import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const TicketUpdateOneSchema: z.ZodType<Prisma.TicketUpdateArgs>;
export declare const TicketUpdateOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.TicketSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.TicketSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.TicketInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.TicketInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.TicketUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketUpdateInput, unknown>>, z.ZodType<Prisma.TicketUncheckedUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketUncheckedUpdateInput, unknown>>]>;
    where: z.ZodType<Prisma.TicketWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketWhereUniqueInput, unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=updateOneTicket.schema.d.ts.map