import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const TicketCounterCreateManyAndReturnSchema: z.ZodType<Prisma.TicketCounterCreateManyAndReturnArgs>;
export declare const TicketCounterCreateManyAndReturnZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.TicketCounterSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.TicketCounterCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterCreateManyInput, unknown>>, z.ZodArray<z.ZodType<Prisma.TicketCounterCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterCreateManyInput, unknown>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=createManyAndReturnTicketCounter.schema.d.ts.map