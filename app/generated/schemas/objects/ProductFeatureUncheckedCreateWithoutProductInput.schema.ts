import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  label: z.string(),
  sortOrder: z.number().int().optional()
}).strict();
export const ProductFeatureUncheckedCreateWithoutProductInputObjectSchema: z.ZodType<Prisma.ProductFeatureUncheckedCreateWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductFeatureUncheckedCreateWithoutProductInput>;
export const ProductFeatureUncheckedCreateWithoutProductInputObjectZodSchema = makeSchema();
