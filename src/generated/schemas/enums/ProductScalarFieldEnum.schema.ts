import * as z from 'zod';

export const ProductScalarFieldEnumSchema = z.enum(['id', 'planName', 'icon', 'imageUrl', 'category', 'price', 'features', 'featureCategory', 'inStock', 'discountId', 'specs', 'deployMode', 'createdAt', 'updatedAt'])

export type ProductScalarFieldEnum = z.infer<typeof ProductScalarFieldEnumSchema>;