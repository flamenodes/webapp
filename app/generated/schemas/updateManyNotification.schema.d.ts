import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const NotificationUpdateManySchema: z.ZodType<Prisma.NotificationUpdateManyArgs>;
export declare const NotificationUpdateManyZodSchema: z.ZodObject<{
    data: z.ZodType<Prisma.NotificationUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.NotificationUpdateManyMutationInput, unknown>>;
    where: z.ZodOptional<z.ZodType<Prisma.NotificationWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.NotificationWhereInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=updateManyNotification.schema.d.ts.map