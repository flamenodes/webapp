import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
import { ProductFeatureCreateManyInputObjectSchema as ProductFeatureCreateManyInputObjectSchema } from './objects/ProductFeatureCreateManyInput.schema';

export const ProductFeatureCreateManySchema: z.ZodType<Prisma.ProductFeatureCreateManyArgs> = z.object({ data: z.union([ ProductFeatureCreateManyInputObjectSchema, z.array(ProductFeatureCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ProductFeatureCreateManyArgs>;

export const ProductFeatureCreateManyZodSchema = z.object({ data: z.union([ ProductFeatureCreateManyInputObjectSchema, z.array(ProductFeatureCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();