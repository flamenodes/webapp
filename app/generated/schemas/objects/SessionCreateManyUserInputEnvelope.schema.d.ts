import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const SessionCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.SessionCreateManyUserInputEnvelope>;
export declare const SessionCreateManyUserInputEnvelopeObjectZodSchema: z.ZodObject<{
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.SessionCreateManyUserInput, unknown, z.core.$ZodTypeInternals<Prisma.SessionCreateManyUserInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.SessionCreateManyUserInput, unknown, z.core.$ZodTypeInternals<Prisma.SessionCreateManyUserInput, unknown>>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=SessionCreateManyUserInputEnvelope.schema.d.ts.map