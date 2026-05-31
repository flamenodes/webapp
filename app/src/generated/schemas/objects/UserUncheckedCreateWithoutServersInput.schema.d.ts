import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const UserUncheckedCreateWithoutServersInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutServersInput>;
export declare const UserUncheckedCreateWithoutServersInputObjectZodSchema: z.ZodObject<{
    id: z.ZodString;
    clientId: z.ZodString;
    name: z.ZodString;
    email: z.ZodString;
    emailVerified: z.ZodOptional<z.ZodBoolean>;
    image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
    role: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    banned: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
    banReason: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    banExpires: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    username: z.ZodString;
    firstname: z.ZodString;
    lastname: z.ZodString;
    displayUsername: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    sessions: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.SessionUncheckedCreateNestedManyWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.SessionUncheckedCreateNestedManyWithoutUserInput, unknown>>>>;
    accounts: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.AccountUncheckedCreateNestedManyWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountUncheckedCreateNestedManyWithoutUserInput, unknown>>>>;
    cart: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.CartUncheckedCreateNestedOneWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.CartUncheckedCreateNestedOneWithoutUserInput, unknown>>>>;
    orders: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.OrderUncheckedCreateNestedManyWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderUncheckedCreateNestedManyWithoutUserInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=UserUncheckedCreateWithoutServersInput.schema.d.ts.map