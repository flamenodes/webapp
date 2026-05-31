import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const NotificationUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.NotificationUpsertWithWhereUniqueWithoutUserInput>;
export declare const NotificationUpsertWithWhereUniqueWithoutUserInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.NotificationWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.NotificationWhereUniqueInput, unknown>>>;
    update: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.NotificationUpdateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.NotificationUpdateWithoutUserInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.NotificationUncheckedUpdateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.NotificationUncheckedUpdateWithoutUserInput, unknown>>>]>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.NotificationCreateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.NotificationCreateWithoutUserInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.NotificationUncheckedCreateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.NotificationUncheckedCreateWithoutUserInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=NotificationUpsertWithWhereUniqueWithoutUserInput.schema.d.ts.map