import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const NestedEnumTicketPriorityFilterObjectSchema: z.ZodType<Prisma.NestedEnumTicketPriorityFilter>;
export declare const NestedEnumTicketPriorityFilterObjectZodSchema: z.ZodObject<{
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
    }>, z.ZodLazy<z.ZodType<Prisma.NestedEnumTicketPriorityFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedEnumTicketPriorityFilter<never>, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=NestedEnumTicketPriorityFilter.schema.d.ts.map