import * as z from 'zod';

export const ProductScalarFieldEnumSchema = z.enum(['id', 'deployMode', 'specs', 'createdAt', 'updatedAt', 'category', 'icon', 'inStock', 'planName', 'price', 'discountId', 'featureCategory', 'badge', 'sortOrder'])

export type ProductScalarFieldEnum = z.infer<typeof ProductScalarFieldEnumSchema>;