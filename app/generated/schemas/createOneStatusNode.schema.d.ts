import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const StatusNodeCreateOneSchema: z.ZodType<Prisma.StatusNodeCreateArgs>;
export declare const StatusNodeCreateOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.StatusNodeSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.StatusNodeSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.StatusNodeCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.StatusNodeCreateInput, unknown>>, z.ZodType<Prisma.StatusNodeUncheckedCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.StatusNodeUncheckedCreateInput, unknown>>]>;
}, z.core.$strict>;
//# sourceMappingURL=createOneStatusNode.schema.d.ts.map