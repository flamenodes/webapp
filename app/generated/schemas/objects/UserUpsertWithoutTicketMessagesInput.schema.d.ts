import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const UserUpsertWithoutTicketMessagesInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutTicketMessagesInput>;
export declare const UserUpsertWithoutTicketMessagesInputObjectZodSchema: z.ZodObject<{
    update: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserUpdateWithoutTicketMessagesInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUpdateWithoutTicketMessagesInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedUpdateWithoutTicketMessagesInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedUpdateWithoutTicketMessagesInput, unknown>>>]>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserCreateWithoutTicketMessagesInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateWithoutTicketMessagesInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedCreateWithoutTicketMessagesInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedCreateWithoutTicketMessagesInput, unknown>>>]>;
    where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=UserUpsertWithoutTicketMessagesInput.schema.d.ts.map