import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketMessageCreateManyTicketInputEnvelopeObjectSchema: z.ZodType<Prisma.TicketMessageCreateManyTicketInputEnvelope>;
export declare const TicketMessageCreateManyTicketInputEnvelopeObjectZodSchema: z.ZodObject<{
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.TicketMessageCreateManyTicketInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageCreateManyTicketInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.TicketMessageCreateManyTicketInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageCreateManyTicketInput, unknown>>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=TicketMessageCreateManyTicketInputEnvelope.schema.d.ts.map