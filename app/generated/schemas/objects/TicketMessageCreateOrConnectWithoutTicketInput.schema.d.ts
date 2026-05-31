import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketMessageCreateOrConnectWithoutTicketInputObjectSchema: z.ZodType<Prisma.TicketMessageCreateOrConnectWithoutTicketInput>;
export declare const TicketMessageCreateOrConnectWithoutTicketInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.TicketMessageWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageWhereUniqueInput, unknown>>>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.TicketMessageCreateWithoutTicketInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageCreateWithoutTicketInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.TicketMessageUncheckedCreateWithoutTicketInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageUncheckedCreateWithoutTicketInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=TicketMessageCreateOrConnectWithoutTicketInput.schema.d.ts.map