import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.TicketUpdateWithWhereUniqueWithoutUserInput>;
export declare const TicketUpdateWithWhereUniqueWithoutUserInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.TicketWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketWhereUniqueInput, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.TicketUpdateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketUpdateWithoutUserInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.TicketUncheckedUpdateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketUncheckedUpdateWithoutUserInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=TicketUpdateWithWhereUniqueWithoutUserInput.schema.d.ts.map