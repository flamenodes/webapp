import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketMessageUpdateWithWhereUniqueWithoutSenderInputObjectSchema: z.ZodType<Prisma.TicketMessageUpdateWithWhereUniqueWithoutSenderInput>;
export declare const TicketMessageUpdateWithWhereUniqueWithoutSenderInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.TicketMessageWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageWhereUniqueInput, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.TicketMessageUpdateWithoutSenderInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageUpdateWithoutSenderInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.TicketMessageUncheckedUpdateWithoutSenderInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageUncheckedUpdateWithoutSenderInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=TicketMessageUpdateWithWhereUniqueWithoutSenderInput.schema.d.ts.map