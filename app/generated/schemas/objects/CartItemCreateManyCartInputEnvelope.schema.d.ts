import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const CartItemCreateManyCartInputEnvelopeObjectSchema: z.ZodType<Prisma.CartItemCreateManyCartInputEnvelope>;
export declare const CartItemCreateManyCartInputEnvelopeObjectZodSchema: z.ZodObject<{
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.CartItemCreateManyCartInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemCreateManyCartInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.CartItemCreateManyCartInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemCreateManyCartInput, unknown>>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=CartItemCreateManyCartInputEnvelope.schema.d.ts.map