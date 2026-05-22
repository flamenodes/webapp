import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
import { ProductFeatureWhereInputObjectSchema as ProductFeatureWhereInputObjectSchema } from './objects/ProductFeatureWhereInput.schema';

export const ProductFeatureDeleteManySchema: z.ZodType<Prisma.ProductFeatureDeleteManyArgs> = z.object({ where: ProductFeatureWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ProductFeatureDeleteManyArgs>;

export const ProductFeatureDeleteManyZodSchema = z.object({ where: ProductFeatureWhereInputObjectSchema.optional() }).strict();