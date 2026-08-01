import * as z from 'zod';

export const ProductBillingOptionScalarFieldEnumSchema = z.enum(['id', 'productId', 'billingPeriod', 'price', 'customDays'])

export type ProductBillingOptionScalarFieldEnum = z.infer<typeof ProductBillingOptionScalarFieldEnumSchema>;