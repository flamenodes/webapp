import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const SessionCreateOneSchema: z.ZodType<Prisma.SessionCreateArgs>;
export declare const SessionCreateOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.SessionSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.SessionSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.SessionInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.SessionInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.SessionCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.SessionCreateInput, unknown>>, z.ZodType<Prisma.SessionUncheckedCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.SessionUncheckedCreateInput, unknown>>]>;
}, z.core.$strict>;
//# sourceMappingURL=createOneSession.schema.d.ts.map