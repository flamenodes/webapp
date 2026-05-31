import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketMessageCreateOrConnectWithoutSenderInputObjectSchema: z.ZodType<Prisma.TicketMessageCreateOrConnectWithoutSenderInput>;
export declare const TicketMessageCreateOrConnectWithoutSenderInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.TicketMessageWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageWhereUniqueInput, unknown>>>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.TicketMessageCreateWithoutSenderInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageCreateWithoutSenderInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.TicketMessageUncheckedCreateWithoutSenderInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageUncheckedCreateWithoutSenderInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=TicketMessageCreateOrConnectWithoutSenderInput.schema.d.ts.map