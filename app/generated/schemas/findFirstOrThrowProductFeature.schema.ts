import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { ProductFeatureIncludeObjectSchema as ProductFeatureIncludeObjectSchema } from './objects/ProductFeatureInclude.schema';
import { ProductFeatureOrderByWithRelationInputObjectSchema as ProductFeatureOrderByWithRelationInputObjectSchema } from './objects/ProductFeatureOrderByWithRelationInput.schema';
import { ProductFeatureWhereInputObjectSchema as ProductFeatureWhereInputObjectSchema } from './objects/ProductFeatureWhereInput.schema';
import { ProductFeatureWhereUniqueInputObjectSchema as ProductFeatureWhereUniqueInputObjectSchema } from './objects/ProductFeatureWhereUniqueInput.schema';
import { ProductFeatureScalarFieldEnumSchema } from './enums/ProductFeatureScalarFieldEnum.schema';
import { ProductArgsObjectSchema as ProductArgsObjectSchema } from './objects/ProductArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProductFeatureFindFirstOrThrowSelectSchema: z.ZodType<Prisma.ProductFeatureSelect> = z.object({
    id: z.boolean().optional(),
    productId: z.boolean().optional(),
    product: z.union([z.boolean(), z.lazy(() => ProductArgsObjectSchema)]).optional(),
    label: z.boolean().optional(),
    sortOrder: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ProductFeatureSelect>;

export const ProductFeatureFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    productId: z.boolean().optional(),
    product: z.union([z.boolean(), z.lazy(() => ProductArgsObjectSchema)]).optional(),
    label: z.boolean().optional(),
    sortOrder: z.boolean().optional()
  }).strict();

export const ProductFeatureFindFirstOrThrowSchema: z.ZodType<Prisma.ProductFeatureFindFirstOrThrowArgs> = z.object({ select: ProductFeatureFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ProductFeatureIncludeObjectSchema.optional()), orderBy: z.union([ProductFeatureOrderByWithRelationInputObjectSchema, ProductFeatureOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProductFeatureWhereInputObjectSchema.optional(), cursor: ProductFeatureWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProductFeatureScalarFieldEnumSchema, ProductFeatureScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ProductFeatureFindFirstOrThrowArgs>;

export const ProductFeatureFindFirstOrThrowZodSchema = z.object({ select: ProductFeatureFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ProductFeatureIncludeObjectSchema.optional()), orderBy: z.union([ProductFeatureOrderByWithRelationInputObjectSchema, ProductFeatureOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProductFeatureWhereInputObjectSchema.optional(), cursor: ProductFeatureWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProductFeatureScalarFieldEnumSchema, ProductFeatureScalarFieldEnumSchema.array()]).optional() }).strict();