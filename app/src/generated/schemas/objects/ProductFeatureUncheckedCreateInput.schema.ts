import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';


const makeSchema = () => z.object({
  id: z.string().optional(),
  productId: z.string(),
  label: z.string(),
  sortOrder: z.number().int().optional()
}).strict();
export const ProductFeatureUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ProductFeatureUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductFeatureUncheckedCreateInput>;
export const ProductFeatureUncheckedCreateInputObjectZodSchema = makeSchema();
