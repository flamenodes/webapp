import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const SessionUpsertOneSchema: z.ZodType<Prisma.SessionUpsertArgs>;
export declare const SessionUpsertOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.SessionSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.SessionSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.SessionInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.SessionInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    where: z.ZodType<Prisma.SessionWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.SessionWhereUniqueInput, unknown>>;
    create: z.ZodUnion<readonly [z.ZodType<Prisma.SessionCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.SessionCreateInput, unknown>>, z.ZodType<Prisma.SessionUncheckedCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.SessionUncheckedCreateInput, unknown>>]>;
    update: z.ZodUnion<readonly [z.ZodType<Prisma.SessionUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.SessionUpdateInput, unknown>>, z.ZodType<Prisma.SessionUncheckedUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.SessionUncheckedUpdateInput, unknown>>]>;
}, z.core.$strict>;
//# sourceMappingURL=upsertOneSession.schema.d.ts.map