import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const TicketCreateOneSchema: z.ZodType<Prisma.TicketCreateArgs>;
export declare const TicketCreateOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.TicketSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.TicketSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.TicketInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.TicketInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.TicketCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCreateInput, unknown>>, z.ZodType<Prisma.TicketUncheckedCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketUncheckedCreateInput, unknown>>]>;
}, z.core.$strict>;
//# sourceMappingURL=createOneTicket.schema.d.ts.map