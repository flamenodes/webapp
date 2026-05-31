import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const TicketCreateManySchema: z.ZodType<Prisma.TicketCreateManyArgs>;
export declare const TicketCreateManyZodSchema: z.ZodObject<{
    data: z.ZodUnion<readonly [z.ZodType<Prisma.TicketCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCreateManyInput, unknown>>, z.ZodArray<z.ZodType<Prisma.TicketCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCreateManyInput, unknown>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=createManyTicket.schema.d.ts.map