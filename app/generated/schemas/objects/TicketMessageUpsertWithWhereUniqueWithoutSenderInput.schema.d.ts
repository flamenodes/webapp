import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketMessageUpsertWithWhereUniqueWithoutSenderInputObjectSchema: z.ZodType<Prisma.TicketMessageUpsertWithWhereUniqueWithoutSenderInput>;
export declare const TicketMessageUpsertWithWhereUniqueWithoutSenderInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.TicketMessageWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageWhereUniqueInput, unknown>>>;
    update: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.TicketMessageUpdateWithoutSenderInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageUpdateWithoutSenderInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.TicketMessageUncheckedUpdateWithoutSenderInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageUncheckedUpdateWithoutSenderInput, unknown>>>]>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.TicketMessageCreateWithoutSenderInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageCreateWithoutSenderInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.TicketMessageUncheckedCreateWithoutSenderInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageUncheckedCreateWithoutSenderInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=TicketMessageUpsertWithWhereUniqueWithoutSenderInput.schema.d.ts.map