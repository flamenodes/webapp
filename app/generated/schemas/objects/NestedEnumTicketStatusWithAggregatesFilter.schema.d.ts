import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const NestedEnumTicketStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumTicketStatusWithAggregatesFilter>;
export declare const NestedEnumTicketStatusWithAggregatesFilterObjectZodSchema: z.ZodObject<{
    equals: z.ZodOptional<z.ZodEnum<{
        PENDING: "PENDING";
        OPEN: "OPEN";
        IN_PROGRESS: "IN_PROGRESS";
        RESOLVED: "RESOLVED";
        CLOSED: "CLOSED";
    }>>;
    in: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        PENDING: "PENDING";
        OPEN: "OPEN";
        IN_PROGRESS: "IN_PROGRESS";
        RESOLVED: "RESOLVED";
        CLOSED: "CLOSED";
    }>>>;
    notIn: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        PENDING: "PENDING";
        OPEN: "OPEN";
        IN_PROGRESS: "IN_PROGRESS";
        RESOLVED: "RESOLVED";
        CLOSED: "CLOSED";
    }>>>;
    not: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        PENDING: "PENDING";
        OPEN: "OPEN";
        IN_PROGRESS: "IN_PROGRESS";
        RESOLVED: "RESOLVED";
        CLOSED: "CLOSED";
    }>, z.ZodLazy<z.ZodType<Prisma.NestedEnumTicketStatusWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedEnumTicketStatusWithAggregatesFilter<never>, unknown>>>]>>;
    _count: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedIntFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedIntFilter<never>, unknown>>>>;
    _min: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedEnumTicketStatusFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedEnumTicketStatusFilter<never>, unknown>>>>;
    _max: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedEnumTicketStatusFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedEnumTicketStatusFilter<never>, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=NestedEnumTicketStatusWithAggregatesFilter.schema.d.ts.map