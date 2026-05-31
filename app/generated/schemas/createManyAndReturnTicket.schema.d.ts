import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const TicketCreateManyAndReturnSchema: z.ZodType<Prisma.TicketCreateManyAndReturnArgs>;
export declare const TicketCreateManyAndReturnZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.TicketSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.TicketSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.TicketCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCreateManyInput, unknown>>, z.ZodArray<z.ZodType<Prisma.TicketCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCreateManyInput, unknown>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=createManyAndReturnTicket.schema.d.ts.map