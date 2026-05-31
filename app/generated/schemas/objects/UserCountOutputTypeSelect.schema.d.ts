import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const UserCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect>;
export declare const UserCountOutputTypeSelectObjectZodSchema: z.ZodObject<{
    sessions: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodObject<{
        where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.SessionWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.SessionWhereInput, unknown>>>>;
    }, z.core.$strict>>]>>;
    accounts: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodObject<{
        where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.AccountWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountWhereInput, unknown>>>>;
    }, z.core.$strict>>]>>;
    servers: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodObject<{
        where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ServerWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerWhereInput, unknown>>>>;
    }, z.core.$strict>>]>>;
    orders: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodObject<{
        where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.OrderWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderWhereInput, unknown>>>>;
    }, z.core.$strict>>]>>;
    tickets: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodObject<{
        where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.TicketWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketWhereInput, unknown>>>>;
    }, z.core.$strict>>]>>;
    assignedTickets: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodObject<{
        where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.TicketWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketWhereInput, unknown>>>>;
    }, z.core.$strict>>]>>;
    ticketMessages: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodObject<{
        where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.TicketMessageWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageWhereInput, unknown>>>>;
    }, z.core.$strict>>]>>;
    notifications: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodObject<{
        where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NotificationWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.NotificationWhereInput, unknown>>>>;
    }, z.core.$strict>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=UserCountOutputTypeSelect.schema.d.ts.map