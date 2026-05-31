import * as z from 'zod';

export const ProductBillingOptionScalarFieldEnumSchema = z.enum(['id', 'productId', 'billingPeriod', 'price'])

export type ProductBillingOptionScalarFieldEnum = z.infer<typeof ProductBillingOptionScalarFieldEnumSchema>;