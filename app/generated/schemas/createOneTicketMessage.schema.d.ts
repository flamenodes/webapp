import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const TicketMessageCreateOneSchema: z.ZodType<Prisma.TicketMessageCreateArgs>;
export declare const TicketMessageCreateOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.TicketMessageSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.TicketMessageInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.TicketMessageCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageCreateInput, unknown>>, z.ZodType<Prisma.TicketMessageUncheckedCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageUncheckedCreateInput, unknown>>]>;
}, z.core.$strict>;
//# sourceMappingURL=createOneTicketMessage.schema.d.ts.map