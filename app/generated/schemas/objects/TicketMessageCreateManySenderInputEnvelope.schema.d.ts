import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketMessageCreateManySenderInputEnvelopeObjectSchema: z.ZodType<Prisma.TicketMessageCreateManySenderInputEnvelope>;
export declare const TicketMessageCreateManySenderInputEnvelopeObjectZodSchema: z.ZodObject<{
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.TicketMessageCreateManySenderInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageCreateManySenderInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.TicketMessageCreateManySenderInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketMessageCreateManySenderInput, unknown>>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=TicketMessageCreateManySenderInputEnvelope.schema.d.ts.map