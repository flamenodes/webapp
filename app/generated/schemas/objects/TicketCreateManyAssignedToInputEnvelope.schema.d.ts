import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const TicketCreateManyAssignedToInputEnvelopeObjectSchema: z.ZodType<Prisma.TicketCreateManyAssignedToInputEnvelope>;
export declare const TicketCreateManyAssignedToInputEnvelopeObjectZodSchema: z.ZodObject<{
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.TicketCreateManyAssignedToInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCreateManyAssignedToInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.TicketCreateManyAssignedToInput, unknown, z.core.$ZodTypeInternals<Prisma.TicketCreateManyAssignedToInput, unknown>>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=TicketCreateManyAssignedToInputEnvelope.schema.d.ts.map