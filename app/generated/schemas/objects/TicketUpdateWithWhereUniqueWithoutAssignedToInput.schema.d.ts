import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketUpdateWithWhereUniqueWithoutAssignedToInputObjectSchema: z.ZodType<Prisma.TicketUpdateWithWhereUniqueWithoutAssignedToInput>;
export declare const TicketUpdateWithWhereUniqueWithoutAssignedToInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.TicketWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketWhereUniqueInput, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.TicketUpdateWithoutAssignedToInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketUpdateWithoutAssignedToInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.TicketUncheckedUpdateWithoutAssignedToInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketUncheckedUpdateWithoutAssignedToInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=TicketUpdateWithWhereUniqueWithoutAssignedToInput.schema.d.ts.map