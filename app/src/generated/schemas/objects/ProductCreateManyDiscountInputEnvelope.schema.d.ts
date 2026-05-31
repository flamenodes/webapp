import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const ProductCreateManyDiscountInputEnvelopeObjectSchema: z.ZodType<Prisma.ProductCreateManyDiscountInputEnvelope>;
export declare const ProductCreateManyDiscountInputEnvelopeObjectZodSchema: z.ZodObject<{
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductCreateManyDiscountInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCreateManyDiscountInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.ProductCreateManyDiscountInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCreateManyDiscountInput, unknown>>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=ProductCreateManyDiscountInputEnvelope.schema.d.ts.map