import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const TicketMessageUpdateManyAndReturnSchema: z.ZodType<Prisma.TicketMessageUpdateManyAndReturnArgs>;
export declare const TicketMessageUpdateManyAndReturnZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.TicketMessageSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodType<Prisma.TicketMessageUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageUpdateManyMutationInput, unknown>>;
    where: z.ZodOptional<z.ZodType<Prisma.TicketMessageWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageWhereInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=updateManyAndReturnTicketMessage.schema.d.ts.map