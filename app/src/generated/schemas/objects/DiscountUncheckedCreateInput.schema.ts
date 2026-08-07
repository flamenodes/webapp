import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { ProductUncheckedCreateNestedManyWithoutDiscountInputObjectSchema as ProductUncheckedCreateNestedManyWithoutDiscountInputObjectSchema } from './ProductUncheckedCreateNestedManyWithoutDiscountInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  label: z.string(),
  percentage: z.number().int(),
  product: z.lazy(() => ProductUncheckedCreateNestedManyWithoutDiscountInputObjectSchema).optional()
}).strict();
export const DiscountUncheckedCreateInputObjectSchema: z.ZodType<Prisma.DiscountUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.DiscountUncheckedCreateInput>;
export const DiscountUncheckedCreateInputObjectZodSchema = makeSchema();
