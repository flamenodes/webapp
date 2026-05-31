import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.TicketUpsertWithWhereUniqueWithoutUserInput>;
export declare const TicketUpsertWithWhereUniqueWithoutUserInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.TicketWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketWhereUniqueInput, unknown>>>;
    update: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.TicketUpdateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketUpdateWithoutUserInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.TicketUncheckedUpdateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketUncheckedUpdateWithoutUserInput, unknown>>>]>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.TicketCreateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCreateWithoutUserInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.TicketUncheckedCreateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketUncheckedCreateWithoutUserInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=TicketUpsertWithWhereUniqueWithoutUserInput.schema.d.ts.map