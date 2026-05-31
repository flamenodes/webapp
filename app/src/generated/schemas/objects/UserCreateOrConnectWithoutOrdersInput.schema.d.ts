import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const UserCreateOrConnectWithoutOrdersInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutOrdersInput>;
export declare const UserCreateOrConnectWithoutOrdersInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.UserWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereUniqueInput, unknown>>>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserCreateWithoutOrdersInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateWithoutOrdersInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedCreateWithoutOrdersInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedCreateWithoutOrdersInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=UserCreateOrConnectWithoutOrdersInput.schema.d.ts.map