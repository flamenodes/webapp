import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketCreateNestedOneWithoutMessagesInputObjectSchema: z.ZodType<Prisma.TicketCreateNestedOneWithoutMessagesInput>;
export declare const TicketCreateNestedOneWithoutMessagesInputObjectZodSchema: z.ZodObject<{
    create: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.TicketCreateWithoutMessagesInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCreateWithoutMessagesInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.TicketUncheckedCreateWithoutMessagesInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketUncheckedCreateWithoutMessagesInput, unknown>>>]>>;
    connectOrCreate: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.TicketCreateOrConnectWithoutMessagesInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCreateOrConnectWithoutMessagesInput, unknown>>>>;
    connect: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.TicketWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketWhereUniqueInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=TicketCreateNestedOneWithoutMessagesInput.schema.d.ts.map