import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const NotificationCreateManyAndReturnSchema: z.ZodType<Prisma.NotificationCreateManyAndReturnArgs>;
export declare const NotificationCreateManyAndReturnZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.NotificationSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.NotificationSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.NotificationCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.NotificationCreateManyInput, unknown>>, z.ZodArray<z.ZodType<Prisma.NotificationCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.NotificationCreateManyInput, unknown>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=createManyAndReturnNotification.schema.d.ts.map