import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketMessageScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.TicketMessageScalarWhereWithAggregatesInput>;
export declare const TicketMessageScalarWhereWithAggregatesInputObjectZodSchema: z.ZodObject<{
    AND: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.TicketMessageScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageScalarWhereWithAggregatesInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.TicketMessageScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageScalarWhereWithAggregatesInput, unknown>>>>]>>;
    OR: z.ZodOptional<z.ZodArray<z.ZodLazy<z.ZodType<Prisma.TicketMessageScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageScalarWhereWithAggregatesInput, unknown>>>>>;
    NOT: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.TicketMessageScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageScalarWhereWithAggregatesInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.TicketMessageScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageScalarWhereWithAggregatesInput, unknown>>>>]>>;
    id: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringWithAggregatesFilter<never>, unknown>>>, z.ZodString]>>;
    ticketId: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringWithAggregatesFilter<never>, unknown>>>, z.ZodString]>>;
    senderId: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringWithAggregatesFilter<never>, unknown>>>, z.ZodString]>>;
    senderRole: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.EnumSenderRoleWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.EnumSenderRoleWithAggregatesFilter<never>, unknown>>>, z.ZodEnum<{
        USER: "USER";
        SUPPORT: "SUPPORT";
        ADMIN: "ADMIN";
    }>]>>;
    content: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringWithAggregatesFilter<never>, unknown>>>, z.ZodString]>>;
    attachments: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.JsonNullableWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.JsonNullableWithAggregatesFilter<never>, unknown>>>>;
    createdAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.DateTimeWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeWithAggregatesFilter<never>, unknown>>>, z.ZodCoercedDate<unknown>]>>;
}, z.core.$strict>;
//# sourceMappingURL=TicketMessageScalarWhereWithAggregatesInput.schema.d.ts.map