import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const UserCreateWithoutServersInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutServersInput>;
export declare const UserCreateWithoutServersInputObjectZodSchema: z.ZodObject<{
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
    sessions: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.SessionCreateNestedManyWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.SessionCreateNestedManyWithoutUserInput, unknown>>>>;
    accounts: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.AccountCreateNestedManyWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountCreateNestedManyWithoutUserInput, unknown>>>>;
    cart: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.CartCreateNestedOneWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.CartCreateNestedOneWithoutUserInput, unknown>>>>;
    orders: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.OrderCreateNestedManyWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderCreateNestedManyWithoutUserInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=UserCreateWithoutServersInput.schema.d.ts.map