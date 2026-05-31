import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const StatusNodeUpsertOneSchema: z.ZodType<Prisma.StatusNodeUpsertArgs>;
export declare const StatusNodeUpsertOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.StatusNodeSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.StatusNodeSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    where: z.ZodType<Prisma.StatusNodeWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.StatusNodeWhereUniqueInput, unknown>>;
    create: z.ZodUnion<readonly [z.ZodType<Prisma.StatusNodeCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.StatusNodeCreateInput, unknown>>, z.ZodType<Prisma.StatusNodeUncheckedCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.StatusNodeUncheckedCreateInput, unknown>>]>;
    update: z.ZodUnion<readonly [z.ZodType<Prisma.StatusNodeUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.StatusNodeUpdateInput, unknown>>, z.ZodType<Prisma.StatusNodeUncheckedUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.StatusNodeUncheckedUpdateInput, unknown>>]>;
}, z.core.$strict>;
//# sourceMappingURL=upsertOneStatusNode.schema.d.ts.map