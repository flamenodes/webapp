import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const NotificationUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.NotificationUpdateWithWhereUniqueWithoutUserInput>;
export declare const NotificationUpdateWithWhereUniqueWithoutUserInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.NotificationWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.NotificationWhereUniqueInput, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.NotificationUpdateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.NotificationUpdateWithoutUserInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.NotificationUncheckedUpdateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.NotificationUncheckedUpdateWithoutUserInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=NotificationUpdateWithWhereUniqueWithoutUserInput.schema.d.ts.map