import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { ProductCreateManyDiscountInputObjectSchema as ProductCreateManyDiscountInputObjectSchema } from './ProductCreateManyDiscountInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ProductCreateManyDiscountInputObjectSchema), z.lazy(() => ProductCreateManyDiscountInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ProductCreateManyDiscountInputEnvelopeObjectSchema: z.ZodType<Prisma.ProductCreateManyDiscountInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreateManyDiscountInputEnvelope>;
export const ProductCreateManyDiscountInputEnvelopeObjectZodSchema = makeSchema();
