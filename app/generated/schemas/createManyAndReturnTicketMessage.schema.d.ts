import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const TicketMessageCreateManyAndReturnSchema: z.ZodType<Prisma.TicketMessageCreateManyAndReturnArgs>;
export declare const TicketMessageCreateManyAndReturnZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.TicketMessageSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.TicketMessageCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageCreateManyInput, unknown>>, z.ZodArray<z.ZodType<Prisma.TicketMessageCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageCreateManyInput, unknown>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=createManyAndReturnTicketMessage.schema.d.ts.map