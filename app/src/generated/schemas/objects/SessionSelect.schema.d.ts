import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const SessionSelectObjectSchema: z.ZodType<Prisma.SessionSelect>;
export declare const SessionSelectObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodBoolean>;
    expiresAt: z.ZodOptional<z.ZodBoolean>;
    token: z.ZodOptional<z.ZodBoolean>;
    createdAt: z.ZodOptional<z.ZodBoolean>;
    updatedAt: z.ZodOptional<z.ZodBoolean>;
    ipAddress: z.ZodOptional<z.ZodBoolean>;
    userAgent: z.ZodOptional<z.ZodBoolean>;
    userId: z.ZodOptional<z.ZodBoolean>;
    user: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodObject<{
        select: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.UserSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
        include: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.UserInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
    }, z.core.$strict>>]>>;
    impersonatedBy: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=SessionSelect.schema.d.ts.map