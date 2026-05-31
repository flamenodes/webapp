import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketTagPresetScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.TicketTagPresetScalarWhereWithAggregatesInput>;
export declare const TicketTagPresetScalarWhereWithAggregatesInputObjectZodSchema: z.ZodObject<{
    AND: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.TicketTagPresetScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetScalarWhereWithAggregatesInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.TicketTagPresetScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetScalarWhereWithAggregatesInput, unknown>>>>]>>;
    OR: z.ZodOptional<z.ZodArray<z.ZodLazy<z.ZodType<Prisma.TicketTagPresetScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetScalarWhereWithAggregatesInput, unknown>>>>>;
    NOT: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.TicketTagPresetScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetScalarWhereWithAggregatesInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.TicketTagPresetScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetScalarWhereWithAggregatesInput, unknown>>>>]>>;
    id: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringWithAggregatesFilter<never>, unknown>>>, z.ZodString]>>;
    name: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringWithAggregatesFilter<never>, unknown>>>, z.ZodString]>>;
    createdAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.DateTimeWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeWithAggregatesFilter<never>, unknown>>>, z.ZodCoercedDate<unknown>]>>;
}, z.core.$strict>;
//# sourceMappingURL=TicketTagPresetScalarWhereWithAggregatesInput.schema.d.ts.map