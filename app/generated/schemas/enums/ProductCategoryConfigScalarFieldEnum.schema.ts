import * as z from 'zod';

export const ProductCategoryConfigScalarFieldEnumSchema = z.enum(['id', 'category', 'billingPeriods', 'createdAt', 'updatedAt'])

export type ProductCategoryConfigScalarFieldEnum = z.infer<typeof ProductCategoryConfigScalarFieldEnumSchema>;