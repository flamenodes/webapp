import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.TicketCreateManyUserInputEnvelope>;
export declare const TicketCreateManyUserInputEnvelopeObjectZodSchema: z.ZodObject<{
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.TicketCreateManyUserInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCreateManyUserInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.TicketCreateManyUserInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCreateManyUserInput, unknown>>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=TicketCreateManyUserInputEnvelope.schema.d.ts.map