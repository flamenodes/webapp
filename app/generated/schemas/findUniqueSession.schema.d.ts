import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const SessionFindUniqueSchema: z.ZodType<Prisma.SessionFindUniqueArgs>;
export declare const SessionFindUniqueZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.SessionSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.SessionSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.SessionInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.SessionInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    where: z.ZodType<Prisma.SessionWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.SessionWhereUniqueInput, unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=findUniqueSession.schema.d.ts.map