import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { ProductCategoryConfigWhereInputObjectSchema as ProductCategoryConfigWhereInputObjectSchema } from './objects/ProductCategoryConfigWhereInput.schema';

export const ProductCategoryConfigDeleteManySchema: z.ZodType<Prisma.ProductCategoryConfigDeleteManyArgs> = z.object({ where: ProductCategoryConfigWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ProductCategoryConfigDeleteManyArgs>;

export const ProductCategoryConfigDeleteManyZodSchema = z.object({ where: ProductCategoryConfigWhereInputObjectSchema.optional() }).strict();