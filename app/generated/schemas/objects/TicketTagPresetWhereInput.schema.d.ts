import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketTagPresetWhereInputObjectSchema: z.ZodType<Prisma.TicketTagPresetWhereInput>;
export declare const TicketTagPresetWhereInputObjectZodSchema: z.ZodObject<{
    AND: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.TicketTagPresetWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetWhereInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.TicketTagPresetWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetWhereInput, unknown>>>>]>>;
    OR: z.ZodOptional<z.ZodArray<z.ZodLazy<z.ZodType<Prisma.TicketTagPresetWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetWhereInput, unknown>>>>>;
    NOT: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.TicketTagPresetWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetWhereInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.TicketTagPresetWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetWhereInput, unknown>>>>]>>;
    id: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringFilter<never>, unknown>>>, z.ZodString]>>;
    name: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringFilter<never>, unknown>>>, z.ZodString]>>;
    createdAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.DateTimeFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeFilter<never>, unknown>>>, z.ZodCoercedDate<unknown>]>>;
}, z.core.$strict>;
//# sourceMappingURL=TicketTagPresetWhereInput.schema.d.ts.map