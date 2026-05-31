import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
import { ProductCategoryConfigSelectObjectSchema as ProductCategoryConfigSelectObjectSchema } from './objects/ProductCategoryConfigSelect.schema';
import { ProductCategoryConfigWhereUniqueInputObjectSchema as ProductCategoryConfigWhereUniqueInputObjectSchema } from './objects/ProductCategoryConfigWhereUniqueInput.schema';

export const ProductCategoryConfigFindUniqueSchema: z.ZodType<Prisma.ProductCategoryConfigFindUniqueArgs> = z.object({ select: ProductCategoryConfigSelectObjectSchema.optional(),  where: ProductCategoryConfigWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ProductCategoryConfigFindUniqueArgs>;

export const ProductCategoryConfigFindUniqueZodSchema = z.object({ select: ProductCategoryConfigSelectObjectSchema.optional(),  where: ProductCategoryConfigWhereUniqueInputObjectSchema }).strict();