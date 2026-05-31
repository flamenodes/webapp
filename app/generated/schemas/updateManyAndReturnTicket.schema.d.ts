import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const TicketUpdateManyAndReturnSchema: z.ZodType<Prisma.TicketUpdateManyAndReturnArgs>;
export declare const TicketUpdateManyAndReturnZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.TicketSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.TicketSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodType<Prisma.TicketUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketUpdateManyMutationInput, unknown>>;
    where: z.ZodOptional<z.ZodType<Prisma.TicketWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketWhereInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=updateManyAndReturnTicket.schema.d.ts.map