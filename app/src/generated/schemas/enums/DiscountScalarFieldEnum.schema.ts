import * as z from 'zod';

export const DiscountScalarFieldEnumSchema = z.enum(['id', 'label', 'percentage'])

export type DiscountScalarFieldEnum = z.infer<typeof DiscountScalarFieldEnumSchema>;