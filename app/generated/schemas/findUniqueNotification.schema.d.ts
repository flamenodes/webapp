import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const NotificationFindUniqueSchema: z.ZodType<Prisma.NotificationFindUniqueArgs>;
export declare const NotificationFindUniqueZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.NotificationSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.NotificationSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.NotificationInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.NotificationInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    where: z.ZodType<Prisma.NotificationWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.NotificationWhereUniqueInput, unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=findUniqueNotification.schema.d.ts.map