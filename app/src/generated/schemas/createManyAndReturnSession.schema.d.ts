import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const SessionCreateManyAndReturnSchema: z.ZodType<Prisma.SessionCreateManyAndReturnArgs>;
export declare const SessionCreateManyAndReturnZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.SessionSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.SessionSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.SessionCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.SessionCreateManyInput, unknown>>, z.ZodArray<z.ZodType<Prisma.SessionCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.SessionCreateManyInput, unknown>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=createManyAndReturnSession.schema.d.ts.map