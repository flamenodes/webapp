import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ProductFeatureSelectObjectSchema as ProductFeatureSelectObjectSchema } from './objects/ProductFeatureSelect.schema';
import { ProductFeatureCreateManyInputObjectSchema as ProductFeatureCreateManyInputObjectSchema } from './objects/ProductFeatureCreateManyInput.schema';

export const ProductFeatureCreateManyAndReturnSchema: z.ZodType<Prisma.ProductFeatureCreateManyAndReturnArgs> = z.object({ select: ProductFeatureSelectObjectSchema.optional(), data: z.union([ ProductFeatureCreateManyInputObjectSchema, z.array(ProductFeatureCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ProductFeatureCreateManyAndReturnArgs>;

export const ProductFeatureCreateManyAndReturnZodSchema = z.object({ select: ProductFeatureSelectObjectSchema.optional(), data: z.union([ ProductFeatureCreateManyInputObjectSchema, z.array(ProductFeatureCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();