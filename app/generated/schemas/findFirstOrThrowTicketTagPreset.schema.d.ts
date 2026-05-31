import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const TicketTagPresetFindFirstOrThrowSelectSchema: z.ZodType<Prisma.TicketTagPresetSelect>;
export declare const TicketTagPresetFindFirstOrThrowSelectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodBoolean>;
    name: z.ZodOptional<z.ZodBoolean>;
    createdAt: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
export declare const TicketTagPresetFindFirstOrThrowSchema: z.ZodType<Prisma.TicketTagPresetFindFirstOrThrowArgs>;
export declare const TicketTagPresetFindFirstOrThrowZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.TicketTagPresetSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.TicketTagPresetOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.TicketTagPresetOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.TicketTagPresetWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.TicketTagPresetWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketTagPresetWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    distinct: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        id: "id";
        name: "name";
        createdAt: "createdAt";
    }>, z.ZodArray<z.ZodEnum<{
        id: "id";
        name: "name";
        createdAt: "createdAt";
    }>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=findFirstOrThrowTicketTagPreset.schema.d.ts.map