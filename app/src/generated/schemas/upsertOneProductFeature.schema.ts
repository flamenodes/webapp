import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { ProductFeatureSelectObjectSchema as ProductFeatureSelectObjectSchema } from './objects/ProductFeatureSelect.schema';
import { ProductFeatureIncludeObjectSchema as ProductFeatureIncludeObjectSchema } from './objects/ProductFeatureInclude.schema';
import { ProductFeatureWhereUniqueInputObjectSchema as ProductFeatureWhereUniqueInputObjectSchema } from './objects/ProductFeatureWhereUniqueInput.schema';
import { ProductFeatureCreateInputObjectSchema as ProductFeatureCreateInputObjectSchema } from './objects/ProductFeatureCreateInput.schema';
import { ProductFeatureUncheckedCreateInputObjectSchema as ProductFeatureUncheckedCreateInputObjectSchema } from './objects/ProductFeatureUncheckedCreateInput.schema';
import { ProductFeatureUpdateInputObjectSchema as ProductFeatureUpdateInputObjectSchema } from './objects/ProductFeatureUpdateInput.schema';
import { ProductFeatureUncheckedUpdateInputObjectSchema as ProductFeatureUncheckedUpdateInputObjectSchema } from './objects/ProductFeatureUncheckedUpdateInput.schema';

export const ProductFeatureUpsertOneSchema: z.ZodType<Prisma.ProductFeatureUpsertArgs> = z.object({ select: ProductFeatureSelectObjectSchema.optional(), include: ProductFeatureIncludeObjectSchema.optional(), where: ProductFeatureWhereUniqueInputObjectSchema, create: z.union([ ProductFeatureCreateInputObjectSchema, ProductFeatureUncheckedCreateInputObjectSchema ]), update: z.union([ ProductFeatureUpdateInputObjectSchema, ProductFeatureUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ProductFeatureUpsertArgs>;

export const ProductFeatureUpsertOneZodSchema = z.object({ select: ProductFeatureSelectObjectSchema.optional(), include: ProductFeatureIncludeObjectSchema.optional(), where: ProductFeatureWhereUniqueInputObjectSchema, create: z.union([ ProductFeatureCreateInputObjectSchema, ProductFeatureUncheckedCreateInputObjectSchema ]), update: z.union([ ProductFeatureUpdateInputObjectSchema, ProductFeatureUncheckedUpdateInputObjectSchema ]) }).strict();