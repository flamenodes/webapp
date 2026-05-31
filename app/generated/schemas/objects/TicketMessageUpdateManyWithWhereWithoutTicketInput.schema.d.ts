import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketMessageUpdateManyWithWhereWithoutTicketInputObjectSchema: z.ZodType<Prisma.TicketMessageUpdateManyWithWhereWithoutTicketInput>;
export declare const TicketMessageUpdateManyWithWhereWithoutTicketInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.TicketMessageScalarWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageScalarWhereInput, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.TicketMessageUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageUpdateManyMutationInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.TicketMessageUncheckedUpdateManyWithoutTicketInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageUncheckedUpdateManyWithoutTicketInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=TicketMessageUpdateManyWithWhereWithoutTicketInput.schema.d.ts.map