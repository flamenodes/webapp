import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const ServerUpdateOneSchema: z.ZodType<Prisma.ServerUpdateArgs>;
export declare const ServerUpdateOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.ServerSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ServerSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.ServerInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ServerInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.ServerUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerUpdateInput, unknown>>, z.ZodType<Prisma.ServerUncheckedUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerUncheckedUpdateInput, unknown>>]>;
    where: z.ZodType<Prisma.ServerWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerWhereUniqueInput, unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=updateOneServer.schema.d.ts.map