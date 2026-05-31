import * as z from 'zod';
import { ProductFeatureIncludeObjectSchema as ProductFeatureIncludeObjectSchema } from './objects/ProductFeatureInclude.schema';
import { ProductFeatureOrderByWithRelationInputObjectSchema as ProductFeatureOrderByWithRelationInputObjectSchema } from './objects/ProductFeatureOrderByWithRelationInput.schema';
import { ProductFeatureWhereInputObjectSchema as ProductFeatureWhereInputObjectSchema } from './objects/ProductFeatureWhereInput.schema';
import { ProductFeatureWhereUniqueInputObjectSchema as ProductFeatureWhereUniqueInputObjectSchema } from './objects/ProductFeatureWhereUniqueInput.schema';
import { ProductFeatureScalarFieldEnumSchema } from './enums/ProductFeatureScalarFieldEnum.schema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const ProductFeatureFindManySelectSchema = z.object({
    id: z.boolean().optional(),
    productId: z.boolean().optional(),
    product: z.boolean().optional(),
    label: z.boolean().optional(),
    sortOrder: z.boolean().optional()
}).strict();
export const ProductFeatureFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    productId: z.boolean().optional(),
    product: z.boolean().optional(),
    label: z.boolean().optional(),
    sortOrder: z.boolean().optional()
}).strict();
export const ProductFeatureFindManySchema = z.object({ select: ProductFeatureFindManySelectSchema.optional(), include: z.lazy(() => ProductFeatureIncludeObjectSchema.optional()), orderBy: z.union([ProductFeatureOrderByWithRelationInputObjectSchema, ProductFeatureOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProductFeatureWhereInputObjectSchema.optional(), cursor: ProductFeatureWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProductFeatureScalarFieldEnumSchema, ProductFeatureScalarFieldEnumSchema.array()]).optional() }).strict();
export const ProductFeatureFindManyZodSchema = z.object({ select: ProductFeatureFindManySelectSchema.optional(), include: z.lazy(() => ProductFeatureIncludeObjectSchema.optional()), orderBy: z.union([ProductFeatureOrderByWithRelationInputObjectSchema, ProductFeatureOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProductFeatureWhereInputObjectSchema.optional(), cursor: ProductFeatureWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProductFeatureScalarFieldEnumSchema, ProductFeatureScalarFieldEnumSchema.array()]).optional() }).strict();
//# sourceMappingURL=findManyProductFeature.schema.js.map