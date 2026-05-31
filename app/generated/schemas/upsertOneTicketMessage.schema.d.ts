import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const TicketMessageUpsertOneSchema: z.ZodType<Prisma.TicketMessageUpsertArgs>;
export declare const TicketMessageUpsertOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.TicketMessageSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.TicketMessageInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    where: z.ZodType<Prisma.TicketMessageWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageWhereUniqueInput, unknown>>;
    create: z.ZodUnion<readonly [z.ZodType<Prisma.TicketMessageCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageCreateInput, unknown>>, z.ZodType<Prisma.TicketMessageUncheckedCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageUncheckedCreateInput, unknown>>]>;
    update: z.ZodUnion<readonly [z.ZodType<Prisma.TicketMessageUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageUpdateInput, unknown>>, z.ZodType<Prisma.TicketMessageUncheckedUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageUncheckedUpdateInput, unknown>>]>;
}, z.core.$strict>;
//# sourceMappingURL=upsertOneTicketMessage.schema.d.ts.map