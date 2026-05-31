import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const TicketTagPresetUpdateManyAndReturnSchema: z.ZodType<Prisma.TicketTagPresetUpdateManyAndReturnArgs>;
export declare const TicketTagPresetUpdateManyAndReturnZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.TicketTagPresetSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodType<Prisma.TicketTagPresetUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetUpdateManyMutationInput, unknown>>;
    where: z.ZodOptional<z.ZodType<Prisma.TicketTagPresetWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetWhereInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=updateManyAndReturnTicketTagPreset.schema.d.ts.map