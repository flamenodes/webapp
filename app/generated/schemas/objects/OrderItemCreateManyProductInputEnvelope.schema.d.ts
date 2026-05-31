import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const OrderItemCreateManyProductInputEnvelopeObjectSchema: z.ZodType<Prisma.OrderItemCreateManyProductInputEnvelope>;
export declare const OrderItemCreateManyProductInputEnvelopeObjectZodSchema: z.ZodObject<{
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.OrderItemCreateManyProductInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemCreateManyProductInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.OrderItemCreateManyProductInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemCreateManyProductInput, unknown>>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=OrderItemCreateManyProductInputEnvelope.schema.d.ts.map