import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketMessageWhereInputObjectSchema: z.ZodType<Prisma.TicketMessageWhereInput>;
export declare const TicketMessageWhereInputObjectZodSchema: z.ZodObject<{
    AND: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.TicketMessageWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageWhereInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.TicketMessageWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageWhereInput, unknown>>>>]>>;
    OR: z.ZodOptional<z.ZodArray<z.ZodLazy<z.ZodType<Prisma.TicketMessageWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageWhereInput, unknown>>>>>;
    NOT: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.TicketMessageWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageWhereInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.TicketMessageWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageWhereInput, unknown>>>>]>>;
    id: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringFilter<never>, unknown>>>, z.ZodString]>>;
    ticketId: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringFilter<never>, unknown>>>, z.ZodString]>>;
    senderId: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringFilter<never>, unknown>>>, z.ZodString]>>;
    senderRole: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.EnumSenderRoleFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.EnumSenderRoleFilter<never>, unknown>>>, z.ZodEnum<{
        USER: "USER";
        SUPPORT: "SUPPORT";
        ADMIN: "ADMIN";
    }>]>>;
    content: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringFilter<never>, unknown>>>, z.ZodString]>>;
    attachments: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.JsonNullableFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.JsonNullableFilter<never>, unknown>>>>;
    createdAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.DateTimeFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeFilter<never>, unknown>>>, z.ZodCoercedDate<unknown>]>>;
    ticket: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.TicketScalarRelationFilter, unknown, z.core.$ZodTypeInternals<Prisma.TicketScalarRelationFilter, unknown>>>, z.ZodLazy<z.ZodType<Prisma.TicketWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketWhereInput, unknown>>>]>>;
    sender: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserScalarRelationFilter, unknown, z.core.$ZodTypeInternals<Prisma.UserScalarRelationFilter, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereInput, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=TicketMessageWhereInput.schema.d.ts.map