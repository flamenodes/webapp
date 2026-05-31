import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
import { ProductCategoryConfigSelectObjectSchema as ProductCategoryConfigSelectObjectSchema } from './objects/ProductCategoryConfigSelect.schema';
import { ProductCategoryConfigWhereUniqueInputObjectSchema as ProductCategoryConfigWhereUniqueInputObjectSchema } from './objects/ProductCategoryConfigWhereUniqueInput.schema';
import { ProductCategoryConfigCreateInputObjectSchema as ProductCategoryConfigCreateInputObjectSchema } from './objects/ProductCategoryConfigCreateInput.schema';
import { ProductCategoryConfigUncheckedCreateInputObjectSchema as ProductCategoryConfigUncheckedCreateInputObjectSchema } from './objects/ProductCategoryConfigUncheckedCreateInput.schema';
import { ProductCategoryConfigUpdateInputObjectSchema as ProductCategoryConfigUpdateInputObjectSchema } from './objects/ProductCategoryConfigUpdateInput.schema';
import { ProductCategoryConfigUncheckedUpdateInputObjectSchema as ProductCategoryConfigUncheckedUpdateInputObjectSchema } from './objects/ProductCategoryConfigUncheckedUpdateInput.schema';

export const ProductCategoryConfigUpsertOneSchema: z.ZodType<Prisma.ProductCategoryConfigUpsertArgs> = z.object({ select: ProductCategoryConfigSelectObjectSchema.optional(),  where: ProductCategoryConfigWhereUniqueInputObjectSchema, create: z.union([ ProductCategoryConfigCreateInputObjectSchema, ProductCategoryConfigUncheckedCreateInputObjectSchema ]), update: z.union([ ProductCategoryConfigUpdateInputObjectSchema, ProductCategoryConfigUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ProductCategoryConfigUpsertArgs>;

export const ProductCategoryConfigUpsertOneZodSchema = z.object({ select: ProductCategoryConfigSelectObjectSchema.optional(),  where: ProductCategoryConfigWhereUniqueInputObjectSchema, create: z.union([ ProductCategoryConfigCreateInputObjectSchema, ProductCategoryConfigUncheckedCreateInputObjectSchema ]), update: z.union([ ProductCategoryConfigUpdateInputObjectSchema, ProductCategoryConfigUncheckedUpdateInputObjectSchema ]) }).strict();