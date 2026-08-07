import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { ProductCategoryConfigSelectObjectSchema as ProductCategoryConfigSelectObjectSchema } from './objects/ProductCategoryConfigSelect.schema';
import { ProductCategoryConfigCreateManyInputObjectSchema as ProductCategoryConfigCreateManyInputObjectSchema } from './objects/ProductCategoryConfigCreateManyInput.schema';

export const ProductCategoryConfigCreateManyAndReturnSchema: z.ZodType<Prisma.ProductCategoryConfigCreateManyAndReturnArgs> = z.object({ select: ProductCategoryConfigSelectObjectSchema.optional(), data: z.union([ ProductCategoryConfigCreateManyInputObjectSchema, z.array(ProductCategoryConfigCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ProductCategoryConfigCreateManyAndReturnArgs>;

export const ProductCategoryConfigCreateManyAndReturnZodSchema = z.object({ select: ProductCategoryConfigSelectObjectSchema.optional(), data: z.union([ ProductCategoryConfigCreateManyInputObjectSchema, z.array(ProductCategoryConfigCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();