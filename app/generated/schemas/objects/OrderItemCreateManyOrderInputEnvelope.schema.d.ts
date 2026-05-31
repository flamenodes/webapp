import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const OrderItemCreateManyOrderInputEnvelopeObjectSchema: z.ZodType<Prisma.OrderItemCreateManyOrderInputEnvelope>;
export declare const OrderItemCreateManyOrderInputEnvelopeObjectZodSchema: z.ZodObject<{
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.OrderItemCreateManyOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemCreateManyOrderInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.OrderItemCreateManyOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemCreateManyOrderInput, unknown>>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=OrderItemCreateManyOrderInputEnvelope.schema.d.ts.map