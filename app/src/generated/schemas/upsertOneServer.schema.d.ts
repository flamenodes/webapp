import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const ServerUpsertOneSchema: z.ZodType<Prisma.ServerUpsertArgs>;
export declare const ServerUpsertOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.ServerSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ServerSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.ServerInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ServerInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    where: z.ZodType<Prisma.ServerWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerWhereUniqueInput, unknown>>;
    create: z.ZodUnion<readonly [z.ZodType<Prisma.ServerCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerCreateInput, unknown>>, z.ZodType<Prisma.ServerUncheckedCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerUncheckedCreateInput, unknown>>]>;
    update: z.ZodUnion<readonly [z.ZodType<Prisma.ServerUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerUpdateInput, unknown>>, z.ZodType<Prisma.ServerUncheckedUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerUncheckedUpdateInput, unknown>>]>;
}, z.core.$strict>;
//# sourceMappingURL=upsertOneServer.schema.d.ts.map