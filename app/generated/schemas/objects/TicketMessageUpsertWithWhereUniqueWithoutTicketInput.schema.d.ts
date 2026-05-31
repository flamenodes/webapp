import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketMessageUpsertWithWhereUniqueWithoutTicketInputObjectSchema: z.ZodType<Prisma.TicketMessageUpsertWithWhereUniqueWithoutTicketInput>;
export declare const TicketMessageUpsertWithWhereUniqueWithoutTicketInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.TicketMessageWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageWhereUniqueInput, unknown>>>;
    update: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.TicketMessageUpdateWithoutTicketInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageUpdateWithoutTicketInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.TicketMessageUncheckedUpdateWithoutTicketInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageUncheckedUpdateWithoutTicketInput, unknown>>>]>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.TicketMessageCreateWithoutTicketInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageCreateWithoutTicketInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.TicketMessageUncheckedCreateWithoutTicketInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageUncheckedCreateWithoutTicketInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=TicketMessageUpsertWithWhereUniqueWithoutTicketInput.schema.d.ts.map