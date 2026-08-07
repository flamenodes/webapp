import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { ProductCategoryConfigUpdateManyMutationInputObjectSchema as ProductCategoryConfigUpdateManyMutationInputObjectSchema } from './objects/ProductCategoryConfigUpdateManyMutationInput.schema';
import { ProductCategoryConfigWhereInputObjectSchema as ProductCategoryConfigWhereInputObjectSchema } from './objects/ProductCategoryConfigWhereInput.schema';

export const ProductCategoryConfigUpdateManySchema: z.ZodType<Prisma.ProductCategoryConfigUpdateManyArgs> = z.object({ data: ProductCategoryConfigUpdateManyMutationInputObjectSchema, where: ProductCategoryConfigWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ProductCategoryConfigUpdateManyArgs>;

export const ProductCategoryConfigUpdateManyZodSchema = z.object({ data: ProductCategoryConfigUpdateManyMutationInputObjectSchema, where: ProductCategoryConfigWhereInputObjectSchema.optional() }).strict();