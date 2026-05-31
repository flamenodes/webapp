import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const NotificationUpdateOneSchema: z.ZodType<Prisma.NotificationUpdateArgs>;
export declare const NotificationUpdateOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.NotificationSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.NotificationSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.NotificationInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.NotificationInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.NotificationUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.NotificationUpdateInput, unknown>>, z.ZodType<Prisma.NotificationUncheckedUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.NotificationUncheckedUpdateInput, unknown>>]>;
    where: z.ZodType<Prisma.NotificationWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.NotificationWhereUniqueInput, unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=updateOneNotification.schema.d.ts.map