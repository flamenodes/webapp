import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const CartItemCreateManyProductInputEnvelopeObjectSchema: z.ZodType<Prisma.CartItemCreateManyProductInputEnvelope>;
export declare const CartItemCreateManyProductInputEnvelopeObjectZodSchema: z.ZodObject<{
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.CartItemCreateManyProductInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemCreateManyProductInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.CartItemCreateManyProductInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemCreateManyProductInput, unknown>>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=CartItemCreateManyProductInputEnvelope.schema.d.ts.map