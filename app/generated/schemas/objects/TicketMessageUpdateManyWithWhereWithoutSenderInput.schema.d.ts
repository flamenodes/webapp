import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketMessageUpdateManyWithWhereWithoutSenderInputObjectSchema: z.ZodType<Prisma.TicketMessageUpdateManyWithWhereWithoutSenderInput>;
export declare const TicketMessageUpdateManyWithWhereWithoutSenderInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.TicketMessageScalarWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageScalarWhereInput, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.TicketMessageUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageUpdateManyMutationInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.TicketMessageUncheckedUpdateManyWithoutSenderInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageUncheckedUpdateManyWithoutSenderInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=TicketMessageUpdateManyWithWhereWithoutSenderInput.schema.d.ts.map