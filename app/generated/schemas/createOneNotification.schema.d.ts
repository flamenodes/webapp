import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const NotificationCreateOneSchema: z.ZodType<Prisma.NotificationCreateArgs>;
export declare const NotificationCreateOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.NotificationSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.NotificationSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.NotificationInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.NotificationInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.NotificationCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.NotificationCreateInput, unknown>>, z.ZodType<Prisma.NotificationUncheckedCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.NotificationUncheckedCreateInput, unknown>>]>;
}, z.core.$strict>;
//# sourceMappingURL=createOneNotification.schema.d.ts.map