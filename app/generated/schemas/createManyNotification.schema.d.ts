import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const NotificationCreateManySchema: z.ZodType<Prisma.NotificationCreateManyArgs>;
export declare const NotificationCreateManyZodSchema: z.ZodObject<{
    data: z.ZodUnion<readonly [z.ZodType<Prisma.NotificationCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.NotificationCreateManyInput, unknown>>, z.ZodArray<z.ZodType<Prisma.NotificationCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.NotificationCreateManyInput, unknown>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=createManyNotification.schema.d.ts.map