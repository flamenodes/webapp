import * as z from 'zod';

export const OrderScalarFieldEnumSchema = z.enum(['id', 'userId', 'status', 'subtotalAmount', 'discountAmount', 'totalAmount', 'couponCode', 'deliveryMessage', 'deliveryData', 'createdAt', 'updatedAt'])

export type OrderScalarFieldEnum = z.infer<typeof OrderScalarFieldEnumSchema>;