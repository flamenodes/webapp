import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
import { ProductCategoryConfigSelectObjectSchema as ProductCategoryConfigSelectObjectSchema } from './objects/ProductCategoryConfigSelect.schema';
import { ProductCategoryConfigWhereUniqueInputObjectSchema as ProductCategoryConfigWhereUniqueInputObjectSchema } from './objects/ProductCategoryConfigWhereUniqueInput.schema';

export const ProductCategoryConfigFindUniqueOrThrowSchema: z.ZodType<Prisma.ProductCategoryConfigFindUniqueOrThrowArgs> = z.object({ select: ProductCategoryConfigSelectObjectSchema.optional(),  where: ProductCategoryConfigWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ProductCategoryConfigFindUniqueOrThrowArgs>;

export const ProductCategoryConfigFindUniqueOrThrowZodSchema = z.object({ select: ProductCategoryConfigSelectObjectSchema.optional(),  where: ProductCategoryConfigWhereUniqueInputObjectSchema }).strict();