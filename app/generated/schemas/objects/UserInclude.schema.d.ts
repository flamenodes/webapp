import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const UserIncludeObjectSchema: z.ZodType<Prisma.UserInclude>;
export declare const UserIncludeObjectZodSchema: z.ZodObject<{
    sessions: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodType<Prisma.SessionFindManyArgs<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.SessionFindManyArgs<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>]>>;
    accounts: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodType<Prisma.AccountFindManyArgs<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.AccountFindManyArgs<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>]>>;
    servers: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodType<Prisma.ServerFindManyArgs<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ServerFindManyArgs<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>]>>;
    cart: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodObject<{
        select: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.CartSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.CartSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
        include: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.CartInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.CartInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
    }, z.core.$strict>>]>>;
    orders: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodType<Prisma.OrderFindManyArgs<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.OrderFindManyArgs<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>]>>;
    tickets: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodType<Prisma.TicketFindManyArgs<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.TicketFindManyArgs<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>]>>;
    assignedTickets: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodType<Prisma.TicketFindManyArgs<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.TicketFindManyArgs<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>]>>;
    ticketMessages: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodType<Prisma.TicketMessageFindManyArgs<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageFindManyArgs<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>]>>;
    notifications: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodType<Prisma.NotificationFindManyArgs<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.NotificationFindManyArgs<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>]>>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodObject<{
        select: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserCountOutputTypeSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.UserCountOutputTypeSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
    }, z.core.$strict>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=UserInclude.schema.d.ts.map