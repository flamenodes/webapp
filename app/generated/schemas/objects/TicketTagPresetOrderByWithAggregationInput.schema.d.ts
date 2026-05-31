import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketTagPresetOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.TicketTagPresetOrderByWithAggregationInput>;
export declare const TicketTagPresetOrderByWithAggregationInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    name: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    createdAt: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    _count: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.TicketTagPresetCountOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetCountOrderByAggregateInput, unknown>>>>;
    _max: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.TicketTagPresetMaxOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetMaxOrderByAggregateInput, unknown>>>>;
    _min: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.TicketTagPresetMinOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetMinOrderByAggregateInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=TicketTagPresetOrderByWithAggregationInput.schema.d.ts.map