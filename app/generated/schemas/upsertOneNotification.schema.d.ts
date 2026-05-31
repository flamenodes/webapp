import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const NotificationUpsertOneSchema: z.ZodType<Prisma.NotificationUpsertArgs>;
export declare const NotificationUpsertOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.NotificationSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.NotificationSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.NotificationInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.NotificationInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    where: z.ZodType<Prisma.NotificationWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.NotificationWhereUniqueInput, unknown>>;
    create: z.ZodUnion<readonly [z.ZodType<Prisma.NotificationCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.NotificationCreateInput, unknown>>, z.ZodType<Prisma.NotificationUncheckedCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.NotificationUncheckedCreateInput, unknown>>]>;
    update: z.ZodUnion<readonly [z.ZodType<Prisma.NotificationUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.NotificationUpdateInput, unknown>>, z.ZodType<Prisma.NotificationUncheckedUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.NotificationUncheckedUpdateInput, unknown>>]>;
}, z.core.$strict>;
//# sourceMappingURL=upsertOneNotification.schema.d.ts.map