import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { ProductBillingOptionCreateManyProductInputObjectSchema as ProductBillingOptionCreateManyProductInputObjectSchema } from './ProductBillingOptionCreateManyProductInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ProductBillingOptionCreateManyProductInputObjectSchema), z.lazy(() => ProductBillingOptionCreateManyProductInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ProductBillingOptionCreateManyProductInputEnvelopeObjectSchema: z.ZodType<Prisma.ProductBillingOptionCreateManyProductInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ProductBillingOptionCreateManyProductInputEnvelope>;
export const ProductBillingOptionCreateManyProductInputEnvelopeObjectZodSchema = makeSchema();
