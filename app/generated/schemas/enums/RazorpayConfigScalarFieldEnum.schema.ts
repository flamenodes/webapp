import * as z from 'zod';

export const RazorpayConfigScalarFieldEnumSchema = z.enum(['id', 'mode', 'testKeyId', 'testKeySecret', 'prodKeyId', 'prodKeySecret', 'gstin', 'companyName', 'companyAddress', 'companyCity', 'companyZip', 'companyCountry', 'updatedAt', 'createdAt'])

export type RazorpayConfigScalarFieldEnum = z.infer<typeof RazorpayConfigScalarFieldEnumSchema>;