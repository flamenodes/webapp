import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { ProductCategoryConfigCreateManyInputObjectSchema as ProductCategoryConfigCreateManyInputObjectSchema } from './objects/ProductCategoryConfigCreateManyInput.schema';

export const ProductCategoryConfigCreateManySchema: z.ZodType<Prisma.ProductCategoryConfigCreateManyArgs> = z.object({ data: z.union([ ProductCategoryConfigCreateManyInputObjectSchema, z.array(ProductCategoryConfigCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ProductCategoryConfigCreateManyArgs>;

export const ProductCategoryConfigCreateManyZodSchema = z.object({ data: z.union([ ProductCategoryConfigCreateManyInputObjectSchema, z.array(ProductCategoryConfigCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();