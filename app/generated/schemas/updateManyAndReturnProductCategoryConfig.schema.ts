import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
import { ProductCategoryConfigSelectObjectSchema as ProductCategoryConfigSelectObjectSchema } from './objects/ProductCategoryConfigSelect.schema';
import { ProductCategoryConfigUpdateManyMutationInputObjectSchema as ProductCategoryConfigUpdateManyMutationInputObjectSchema } from './objects/ProductCategoryConfigUpdateManyMutationInput.schema';
import { ProductCategoryConfigWhereInputObjectSchema as ProductCategoryConfigWhereInputObjectSchema } from './objects/ProductCategoryConfigWhereInput.schema';

export const ProductCategoryConfigUpdateManyAndReturnSchema: z.ZodType<Prisma.ProductCategoryConfigUpdateManyAndReturnArgs> = z.object({ select: ProductCategoryConfigSelectObjectSchema.optional(), data: ProductCategoryConfigUpdateManyMutationInputObjectSchema, where: ProductCategoryConfigWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ProductCategoryConfigUpdateManyAndReturnArgs>;

export const ProductCategoryConfigUpdateManyAndReturnZodSchema = z.object({ select: ProductCategoryConfigSelectObjectSchema.optional(), data: ProductCategoryConfigUpdateManyMutationInputObjectSchema, where: ProductCategoryConfigWhereInputObjectSchema.optional() }).strict();