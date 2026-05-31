import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketCreateOrConnectWithoutAssignedToInputObjectSchema: z.ZodType<Prisma.TicketCreateOrConnectWithoutAssignedToInput>;
export declare const TicketCreateOrConnectWithoutAssignedToInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.TicketWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketWhereUniqueInput, unknown>>>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.TicketCreateWithoutAssignedToInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCreateWithoutAssignedToInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.TicketUncheckedCreateWithoutAssignedToInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketUncheckedCreateWithoutAssignedToInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=TicketCreateOrConnectWithoutAssignedToInput.schema.d.ts.map