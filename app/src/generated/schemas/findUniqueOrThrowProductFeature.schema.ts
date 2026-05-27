import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ProductFeatureSelectObjectSchema as ProductFeatureSelectObjectSchema } from './objects/ProductFeatureSelect.schema';
import { ProductFeatureIncludeObjectSchema as ProductFeatureIncludeObjectSchema } from './objects/ProductFeatureInclude.schema';
import { ProductFeatureWhereUniqueInputObjectSchema as ProductFeatureWhereUniqueInputObjectSchema } from './objects/ProductFeatureWhereUniqueInput.schema';

export const ProductFeatureFindUniqueOrThrowSchema: z.ZodType<Prisma.ProductFeatureFindUniqueOrThrowArgs> = z.object({ select: ProductFeatureSelectObjectSchema.optional(), include: ProductFeatureIncludeObjectSchema.optional(), where: ProductFeatureWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ProductFeatureFindUniqueOrThrowArgs>;

export const ProductFeatureFindUniqueOrThrowZodSchema = z.object({ select: ProductFeatureSelectObjectSchema.optional(), include: ProductFeatureIncludeObjectSchema.optional(), where: ProductFeatureWhereUniqueInputObjectSchema }).strict();