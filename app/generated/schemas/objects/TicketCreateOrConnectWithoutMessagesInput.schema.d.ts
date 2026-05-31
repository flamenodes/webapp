import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketCreateOrConnectWithoutMessagesInputObjectSchema: z.ZodType<Prisma.TicketCreateOrConnectWithoutMessagesInput>;
export declare const TicketCreateOrConnectWithoutMessagesInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.TicketWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketWhereUniqueInput, unknown>>>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.TicketCreateWithoutMessagesInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCreateWithoutMessagesInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.TicketUncheckedCreateWithoutMessagesInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketUncheckedCreateWithoutMessagesInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=TicketCreateOrConnectWithoutMessagesInput.schema.d.ts.map