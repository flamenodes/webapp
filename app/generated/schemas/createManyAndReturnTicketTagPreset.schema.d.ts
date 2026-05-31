import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const TicketTagPresetCreateManyAndReturnSchema: z.ZodType<Prisma.TicketTagPresetCreateManyAndReturnArgs>;
export declare const TicketTagPresetCreateManyAndReturnZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.TicketTagPresetSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.TicketTagPresetCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetCreateManyInput, unknown>>, z.ZodArray<z.ZodType<Prisma.TicketTagPresetCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetCreateManyInput, unknown>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=createManyAndReturnTicketTagPreset.schema.d.ts.map