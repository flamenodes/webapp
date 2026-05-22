import * as z from 'zod';

export const OrderItemScalarFieldEnumSchema = z.enum(['id', 'orderId', 'productId', 'productName', 'quantity', 'billingPeriod', 'unitPrice', 'totalPrice', 'specsSnapshot', 'expiresAt', 'createdAt'])

export type OrderItemScalarFieldEnum = z.infer<typeof OrderItemScalarFieldEnumSchema>;