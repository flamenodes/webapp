import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ProductFeatureCreateManyProductInputObjectSchema as ProductFeatureCreateManyProductInputObjectSchema } from './ProductFeatureCreateManyProductInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ProductFeatureCreateManyProductInputObjectSchema), z.lazy(() => ProductFeatureCreateManyProductInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ProductFeatureCreateManyProductInputEnvelopeObjectSchema: z.ZodType<Prisma.ProductFeatureCreateManyProductInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ProductFeatureCreateManyProductInputEnvelope>;
export const ProductFeatureCreateManyProductInputEnvelopeObjectZodSchema = makeSchema();
