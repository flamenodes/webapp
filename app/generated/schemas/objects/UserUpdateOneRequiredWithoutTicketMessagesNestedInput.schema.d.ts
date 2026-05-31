import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const UserUpdateOneRequiredWithoutTicketMessagesNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutTicketMessagesNestedInput>;
export declare const UserUpdateOneRequiredWithoutTicketMessagesNestedInputObjectZodSchema: z.ZodObject<{
    create: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserCreateWithoutTicketMessagesInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateWithoutTicketMessagesInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedCreateWithoutTicketMessagesInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedCreateWithoutTicketMessagesInput, unknown>>>]>>;
    connectOrCreate: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserCreateOrConnectWithoutTicketMessagesInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateOrConnectWithoutTicketMessagesInput, unknown>>>>;
    upsert: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserUpsertWithoutTicketMessagesInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUpsertWithoutTicketMessagesInput, unknown>>>>;
    connect: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereUniqueInput, unknown>>>>;
    update: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutTicketMessagesInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUpdateToOneWithWhereWithoutTicketMessagesInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUpdateWithoutTicketMessagesInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUpdateWithoutTicketMessagesInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedUpdateWithoutTicketMessagesInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedUpdateWithoutTicketMessagesInput, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=UserUpdateOneRequiredWithoutTicketMessagesNestedInput.schema.d.ts.map