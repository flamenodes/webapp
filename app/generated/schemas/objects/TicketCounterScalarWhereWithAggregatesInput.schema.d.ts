import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketCounterScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.TicketCounterScalarWhereWithAggregatesInput>;
export declare const TicketCounterScalarWhereWithAggregatesInputObjectZodSchema: z.ZodObject<{
    AND: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.TicketCounterScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterScalarWhereWithAggregatesInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.TicketCounterScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterScalarWhereWithAggregatesInput, unknown>>>>]>>;
    OR: z.ZodOptional<z.ZodArray<z.ZodLazy<z.ZodType<Prisma.TicketCounterScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterScalarWhereWithAggregatesInput, unknown>>>>>;
    NOT: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.TicketCounterScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterScalarWhereWithAggregatesInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.TicketCounterScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCounterScalarWhereWithAggregatesInput, unknown>>>>]>>;
    id: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringWithAggregatesFilter<never>, unknown>>>, z.ZodString]>>;
    seq: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.IntWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.IntWithAggregatesFilter<never>, unknown>>>, z.ZodNumber]>>;
}, z.core.$strict>;
//# sourceMappingURL=TicketCounterScalarWhereWithAggregatesInput.schema.d.ts.map