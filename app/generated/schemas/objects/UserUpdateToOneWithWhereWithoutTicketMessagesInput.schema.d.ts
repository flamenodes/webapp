import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const UserUpdateToOneWithWhereWithoutTicketMessagesInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutTicketMessagesInput>;
export declare const UserUpdateToOneWithWhereWithoutTicketMessagesInputObjectZodSchema: z.ZodObject<{
    where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereInput, unknown>>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserUpdateWithoutTicketMessagesInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUpdateWithoutTicketMessagesInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedUpdateWithoutTicketMessagesInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedUpdateWithoutTicketMessagesInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=UserUpdateToOneWithWhereWithoutTicketMessagesInput.schema.d.ts.map