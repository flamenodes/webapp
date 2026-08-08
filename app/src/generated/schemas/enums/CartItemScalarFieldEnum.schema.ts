import * as z from 'zod';

export const CartItemScalarFieldEnumSchema = z.enum(['id', 'cartId', 'productId', 'quantity', 'billingPeriod', 'createdAt', 'updatedAt', 'configuration'])

export type CartItemScalarFieldEnum = z.infer<typeof CartItemScalarFieldEnumSchema>;