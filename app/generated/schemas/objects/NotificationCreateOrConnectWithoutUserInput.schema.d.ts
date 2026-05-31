import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const NotificationCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.NotificationCreateOrConnectWithoutUserInput>;
export declare const NotificationCreateOrConnectWithoutUserInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.NotificationWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.NotificationWhereUniqueInput, unknown>>>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.NotificationCreateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.NotificationCreateWithoutUserInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.NotificationUncheckedCreateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.NotificationUncheckedCreateWithoutUserInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=NotificationCreateOrConnectWithoutUserInput.schema.d.ts.map