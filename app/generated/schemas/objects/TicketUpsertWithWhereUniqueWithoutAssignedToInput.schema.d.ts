import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketUpsertWithWhereUniqueWithoutAssignedToInputObjectSchema: z.ZodType<Prisma.TicketUpsertWithWhereUniqueWithoutAssignedToInput>;
export declare const TicketUpsertWithWhereUniqueWithoutAssignedToInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.TicketWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketWhereUniqueInput, unknown>>>;
    update: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.TicketUpdateWithoutAssignedToInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketUpdateWithoutAssignedToInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.TicketUncheckedUpdateWithoutAssignedToInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketUncheckedUpdateWithoutAssignedToInput, unknown>>>]>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.TicketCreateWithoutAssignedToInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCreateWithoutAssignedToInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.TicketUncheckedCreateWithoutAssignedToInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketUncheckedCreateWithoutAssignedToInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=TicketUpsertWithWhereUniqueWithoutAssignedToInput.schema.d.ts.map