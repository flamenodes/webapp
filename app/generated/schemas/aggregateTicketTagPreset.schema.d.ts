import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const TicketTagPresetAggregateSchema: z.ZodType<Prisma.TicketTagPresetAggregateArgs>;
export declare const TicketTagPresetAggregateZodSchema: z.ZodObject<{
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.TicketTagPresetOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.TicketTagPresetOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.TicketTagPresetWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.TicketTagPresetWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.TicketTagPresetCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetCountAggregateInputType, unknown>>]>>;
    _min: z.ZodOptional<z.ZodType<Prisma.TicketTagPresetMinAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetMinAggregateInputType, unknown>>>;
    _max: z.ZodOptional<z.ZodType<Prisma.TicketTagPresetMaxAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetMaxAggregateInputType, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=aggregateTicketTagPreset.schema.d.ts.map