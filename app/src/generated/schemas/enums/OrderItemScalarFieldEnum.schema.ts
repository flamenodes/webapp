import * as z from 'zod';

export const OrderItemScalarFieldEnumSchema = z.enum(['id', 'orderId', 'productId', 'quantity', 'expiresAt', 'billingPeriod', 'createdAt', 'productName', 'specsSnapshot', 'totalPrice', 'unitPrice', 'configuration'])

export type OrderItemScalarFieldEnum = z.infer<typeof OrderItemScalarFieldEnumSchema>;