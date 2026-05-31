import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const TicketMessageUpdateOneSchema: z.ZodType<Prisma.TicketMessageUpdateArgs>;
export declare const TicketMessageUpdateOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.TicketMessageSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.TicketMessageInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.TicketMessageUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageUpdateInput, unknown>>, z.ZodType<Prisma.TicketMessageUncheckedUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageUncheckedUpdateInput, unknown>>]>;
    where: z.ZodType<Prisma.TicketMessageWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageWhereUniqueInput, unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=updateOneTicketMessage.schema.d.ts.map