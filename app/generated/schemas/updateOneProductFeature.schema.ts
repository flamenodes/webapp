import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { ProductFeatureSelectObjectSchema as ProductFeatureSelectObjectSchema } from './objects/ProductFeatureSelect.schema';
import { ProductFeatureIncludeObjectSchema as ProductFeatureIncludeObjectSchema } from './objects/ProductFeatureInclude.schema';
import { ProductFeatureUpdateInputObjectSchema as ProductFeatureUpdateInputObjectSchema } from './objects/ProductFeatureUpdateInput.schema';
import { ProductFeatureUncheckedUpdateInputObjectSchema as ProductFeatureUncheckedUpdateInputObjectSchema } from './objects/ProductFeatureUncheckedUpdateInput.schema';
import { ProductFeatureWhereUniqueInputObjectSchema as ProductFeatureWhereUniqueInputObjectSchema } from './objects/ProductFeatureWhereUniqueInput.schema';

export const ProductFeatureUpdateOneSchema: z.ZodType<Prisma.ProductFeatureUpdateArgs> = z.object({ select: ProductFeatureSelectObjectSchema.optional(), include: ProductFeatureIncludeObjectSchema.optional(), data: z.union([ProductFeatureUpdateInputObjectSchema, ProductFeatureUncheckedUpdateInputObjectSchema]), where: ProductFeatureWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ProductFeatureUpdateArgs>;

export const ProductFeatureUpdateOneZodSchema = z.object({ select: ProductFeatureSelectObjectSchema.optional(), include: ProductFeatureIncludeObjectSchema.optional(), data: z.union([ProductFeatureUpdateInputObjectSchema, ProductFeatureUncheckedUpdateInputObjectSchema]), where: ProductFeatureWhereUniqueInputObjectSchema }).strict();