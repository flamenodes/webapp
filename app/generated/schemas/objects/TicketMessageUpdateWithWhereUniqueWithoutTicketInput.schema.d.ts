import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketMessageUpdateWithWhereUniqueWithoutTicketInputObjectSchema: z.ZodType<Prisma.TicketMessageUpdateWithWhereUniqueWithoutTicketInput>;
export declare const TicketMessageUpdateWithWhereUniqueWithoutTicketInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.TicketMessageWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageWhereUniqueInput, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.TicketMessageUpdateWithoutTicketInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageUpdateWithoutTicketInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.TicketMessageUncheckedUpdateWithoutTicketInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageUncheckedUpdateWithoutTicketInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=TicketMessageUpdateWithWhereUniqueWithoutTicketInput.schema.d.ts.map