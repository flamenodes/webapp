import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.TicketUpdateManyWithWhereWithoutUserInput>;
export declare const TicketUpdateManyWithWhereWithoutUserInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.TicketScalarWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketScalarWhereInput, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.TicketUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketUpdateManyMutationInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.TicketUncheckedUpdateManyWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketUncheckedUpdateManyWithoutUserInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=TicketUpdateManyWithWhereWithoutUserInput.schema.d.ts.map