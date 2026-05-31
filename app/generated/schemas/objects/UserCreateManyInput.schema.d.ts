import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const UserCreateManyInputObjectSchema: z.ZodType<Prisma.UserCreateManyInput>;
export declare const UserCreateManyInputObjectZodSchema: z.ZodObject<{
    id: z.ZodString;
    clientId: z.ZodString;
    name: z.ZodString;
    email: z.ZodString;
    emailVerified: z.ZodOptional<z.ZodBoolean>;
    image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    createdAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    updatedAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    role: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    banned: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
    banReason: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    banExpires: z.ZodNullable<z.ZodOptional<z.ZodCoercedDate<unknown>>>;
    username: z.ZodString;
    firstname: z.ZodString;
    lastname: z.ZodString;
    pteroUserId: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    address: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    city: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    zip: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    country: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    displayUsername: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, z.core.$strict>;
//# sourceMappingURL=UserCreateManyInput.schema.d.ts.map