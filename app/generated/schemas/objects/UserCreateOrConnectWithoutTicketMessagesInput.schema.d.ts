import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const UserCreateOrConnectWithoutTicketMessagesInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutTicketMessagesInput>;
export declare const UserCreateOrConnectWithoutTicketMessagesInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.UserWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereUniqueInput, unknown>>>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserCreateWithoutTicketMessagesInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateWithoutTicketMessagesInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedCreateWithoutTicketMessagesInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedCreateWithoutTicketMessagesInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=UserCreateOrConnectWithoutTicketMessagesInput.schema.d.ts.map