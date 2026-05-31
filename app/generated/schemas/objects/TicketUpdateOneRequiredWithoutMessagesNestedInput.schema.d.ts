import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketUpdateOneRequiredWithoutMessagesNestedInputObjectSchema: z.ZodType<Prisma.TicketUpdateOneRequiredWithoutMessagesNestedInput>;
export declare const TicketUpdateOneRequiredWithoutMessagesNestedInputObjectZodSchema: z.ZodObject<{
    create: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.TicketCreateWithoutMessagesInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCreateWithoutMessagesInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.TicketUncheckedCreateWithoutMessagesInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketUncheckedCreateWithoutMessagesInput, unknown>>>]>>;
    connectOrCreate: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.TicketCreateOrConnectWithoutMessagesInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCreateOrConnectWithoutMessagesInput, unknown>>>>;
    upsert: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.TicketUpsertWithoutMessagesInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketUpsertWithoutMessagesInput, unknown>>>>;
    connect: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.TicketWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketWhereUniqueInput, unknown>>>>;
    update: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.TicketUpdateToOneWithWhereWithoutMessagesInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketUpdateToOneWithWhereWithoutMessagesInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.TicketUpdateWithoutMessagesInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketUpdateWithoutMessagesInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.TicketUncheckedUpdateWithoutMessagesInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketUncheckedUpdateWithoutMessagesInput, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=TicketUpdateOneRequiredWithoutMessagesNestedInput.schema.d.ts.map