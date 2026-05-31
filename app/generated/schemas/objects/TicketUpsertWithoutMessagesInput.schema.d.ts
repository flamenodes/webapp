import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketUpsertWithoutMessagesInputObjectSchema: z.ZodType<Prisma.TicketUpsertWithoutMessagesInput>;
export declare const TicketUpsertWithoutMessagesInputObjectZodSchema: z.ZodObject<{
    update: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.TicketUpdateWithoutMessagesInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketUpdateWithoutMessagesInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.TicketUncheckedUpdateWithoutMessagesInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketUncheckedUpdateWithoutMessagesInput, unknown>>>]>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.TicketCreateWithoutMessagesInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCreateWithoutMessagesInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.TicketUncheckedCreateWithoutMessagesInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketUncheckedCreateWithoutMessagesInput, unknown>>>]>;
    where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.TicketWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketWhereInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=TicketUpsertWithoutMessagesInput.schema.d.ts.map