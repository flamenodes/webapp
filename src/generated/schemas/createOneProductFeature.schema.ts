import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ProductFeatureSelectObjectSchema as ProductFeatureSelectObjectSchema } from './objects/ProductFeatureSelect.schema';
import { ProductFeatureIncludeObjectSchema as ProductFeatureIncludeObjectSchema } from './objects/ProductFeatureInclude.schema';
import { ProductFeatureCreateInputObjectSchema as ProductFeatureCreateInputObjectSchema } from './objects/ProductFeatureCreateInput.schema';
import { ProductFeatureUncheckedCreateInputObjectSchema as ProductFeatureUncheckedCreateInputObjectSchema } from './objects/ProductFeatureUncheckedCreateInput.schema';

export const ProductFeatureCreateOneSchema: z.ZodType<Prisma.ProductFeatureCreateArgs> = z.object({ select: ProductFeatureSelectObjectSchema.optional(), include: ProductFeatureIncludeObjectSchema.optional(), data: z.union([ProductFeatureCreateInputObjectSchema, ProductFeatureUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ProductFeatureCreateArgs>;

export const ProductFeatureCreateOneZodSchema = z.object({ select: ProductFeatureSelectObjectSchema.optional(), include: ProductFeatureIncludeObjectSchema.optional(), data: z.union([ProductFeatureCreateInputObjectSchema, ProductFeatureUncheckedCreateInputObjectSchema]) }).strict();