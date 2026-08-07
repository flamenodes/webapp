import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';


const makeSchema = () => z.object({
  id: z.string().optional(),
  label: z.string(),
  sortOrder: z.number().int().optional()
}).strict();
export const ProductFeatureCreateManyProductInputObjectSchema: z.ZodType<Prisma.ProductFeatureCreateManyProductInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductFeatureCreateManyProductInput>;
export const ProductFeatureCreateManyProductInputObjectZodSchema = makeSchema();
