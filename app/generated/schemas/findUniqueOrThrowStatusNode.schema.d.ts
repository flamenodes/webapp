import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const StatusNodeFindUniqueOrThrowSchema: z.ZodType<Prisma.StatusNodeFindUniqueOrThrowArgs>;
export declare const StatusNodeFindUniqueOrThrowZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.StatusNodeSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.StatusNodeSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    where: z.ZodType<Prisma.StatusNodeWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.StatusNodeWhereUniqueInput, unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=findUniqueOrThrowStatusNode.schema.d.ts.map