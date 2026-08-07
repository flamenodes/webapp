import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { ProductCategoryConfigSelectObjectSchema as ProductCategoryConfigSelectObjectSchema } from './objects/ProductCategoryConfigSelect.schema';
import { ProductCategoryConfigUpdateInputObjectSchema as ProductCategoryConfigUpdateInputObjectSchema } from './objects/ProductCategoryConfigUpdateInput.schema';
import { ProductCategoryConfigUncheckedUpdateInputObjectSchema as ProductCategoryConfigUncheckedUpdateInputObjectSchema } from './objects/ProductCategoryConfigUncheckedUpdateInput.schema';
import { ProductCategoryConfigWhereUniqueInputObjectSchema as ProductCategoryConfigWhereUniqueInputObjectSchema } from './objects/ProductCategoryConfigWhereUniqueInput.schema';

export const ProductCategoryConfigUpdateOneSchema: z.ZodType<Prisma.ProductCategoryConfigUpdateArgs> = z.object({ select: ProductCategoryConfigSelectObjectSchema.optional(),  data: z.union([ProductCategoryConfigUpdateInputObjectSchema, ProductCategoryConfigUncheckedUpdateInputObjectSchema]), where: ProductCategoryConfigWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ProductCategoryConfigUpdateArgs>;

export const ProductCategoryConfigUpdateOneZodSchema = z.object({ select: ProductCategoryConfigSelectObjectSchema.optional(),  data: z.union([ProductCategoryConfigUpdateInputObjectSchema, ProductCategoryConfigUncheckedUpdateInputObjectSchema]), where: ProductCategoryConfigWhereUniqueInputObjectSchema }).strict();