import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductBillingOptionCreateManyProductInputEnvelopeObjectSchema: z.ZodType<Prisma.ProductBillingOptionCreateManyProductInputEnvelope>;
export declare const ProductBillingOptionCreateManyProductInputEnvelopeObjectZodSchema: z.ZodObject<{
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductBillingOptionCreateManyProductInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionCreateManyProductInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.ProductBillingOptionCreateManyProductInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionCreateManyProductInput, unknown>>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=ProductBillingOptionCreateManyProductInputEnvelope.schema.d.ts.map