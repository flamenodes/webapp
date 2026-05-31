import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const UserUpdateToOneWithWhereWithoutAssignedTicketsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAssignedTicketsInput>;
export declare const UserUpdateToOneWithWhereWithoutAssignedTicketsInputObjectZodSchema: z.ZodObject<{
    where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereInput, unknown>>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserUpdateWithoutAssignedTicketsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUpdateWithoutAssignedTicketsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedUpdateWithoutAssignedTicketsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedUpdateWithoutAssignedTicketsInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=UserUpdateToOneWithWhereWithoutAssignedTicketsInput.schema.d.ts.map