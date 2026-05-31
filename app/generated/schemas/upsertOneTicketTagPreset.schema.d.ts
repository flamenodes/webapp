import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const TicketTagPresetUpsertOneSchema: z.ZodType<Prisma.TicketTagPresetUpsertArgs>;
export declare const TicketTagPresetUpsertOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.TicketTagPresetSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    where: z.ZodType<Prisma.TicketTagPresetWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetWhereUniqueInput, unknown>>;
    create: z.ZodUnion<readonly [z.ZodType<Prisma.TicketTagPresetCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetCreateInput, unknown>>, z.ZodType<Prisma.TicketTagPresetUncheckedCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetUncheckedCreateInput, unknown>>]>;
    update: z.ZodUnion<readonly [z.ZodType<Prisma.TicketTagPresetUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetUpdateInput, unknown>>, z.ZodType<Prisma.TicketTagPresetUncheckedUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetUncheckedUpdateInput, unknown>>]>;
}, z.core.$strict>;
//# sourceMappingURL=upsertOneTicketTagPreset.schema.d.ts.map