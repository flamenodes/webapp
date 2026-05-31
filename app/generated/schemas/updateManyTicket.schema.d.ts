import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const TicketUpdateManySchema: z.ZodType<Prisma.TicketUpdateManyArgs>;
export declare const TicketUpdateManyZodSchema: z.ZodObject<{
    data: z.ZodType<Prisma.TicketUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketUpdateManyMutationInput, unknown>>;
    where: z.ZodOptional<z.ZodType<Prisma.TicketWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketWhereInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=updateManyTicket.schema.d.ts.map