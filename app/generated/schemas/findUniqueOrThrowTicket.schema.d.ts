import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const TicketFindUniqueOrThrowSchema: z.ZodType<Prisma.TicketFindUniqueOrThrowArgs>;
export declare const TicketFindUniqueOrThrowZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.TicketSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.TicketSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.TicketInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.TicketInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    where: z.ZodType<Prisma.TicketWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketWhereUniqueInput, unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=findUniqueOrThrowTicket.schema.d.ts.map