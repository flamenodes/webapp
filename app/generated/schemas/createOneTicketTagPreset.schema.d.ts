import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const TicketTagPresetCreateOneSchema: z.ZodType<Prisma.TicketTagPresetCreateArgs>;
export declare const TicketTagPresetCreateOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.TicketTagPresetSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.TicketTagPresetCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetCreateInput, unknown>>, z.ZodType<Prisma.TicketTagPresetUncheckedCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetUncheckedCreateInput, unknown>>]>;
}, z.core.$strict>;
//# sourceMappingURL=createOneTicketTagPreset.schema.d.ts.map