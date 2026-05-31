import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const TicketMessageCreateManySchema: z.ZodType<Prisma.TicketMessageCreateManyArgs>;
export declare const TicketMessageCreateManyZodSchema: z.ZodObject<{
    data: z.ZodUnion<readonly [z.ZodType<Prisma.TicketMessageCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageCreateManyInput, unknown>>, z.ZodArray<z.ZodType<Prisma.TicketMessageCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageCreateManyInput, unknown>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=createManyTicketMessage.schema.d.ts.map