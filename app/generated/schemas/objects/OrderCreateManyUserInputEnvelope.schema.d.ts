import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const OrderCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.OrderCreateManyUserInputEnvelope>;
export declare const OrderCreateManyUserInputEnvelopeObjectZodSchema: z.ZodObject<{
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.OrderCreateManyUserInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderCreateManyUserInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.OrderCreateManyUserInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderCreateManyUserInput, unknown>>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=OrderCreateManyUserInputEnvelope.schema.d.ts.map