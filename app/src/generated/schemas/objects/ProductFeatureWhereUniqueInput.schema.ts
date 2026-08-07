import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const ProductFeatureWhereUniqueInputObjectSchema: z.ZodType<Prisma.ProductFeatureWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductFeatureWhereUniqueInput>;
export const ProductFeatureWhereUniqueInputObjectZodSchema = makeSchema();
