import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const StatusNodeCreateManyAndReturnSchema: z.ZodType<Prisma.StatusNodeCreateManyAndReturnArgs>;
export declare const StatusNodeCreateManyAndReturnZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.StatusNodeSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.StatusNodeSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.StatusNodeCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.StatusNodeCreateManyInput, unknown>>, z.ZodArray<z.ZodType<Prisma.StatusNodeCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.StatusNodeCreateManyInput, unknown>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=createManyAndReturnStatusNode.schema.d.ts.map