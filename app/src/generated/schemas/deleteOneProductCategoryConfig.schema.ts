import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { ProductCategoryConfigSelectObjectSchema as ProductCategoryConfigSelectObjectSchema } from './objects/ProductCategoryConfigSelect.schema';
import { ProductCategoryConfigWhereUniqueInputObjectSchema as ProductCategoryConfigWhereUniqueInputObjectSchema } from './objects/ProductCategoryConfigWhereUniqueInput.schema';

export const ProductCategoryConfigDeleteOneSchema: z.ZodType<Prisma.ProductCategoryConfigDeleteArgs> = z.object({ select: ProductCategoryConfigSelectObjectSchema.optional(),  where: ProductCategoryConfigWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ProductCategoryConfigDeleteArgs>;

export const ProductCategoryConfigDeleteOneZodSchema = z.object({ select: ProductCategoryConfigSelectObjectSchema.optional(),  where: ProductCategoryConfigWhereUniqueInputObjectSchema }).strict();