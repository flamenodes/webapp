import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const StatusNodeUpdateManyAndReturnSchema: z.ZodType<Prisma.StatusNodeUpdateManyAndReturnArgs>;
export declare const StatusNodeUpdateManyAndReturnZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.StatusNodeSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.StatusNodeSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodType<Prisma.StatusNodeUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.StatusNodeUpdateManyMutationInput, unknown>>;
    where: z.ZodOptional<z.ZodType<Prisma.StatusNodeWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.StatusNodeWhereInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=updateManyAndReturnStatusNode.schema.d.ts.map