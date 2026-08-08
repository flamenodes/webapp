import * as z from 'zod';

export const CartScalarFieldEnumSchema = z.enum(['id', 'userId', 'createdAt', 'couponCode', 'updatedAt'])

export type CartScalarFieldEnum = z.infer<typeof CartScalarFieldEnumSchema>;