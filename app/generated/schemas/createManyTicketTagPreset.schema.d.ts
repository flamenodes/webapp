import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const TicketTagPresetCreateManySchema: z.ZodType<Prisma.TicketTagPresetCreateManyArgs>;
export declare const TicketTagPresetCreateManyZodSchema: z.ZodObject<{
    data: z.ZodUnion<readonly [z.ZodType<Prisma.TicketTagPresetCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetCreateManyInput, unknown>>, z.ZodArray<z.ZodType<Prisma.TicketTagPresetCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetCreateManyInput, unknown>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=createManyTicketTagPreset.schema.d.ts.map