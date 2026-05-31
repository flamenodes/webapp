import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const SessionCreateManySchema: z.ZodType<Prisma.SessionCreateManyArgs>;
export declare const SessionCreateManyZodSchema: z.ZodObject<{
    data: z.ZodUnion<readonly [z.ZodType<Prisma.SessionCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.SessionCreateManyInput, unknown>>, z.ZodArray<z.ZodType<Prisma.SessionCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.SessionCreateManyInput, unknown>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=createManySession.schema.d.ts.map