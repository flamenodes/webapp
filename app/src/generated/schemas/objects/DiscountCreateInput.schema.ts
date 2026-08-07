import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { ProductCreateNestedManyWithoutDiscountInputObjectSchema as ProductCreateNestedManyWithoutDiscountInputObjectSchema } from './ProductCreateNestedManyWithoutDiscountInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  label: z.string(),
  percentage: z.number().int(),
  product: z.lazy(() => ProductCreateNestedManyWithoutDiscountInputObjectSchema).optional()
}).strict();
export const DiscountCreateInputObjectSchema: z.ZodType<Prisma.DiscountCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.DiscountCreateInput>;
export const DiscountCreateInputObjectZodSchema = makeSchema();
