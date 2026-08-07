import * as z from 'zod';

export const CartItemScalarFieldEnumSchema = z.enum(['id', 'cartId', 'productId', 'quantity', 'billingPeriod', 'configuration', 'createdAt', 'updatedAt'])

export type CartItemScalarFieldEnum = z.infer<typeof CartItemScalarFieldEnumSchema>;