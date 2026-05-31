import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const StatusNodeUpdateOneSchema: z.ZodType<Prisma.StatusNodeUpdateArgs>;
export declare const StatusNodeUpdateOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.StatusNodeSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.StatusNodeSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.StatusNodeUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.StatusNodeUpdateInput, unknown>>, z.ZodType<Prisma.StatusNodeUncheckedUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.StatusNodeUncheckedUpdateInput, unknown>>]>;
    where: z.ZodType<Prisma.StatusNodeWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.StatusNodeWhereUniqueInput, unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=updateOneStatusNode.schema.d.ts.map