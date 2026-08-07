import * as z from 'zod';

export const ConfigurationValueScalarFieldEnumSchema = z.enum(['id', 'optionId', 'label', 'value', 'description', 'priceModifier', 'metadata', 'sortOrder', 'createdAt', 'updatedAt'])

export type ConfigurationValueScalarFieldEnum = z.infer<typeof ConfigurationValueScalarFieldEnumSchema>;