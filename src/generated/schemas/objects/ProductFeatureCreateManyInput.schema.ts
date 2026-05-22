import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  productId: z.string(),
  label: z.string(),
  sortOrder: z.number().int().optional()
}).strict();
export const ProductFeatureCreateManyInputObjectSchema: z.ZodType<Prisma.ProductFeatureCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductFeatureCreateManyInput>;
export const ProductFeatureCreateManyInputObjectZodSchema = makeSchema();
