import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const UserCreateNestedOneWithoutAssignedTicketsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutAssignedTicketsInput>;
export declare const UserCreateNestedOneWithoutAssignedTicketsInputObjectZodSchema: z.ZodObject<{
    create: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserCreateWithoutAssignedTicketsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateWithoutAssignedTicketsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedCreateWithoutAssignedTicketsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedCreateWithoutAssignedTicketsInput, unknown>>>]>>;
    connectOrCreate: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserCreateOrConnectWithoutAssignedTicketsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateOrConnectWithoutAssignedTicketsInput, unknown>>>>;
    connect: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereUniqueInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=UserCreateNestedOneWithoutAssignedTicketsInput.schema.d.ts.map