import * as z from 'zod';

export const OrderScalarFieldEnumSchema = z.enum(['id', 'userId', 'totalAmount', 'status', 'deliveryMessage', 'deliveryData', 'createdAt', 'couponCode', 'discountAmount', 'subtotalAmount', 'updatedAt', 'renewalForServerId'])

export type OrderScalarFieldEnum = z.infer<typeof OrderScalarFieldEnumSchema>;