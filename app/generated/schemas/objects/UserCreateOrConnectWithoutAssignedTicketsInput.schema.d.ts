import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const UserCreateOrConnectWithoutAssignedTicketsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutAssignedTicketsInput>;
export declare const UserCreateOrConnectWithoutAssignedTicketsInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.UserWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereUniqueInput, unknown>>>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserCreateWithoutAssignedTicketsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateWithoutAssignedTicketsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedCreateWithoutAssignedTicketsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedCreateWithoutAssignedTicketsInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=UserCreateOrConnectWithoutAssignedTicketsInput.schema.d.ts.map