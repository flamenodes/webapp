import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const EnumTicketStatusFilterObjectSchema: z.ZodType<Prisma.EnumTicketStatusFilter>;
export declare const EnumTicketStatusFilterObjectZodSchema: z.ZodObject<{
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
    }>, z.ZodLazy<z.ZodType<Prisma.NestedEnumTicketStatusFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedEnumTicketStatusFilter<never>, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=EnumTicketStatusFilter.schema.d.ts.map