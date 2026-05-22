import * as z from 'zod';

export const ProductScalarFieldEnumSchema = z.enum(['id', 'planName', 'icon', 'badge', 'category', 'price', 'sortOrder', 'featureCategory', 'inStock', 'discountId', 'specs', 'deployMode', 'createdAt', 'updatedAt'])

export type ProductScalarFieldEnum = z.infer<typeof ProductScalarFieldEnumSchema>;