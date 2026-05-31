import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const NotificationCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.NotificationCreateManyUserInputEnvelope>;
export declare const NotificationCreateManyUserInputEnvelopeObjectZodSchema: z.ZodObject<{
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.NotificationCreateManyUserInput, unknown, z.core.$ZodTypeInternals<Prisma.NotificationCreateManyUserInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.NotificationCreateManyUserInput, unknown, z.core.$ZodTypeInternals<Prisma.NotificationCreateManyUserInput, unknown>>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=NotificationCreateManyUserInputEnvelope.schema.d.ts.map