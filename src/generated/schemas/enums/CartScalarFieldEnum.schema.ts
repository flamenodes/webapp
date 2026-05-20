import * as z from 'zod';

export const CartScalarFieldEnumSchema = z.enum(['id', 'userId', 'couponCode', 'createdAt', 'updatedAt'])

export type CartScalarFieldEnum = z.infer<typeof CartScalarFieldEnumSchema>;