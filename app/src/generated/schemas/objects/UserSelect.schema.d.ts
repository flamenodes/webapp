import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const UserSelectObjectSchema: z.ZodType<Prisma.UserSelect>;
export declare const UserSelectObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodBoolean>;
    clientId: z.ZodOptional<z.ZodBoolean>;
    name: z.ZodOptional<z.ZodBoolean>;
    email: z.ZodOptional<z.ZodBoolean>;
    emailVerified: z.ZodOptional<z.ZodBoolean>;
    image: z.ZodOptional<z.ZodBoolean>;
    createdAt: z.ZodOptional<z.ZodBoolean>;
    updatedAt: z.ZodOptional<z.ZodBoolean>;
    sessions: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodType<Prisma.SessionFindManyArgs<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.SessionFindManyArgs<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>]>>;
    accounts: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodType<Prisma.AccountFindManyArgs<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.AccountFindManyArgs<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>]>>;
    role: z.ZodOptional<z.ZodBoolean>;
    banned: z.ZodOptional<z.ZodBoolean>;
    banReason: z.ZodOptional<z.ZodBoolean>;
    banExpires: z.ZodOptional<z.ZodBoolean>;
    username: z.ZodOptional<z.ZodBoolean>;
    firstname: z.ZodOptional<z.ZodBoolean>;
    lastname: z.ZodOptional<z.ZodBoolean>;
    servers: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodType<Prisma.ServerFindManyArgs<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ServerFindManyArgs<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>]>>;
    cart: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodObject<{
        select: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.CartSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.CartSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
        include: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.CartInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.CartInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
    }, z.core.$strict>>]>>;
    orders: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodType<Prisma.OrderFindManyArgs<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.OrderFindManyArgs<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>]>>;
    displayUsername: z.ZodOptional<z.ZodBoolean>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodObject<{
        select: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserCountOutputTypeSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.UserCountOutputTypeSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
    }, z.core.$strict>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=UserSelect.schema.d.ts.map