import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const TicketTagPresetCountSchema: z.ZodType<Prisma.TicketTagPresetCountArgs>;
export declare const TicketTagPresetCountZodSchema: z.ZodObject<{
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.TicketTagPresetOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.TicketTagPresetOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.TicketTagPresetWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.TicketTagPresetWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    select: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.TicketTagPresetCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetCountAggregateInputType, unknown>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=countTicketTagPreset.schema.d.ts.map