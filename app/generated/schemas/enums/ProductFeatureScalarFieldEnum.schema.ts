import * as z from 'zod';

export const ProductFeatureScalarFieldEnumSchema = z.enum(['id', 'productId', 'label', 'sortOrder'])

export type ProductFeatureScalarFieldEnum = z.infer<typeof ProductFeatureScalarFieldEnumSchema>;