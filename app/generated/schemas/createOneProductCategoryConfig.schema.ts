import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
import { ProductCategoryConfigSelectObjectSchema as ProductCategoryConfigSelectObjectSchema } from './objects/ProductCategoryConfigSelect.schema';
import { ProductCategoryConfigCreateInputObjectSchema as ProductCategoryConfigCreateInputObjectSchema } from './objects/ProductCategoryConfigCreateInput.schema';
import { ProductCategoryConfigUncheckedCreateInputObjectSchema as ProductCategoryConfigUncheckedCreateInputObjectSchema } from './objects/ProductCategoryConfigUncheckedCreateInput.schema';

export const ProductCategoryConfigCreateOneSchema: z.ZodType<Prisma.ProductCategoryConfigCreateArgs> = z.object({ select: ProductCategoryConfigSelectObjectSchema.optional(),  data: z.union([ProductCategoryConfigCreateInputObjectSchema, ProductCategoryConfigUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ProductCategoryConfigCreateArgs>;

export const ProductCategoryConfigCreateOneZodSchema = z.object({ select: ProductCategoryConfigSelectObjectSchema.optional(),  data: z.union([ProductCategoryConfigCreateInputObjectSchema, ProductCategoryConfigUncheckedCreateInputObjectSchema]) }).strict();