import * as z from 'zod';
import { ProductCategoryConfigOrderByWithRelationInputObjectSchema as ProductCategoryConfigOrderByWithRelationInputObjectSchema } from './objects/ProductCategoryConfigOrderByWithRelationInput.schema';
import { ProductCategoryConfigWhereInputObjectSchema as ProductCategoryConfigWhereInputObjectSchema } from './objects/ProductCategoryConfigWhereInput.schema';
import { ProductCategoryConfigWhereUniqueInputObjectSchema as ProductCategoryConfigWhereUniqueInputObjectSchema } from './objects/ProductCategoryConfigWhereUniqueInput.schema';
import { ProductCategoryConfigScalarFieldEnumSchema } from './enums/ProductCategoryConfigScalarFieldEnum.schema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const ProductCategoryConfigFindFirstSelectSchema = z.object({
    id: z.boolean().optional(),
    category: z.boolean().optional(),
    billingPeriods: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
}).strict();
export const ProductCategoryConfigFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    category: z.boolean().optional(),
    billingPeriods: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
}).strict();
export const ProductCategoryConfigFindFirstSchema = z.object({ select: ProductCategoryConfigFindFirstSelectSchema.optional(), orderBy: z.union([ProductCategoryConfigOrderByWithRelationInputObjectSchema, ProductCategoryConfigOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProductCategoryConfigWhereInputObjectSchema.optional(), cursor: ProductCategoryConfigWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProductCategoryConfigScalarFieldEnumSchema, ProductCategoryConfigScalarFieldEnumSchema.array()]).optional() }).strict();
export const ProductCategoryConfigFindFirstZodSchema = z.object({ select: ProductCategoryConfigFindFirstSelectSchema.optional(), orderBy: z.union([ProductCategoryConfigOrderByWithRelationInputObjectSchema, ProductCategoryConfigOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProductCategoryConfigWhereInputObjectSchema.optional(), cursor: ProductCategoryConfigWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProductCategoryConfigScalarFieldEnumSchema, ProductCategoryConfigScalarFieldEnumSchema.array()]).optional() }).strict();
//# sourceMappingURL=findFirstProductCategoryConfig.schema.js.map