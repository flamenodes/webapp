import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const TicketTagPresetUpdateOneSchema: z.ZodType<Prisma.TicketTagPresetUpdateArgs>;
export declare const TicketTagPresetUpdateOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.TicketTagPresetSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.TicketTagPresetUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetUpdateInput, unknown>>, z.ZodType<Prisma.TicketTagPresetUncheckedUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetUncheckedUpdateInput, unknown>>]>;
    where: z.ZodType<Prisma.TicketTagPresetWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetWhereUniqueInput, unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=updateOneTicketTagPreset.schema.d.ts.map