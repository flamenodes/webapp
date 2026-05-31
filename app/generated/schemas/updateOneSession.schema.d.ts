import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const SessionUpdateOneSchema: z.ZodType<Prisma.SessionUpdateArgs>;
export declare const SessionUpdateOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.SessionSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.SessionSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.SessionInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.SessionInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.SessionUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.SessionUpdateInput, unknown>>, z.ZodType<Prisma.SessionUncheckedUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.SessionUncheckedUpdateInput, unknown>>]>;
    where: z.ZodType<Prisma.SessionWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.SessionWhereUniqueInput, unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=updateOneSession.schema.d.ts.map