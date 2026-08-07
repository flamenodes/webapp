import * as z from 'zod';

export const BillingAddressScalarFieldEnumSchema = z.enum(['id', 'userId', 'firstName', 'lastName', 'phone', 'address', 'city', 'state', 'zip', 'country', 'updatedAt', 'createdAt'])

export type BillingAddressScalarFieldEnum = z.infer<typeof BillingAddressScalarFieldEnumSchema>;