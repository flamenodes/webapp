import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketUpdateToOneWithWhereWithoutMessagesInputObjectSchema: z.ZodType<Prisma.TicketUpdateToOneWithWhereWithoutMessagesInput>;
export declare const TicketUpdateToOneWithWhereWithoutMessagesInputObjectZodSchema: z.ZodObject<{
    where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.TicketWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketWhereInput, unknown>>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.TicketUpdateWithoutMessagesInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketUpdateWithoutMessagesInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.TicketUncheckedUpdateWithoutMessagesInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketUncheckedUpdateWithoutMessagesInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=TicketUpdateToOneWithWhereWithoutMessagesInput.schema.d.ts.map