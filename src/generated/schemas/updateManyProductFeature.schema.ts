import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ProductFeatureUpdateManyMutationInputObjectSchema as ProductFeatureUpdateManyMutationInputObjectSchema } from './objects/ProductFeatureUpdateManyMutationInput.schema';
import { ProductFeatureWhereInputObjectSchema as ProductFeatureWhereInputObjectSchema } from './objects/ProductFeatureWhereInput.schema';

export const ProductFeatureUpdateManySchema: z.ZodType<Prisma.ProductFeatureUpdateManyArgs> = z.object({ data: ProductFeatureUpdateManyMutationInputObjectSchema, where: ProductFeatureWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ProductFeatureUpdateManyArgs>;

export const ProductFeatureUpdateManyZodSchema = z.object({ data: ProductFeatureUpdateManyMutationInputObjectSchema, where: ProductFeatureWhereInputObjectSchema.optional() }).strict();