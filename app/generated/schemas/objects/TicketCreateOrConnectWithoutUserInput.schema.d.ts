import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.TicketCreateOrConnectWithoutUserInput>;
export declare const TicketCreateOrConnectWithoutUserInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.TicketWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketWhereUniqueInput, unknown>>>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.TicketCreateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCreateWithoutUserInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.TicketUncheckedCreateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketUncheckedCreateWithoutUserInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=TicketCreateOrConnectWithoutUserInput.schema.d.ts.map