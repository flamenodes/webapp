import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const StatusNodeCreateManySchema: z.ZodType<Prisma.StatusNodeCreateManyArgs>;
export declare const StatusNodeCreateManyZodSchema: z.ZodObject<{
    data: z.ZodUnion<readonly [z.ZodType<Prisma.StatusNodeCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.StatusNodeCreateManyInput, unknown>>, z.ZodArray<z.ZodType<Prisma.StatusNodeCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.StatusNodeCreateManyInput, unknown>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=createManyStatusNode.schema.d.ts.map