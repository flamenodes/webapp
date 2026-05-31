import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const NotificationUpdateManyAndReturnSchema: z.ZodType<Prisma.NotificationUpdateManyAndReturnArgs>;
export declare const NotificationUpdateManyAndReturnZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.NotificationSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.NotificationSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodType<Prisma.NotificationUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.NotificationUpdateManyMutationInput, unknown>>;
    where: z.ZodOptional<z.ZodType<Prisma.NotificationWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.NotificationWhereInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=updateManyAndReturnNotification.schema.d.ts.map