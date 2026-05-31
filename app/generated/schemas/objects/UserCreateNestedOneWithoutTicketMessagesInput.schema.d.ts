import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const UserCreateNestedOneWithoutTicketMessagesInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutTicketMessagesInput>;
export declare const UserCreateNestedOneWithoutTicketMessagesInputObjectZodSchema: z.ZodObject<{
    create: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserCreateWithoutTicketMessagesInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateWithoutTicketMessagesInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedCreateWithoutTicketMessagesInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedCreateWithoutTicketMessagesInput, unknown>>>]>>;
    connectOrCreate: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserCreateOrConnectWithoutTicketMessagesInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateOrConnectWithoutTicketMessagesInput, unknown>>>>;
    connect: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereUniqueInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=UserCreateNestedOneWithoutTicketMessagesInput.schema.d.ts.map