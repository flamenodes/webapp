import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const TicketMessageFindUniqueSchema: z.ZodType<Prisma.TicketMessageFindUniqueArgs>;
export declare const TicketMessageFindUniqueZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.TicketMessageSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.TicketMessageInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    where: z.ZodType<Prisma.TicketMessageWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageWhereUniqueInput, unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=findUniqueTicketMessage.schema.d.ts.map