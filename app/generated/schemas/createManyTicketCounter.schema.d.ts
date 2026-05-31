import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const TicketCounterCreateManySchema: z.ZodType<Prisma.TicketCounterCreateManyArgs>;
export declare const TicketCounterCreateManyZodSchema: z.ZodObject<{
    data: z.ZodUnion<readonly [z.ZodType<Prisma.TicketCounterCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterCreateManyInput, unknown>>, z.ZodArray<z.ZodType<Prisma.TicketCounterCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterCreateManyInput, unknown>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=createManyTicketCounter.schema.d.ts.map