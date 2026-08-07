import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';


const makeSchema = () => z.object({
  id: z.string().optional(),
  label: z.string(),
  sortOrder: z.number().int().optional()
}).strict();
export const ProductFeatureCreateWithoutProductInputObjectSchema: z.ZodType<Prisma.ProductFeatureCreateWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductFeatureCreateWithoutProductInput>;
export const ProductFeatureCreateWithoutProductInputObjectZodSchema = makeSchema();
