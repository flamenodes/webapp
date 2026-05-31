import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const EnumTicketPriorityWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumTicketPriorityWithAggregatesFilter>;
export declare const EnumTicketPriorityWithAggregatesFilterObjectZodSchema: z.ZodObject<{
    equals: z.ZodOptional<z.ZodEnum<{
        LOW: "LOW";
        MEDIUM: "MEDIUM";
        HIGH: "HIGH";
        URGENT: "URGENT";
    }>>;
    in: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        LOW: "LOW";
        MEDIUM: "MEDIUM";
        HIGH: "HIGH";
        URGENT: "URGENT";
    }>>>;
    notIn: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        LOW: "LOW";
        MEDIUM: "MEDIUM";
        HIGH: "HIGH";
        URGENT: "URGENT";
    }>>>;
    not: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        LOW: "LOW";
        MEDIUM: "MEDIUM";
        HIGH: "HIGH";
        URGENT: "URGENT";
    }>, z.ZodLazy<z.ZodType<Prisma.NestedEnumTicketPriorityWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedEnumTicketPriorityWithAggregatesFilter<never>, unknown>>>]>>;
    _count: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedIntFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedIntFilter<never>, unknown>>>>;
    _min: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedEnumTicketPriorityFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedEnumTicketPriorityFilter<never>, unknown>>>>;
    _max: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedEnumTicketPriorityFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedEnumTicketPriorityFilter<never>, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=EnumTicketPriorityWithAggregatesFilter.schema.d.ts.map