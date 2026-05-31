import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const TicketTagPresetGroupBySchema: z.ZodType<Prisma.TicketTagPresetGroupByArgs>;
export declare const TicketTagPresetGroupByZodSchema: z.ZodObject<{
    where: z.ZodOptional<z.ZodType<Prisma.TicketTagPresetWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetWhereInput, unknown>>>;
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.TicketTagPresetOrderByWithAggregationInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetOrderByWithAggregationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.TicketTagPresetOrderByWithAggregationInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetOrderByWithAggregationInput, unknown>>>]>>;
    having: z.ZodOptional<z.ZodType<Prisma.TicketTagPresetScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetScalarWhereWithAggregatesInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    by: z.ZodArray<z.ZodEnum<{
        id: "id";
        name: "name";
        createdAt: "createdAt";
    }>>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.TicketTagPresetCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetCountAggregateInputType, unknown>>]>>;
    _min: z.ZodOptional<z.ZodType<Prisma.TicketTagPresetMinAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetMinAggregateInputType, unknown>>>;
    _max: z.ZodOptional<z.ZodType<Prisma.TicketTagPresetMaxAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetMaxAggregateInputType, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=groupByTicketTagPreset.schema.d.ts.map