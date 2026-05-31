import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketUpdateManyWithWhereWithoutAssignedToInputObjectSchema: z.ZodType<Prisma.TicketUpdateManyWithWhereWithoutAssignedToInput>;
export declare const TicketUpdateManyWithWhereWithoutAssignedToInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.TicketScalarWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketScalarWhereInput, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.TicketUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketUpdateManyMutationInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.TicketUncheckedUpdateManyWithoutAssignedToInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketUncheckedUpdateManyWithoutAssignedToInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=TicketUpdateManyWithWhereWithoutAssignedToInput.schema.d.ts.map