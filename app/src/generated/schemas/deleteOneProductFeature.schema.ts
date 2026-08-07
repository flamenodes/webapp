import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { ProductFeatureSelectObjectSchema as ProductFeatureSelectObjectSchema } from './objects/ProductFeatureSelect.schema';
import { ProductFeatureIncludeObjectSchema as ProductFeatureIncludeObjectSchema } from './objects/ProductFeatureInclude.schema';
import { ProductFeatureWhereUniqueInputObjectSchema as ProductFeatureWhereUniqueInputObjectSchema } from './objects/ProductFeatureWhereUniqueInput.schema';

export const ProductFeatureDeleteOneSchema: z.ZodType<Prisma.ProductFeatureDeleteArgs> = z.object({ select: ProductFeatureSelectObjectSchema.optional(), include: ProductFeatureIncludeObjectSchema.optional(), where: ProductFeatureWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ProductFeatureDeleteArgs>;

export const ProductFeatureDeleteOneZodSchema = z.object({ select: ProductFeatureSelectObjectSchema.optional(), include: ProductFeatureIncludeObjectSchema.optional(), where: ProductFeatureWhereUniqueInputObjectSchema }).strict();